import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonThumbnail, IonButton, /*IonInput, IonItem,*/ IonRow, IonCol, IonAlert  } from '@ionic/react';
import React from 'react';
import './Page.css';
import firebase from '../firebaseConfig';
import { RouteComponentProps, Redirect } from "react-router-dom";
import axios from 'axios';





export default class Page extends React.Component<RouteComponentProps<{}>,any> {


  constructor(props: RouteComponentProps<{}>)
  {
    super(props);
    this.state = {
      transactPopUp : false,
      OTP: "",
      phone_number:'',
      goToPageOne: false,
      token : localStorage.getItem('MR_Token')
    }
  }

  componentDidMount() {
    
    // MarketCapWiseDiversificationAPI
    axios.get('http://127.0.0.1:8000/phonenumber/',{
          headers: {
            
            'Authorization': `Token ${this.state.token}`
          }
        }
      )
      .then(response =>{
        console.log(response)
        this.setState({phone_number : response.data['phone_number']})

       
  
      })
      .catch(error => {
        console.log(error)
      })

      
    
  }

  // onChange = (_event : any) => {
  //   console.log(_event.detail.value);
  //   this.setState({
  //     OTP : _event.detail.value
  //   });
  // };

  public handleClick() {

    
    var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
    var number = this.state.phone_number;
    firebase.auth().signInWithPhoneNumber(number, recaptcha).then( (e) => {
      
        
        var otp = prompt('Enter the otp', '');
        if(otp === null) return;
  


        e.confirm(otp)
        .then(result => {
            console.log(result.user);
            this.setState({goToPageOne : true})
           
        })
        .catch(function (error) {
            console.error( error);
            
        });
  
    })
    .catch(function (error) {
        console.error( error);
  
    });

    return true
  };




  render() {

    let {goToPageOne} = this.state
    const renderAuthButton = ()=>{
      if(goToPageOne){
        return <Redirect to="/page/Page1"></Redirect>
      } else{
        return <p className="small-title asd main-color text-center">Please click on get otp button. </p>
      }
    }

    return (

      <IonPage className="z-999">
        <IonHeader>
          <IonToolbar>
            <IonButtons className="ios-btn1" slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle className="header-bag ">
  
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
  
  
  
            <img src="/assets/icon/otp.svg" className="" alt=""></img>
            <IonRow className="px-7">
              <IonCol size="10">
                <p className="small-title asd">{/*OTP*/} </p>
              </IonCol>
              <IonCol size="2">
              <IonThumbnail>
                <IonButton onClick={() => this.setState({transactPopUp : true})} id="tool-tip" color="light" expand="block">?</IonButton>
                </IonThumbnail>
              </IonCol>
            </IonRow>
            <IonAlert
            isOpen={this.state.transactPopUp}
            onDidDismiss={() => this.setState({transactPopUp : false})}
            header={'Enter OTP'}
            subHeader={'Description for current page'}
            message={'Enter the six digit otp.'}
            buttons={['OK']}
          />
  
          
            {/*<IonItem className="cus-input1 mb-12 ft-w p-2">
              <IonInput placeholder="Enter OTP" value={this.state.OTP} onIonChange={_e => this.onChange(_e)} type="number"></IonInput>
            </IonItem>*/}
            <div id="recaptcha"></div>
            <IonButton className="cus-color mt-4" expand="full" onClick={() => { this.handleClick();  } } >Get OTP</IonButton>
            {
              renderAuthButton()
            }
           
          <p className="small-title asd main-color text-center">Already have an account ? </p>
          </IonContent>
  
      
        </IonPage>
    );
  

  }
  


};


