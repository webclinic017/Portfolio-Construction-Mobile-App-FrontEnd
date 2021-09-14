import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonItem, IonSelect, IonSelectOption, IonRow, IonCol, IonFooter, IonGrid  } from '@ionic/react';
import React from 'react';
import './Page.css';
import axios from 'axios';
import { RouteComponentProps } from "react-router-dom";
export default class Page extends React.Component<RouteComponentProps<{}>,any> {

  constructor(props: RouteComponentProps<{}>)
  {
    super(props);
    this.state = {
      transactPopUp : false,
      RemindMe: "", 
      TOKEN_NAME : localStorage.getItem('MR_Token')
    }
  }

  onChange = (_event : any) => {
    console.log(_event.detail.value);
    this.setState({
      RemindMe : _event.detail.value
    });
  };


  public dataFetchRemindMe() {

    fetch(`http://127.0.0.1:8000/doitlater/`, {
        method: 'POST',
        headers: {
          'Authorization': `Token ${this.state.TOKEN_NAME}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ remind_me_to_take_action: this.state.RemindMe })
      })
      .then( res => res.json())
      .then( res => {
        
        console.log("Remind me Successfully Sent");
      })
      .catch( () => console.log("Error"));
  
  };

  public dataFetchAddToWatchList() {
    axios.get('http://127.0.0.1:8000/addtowatchlist/',{
          headers: {
            'Authorization': `Token ${this.state.TOKEN_NAME}`
          }
        }
      )
      .then(response =>{
        console.log(response)
       
      })
      .catch(error => {
        console.log(error)
      })
  }

  public dataFetchOnlyWatchList() {
    axios.get('http://127.0.0.1:8000/onlyforwatchlist/',{
          headers: {
            'Authorization': `Token ${this.state.TOKEN_NAME}`
          }
        }
      )
      .then(response =>{
        console.log(response)
       
      })
      .catch(error => {
        console.log(error)
      })
  }
  
  render() {

    let {RemindMe} = this.state
    const decideDirection = () => {

      if(RemindMe === "Now"){
        return <IonButton onClick={() => {this.dataFetchRemindMe(); this.dataFetchAddToWatchList(); this.dataFetchOnlyWatchList(); this.props.history.push('/page18/Page18');} }  className="cus-color mt-4"  expand="full">Proceed</IonButton>
      }
      else{
        return <IonButton onClick={() => {this.dataFetchRemindMe(); this.dataFetchAddToWatchList(); this.dataFetchOnlyWatchList(); this.props.history.push('/page7/Page7');} }  className="cus-color mt-4"  expand="full">Proceed</IonButton>
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
  
           
         
            <img src="/assets/icon/monitor.svg" className="" alt=""></img>
            <IonRow className="px-7">
              <IonCol size="12">
                <p className="small-title asd">"Best time to invest was yesterday the second best is today!!"</p>
              </IonCol>
  
            </IonRow>
  
            <IonItem className="cus-input1 mb-12 p-2">
              <IonSelect placeholder="Remind me to take action in :" value={this.state.RemindMe} onIonChange={_e => this.onChange(_e)} className="pl-0 IonSelect ft-w" interface="popover">
              <IonSelectOption value="Now">Now</IonSelectOption>
                <IonSelectOption value="3 Days">3 Days</IonSelectOption>
                <IonSelectOption value="5 Days">5 Days</IonSelectOption>
                <IonSelectOption value="7 Days">7 Days</IonSelectOption>
                
              </IonSelect>
            </IonItem>
            {
                decideDirection()
            }
            <IonRow className="px-7">
              <IonCol size="12">
                
              </IonCol>
  
            </IonRow>
            
          
       
          </IonContent>
  
      <IonFooter className="ion-no-border">
        <IonGrid className="text-center d-flex w-95 mt-10px">
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/home.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow  className="jc-footer">
              <p className=" mt-5px ft-13 b-500 ft-13"onClick={() => { console.log("OK"); this.props.history.push('/page30/Page30'); } } >Home</p>
            </IonRow>
          </IonCol>
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/news.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow  className="jc-footer">
              <p className=" mt-5px ft-13  ft-13" onClick={() => { console.log("OK"); this.props.history.push('/page7/Page7'); } }  >My Portfolio</p>
            </IonRow>
          </IonCol>
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/res.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow  className="jc-footer">
              <p className=" mt-5px ft-13  ft-13"onClick={() => { console.log("OK"); this.props.history.push('/page/Page1'); } }  >Restructure</p>
            </IonRow>
          </IonCol>
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/ale.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow  className="jc-footer">
              <p className=" mt-5px ft-13  ft-13"onClick={() => { console.log("OK"); this.props.history.push('/page10/Page1'); } }  >Alerts</p>
            </IonRow>
          </IonCol>
  
        </IonGrid>
    </IonFooter>
        </IonPage>
    );
    
  }

  



}


