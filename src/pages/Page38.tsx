import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonThumbnail, IonButton, IonInput, IonItem, IonRow, IonCol, IonAlert  } from '@ionic/react';
import React  from 'react';
import './Page.css';
import firebase from '../firebaseConfig';
import { RouteComponentProps, Redirect } from "react-router-dom";
export default class Page extends React.Component<RouteComponentProps<{}>,any> {

  constructor(props: RouteComponentProps<{}>)
  {
    super(props);
    this.state = {
      transactPopUp : false,
      EMAIL : "",
      USERNAME: "",
      PASSWORD: "",
      CONFIRM_PASSWORD: "",
      MOBILE: "",

      passwordCheck: false,
      goToOTP: false,
      TOKEN_NAME : "",

    }
  }

  

  onChange = (_event : any) => {
    console.log(_event.detail.value);
    this.setState({
      EMAIL : _event.detail.value
    });
  };
  
  onChange2 = (_event2 : any) => {
    console.log(_event2.detail.value);
    this.setState({
      USERNAME : _event2.detail.value
    });
  };
  
  onChange3 = (_event3 : any) => {
    console.log(_event3.detail.value);
    this.setState({
      PASSWORD : _event3.detail.value
    });
  };

  onChange4 = (_event4 : any) => {
    console.log(_event4.detail.value);
    this.setState({
      CONFIRM_PASSWORD : _event4.detail.value
    });

    if(this.state.CONFIRM_PASSWORD === this.state.PASSWORD) {
      this.setState({passwordCheck : true})
    }
  };

  onChange5 = (_event4 : any) => {
    console.log(_event4.detail.value);
    this.setState({
      MOBILE : _event4.detail.value
    });
  };

  public dataPostforRegistration() {

    fetch(`http://127.0.0.1:8000/api/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"registration_process" : {email: this.state.EMAIL, username: this.state.USERNAME, password: this.state.PASSWORD}, "phone":this.state.MOBILE})
      })
      .then( res => res.json())
      .then( res => {

        this.setState({TOKEN_NAME : res["token"]})
        localStorage.setItem("MR_Token", res["token"])
        
        this.registrationDeviseID();

        
        console.log("Registration Sent");
        this.setState({goToOTP : true})
      })
      .catch( () => console.log("Error"));
  
  };




  public registrationDeviseID() {

    const messaging = firebase.messaging()
    messaging.requestPermission().then(()=>{
      return messaging.getToken()
    }).then(token=>{
      console.log('Registration ID Token : ',token)




      fetch(`http://127.0.0.1:8000/storedeviceid/`, {
        method: 'POST',
        headers: {
          'Authorization': `Token ${this.state.TOKEN_NAME}`,
          'Content-Type': 'application/json'
          
        },
        body: JSON.stringify( { registration_id : token })
      })
      .then( res => res.json())
      .then( res => {

       
      })
      .catch( () => console.log("Error"));





    }).catch((err)=>{
      console.log(err);
      
    })

    
  }






  render() {

    let {passwordCheck} = this.state
    let {goToOTP} = this.state


    const renderPasswordMatch = ()=>{
      if(passwordCheck){
        return <p className="small-title asd main-color text-center">Password matched! </p>
      } else{
        return <p className="small-title asd main-color text-center">Please register </p>
      }
    }

    const moveToOTPPage = () => {
      if(goToOTP) {
        return <Redirect to="/page39/Page39"></Redirect>
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
  
  
  
            <img src="/assets/icon/signup.svg" className="" alt=""></img>
            <IonRow className="px-7">
              <IonCol size="10">
                <p className="small-title asd">Sign Up </p>
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
            header={'Portfolio Details'}
            subHeader={'Description for current page'}
            message={'This is an alert message.'}
            buttons={['OK']}
          />
  
          <IonItem className="cus-input1 mb-12 ft-w p-2">
              <IonInput placeholder="Enter your email" value={this.state.EMAIL} onIonChange={_e => this.onChange(_e)}></IonInput>
            </IonItem>
            <IonItem className="cus-input1 mb-12 ft-w p-2">
              <IonInput placeholder="Username" value={this.state.USERNAME} onIonChange={_e => this.onChange2(_e)}></IonInput>
            </IonItem>
  
            <IonItem className="cus-input1 mb-12 ft-w p-2">
              <IonInput placeholder="Enter your password" type="password" value={this.state.PASSWORD} onIonChange={e => this.onChange3(e)}></IonInput>
            </IonItem>
            <IonItem className="cus-input1 mb-12 ft-w p-2">
              <IonInput placeholder="Enter confirm password" type="password" value={this.state.CONFIRM_PASSWORD} onIonChange={_e => this.onChange4(_e)}></IonInput>
            </IonItem>
            <IonItem className="cus-input1 mb-12 ft-w p-2">
              <IonInput placeholder="Enter your mobile no." value={this.state.MOBILE} onIonChange={_e => this.onChange5(_e)}></IonInput>
            </IonItem>
            {
              renderPasswordMatch()
            }
            {
              moveToOTPPage()
            }
          
          <IonButton className="cus-color mt-4" expand="full" onClick={e => this.dataPostforRegistration()} >Register</IonButton>
          <p className="small-title asd main-color text-center">Already have an account ? </p>
          </IonContent>
  
      
        </IonPage>
    );
  

  }
  

};


