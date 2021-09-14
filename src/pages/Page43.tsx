import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonRow, IonCol  } from '@ionic/react';
import React from 'react';
import './Page.css';
import { RouteComponentProps } from "react-router-dom";

export default class Page extends React.Component<RouteComponentProps<{}>,any> {

  constructor(props: RouteComponentProps<{}>)
  {
    super(props);
    this.state = {
  
      EMAIL: "",
      PHONE: "",
      CURRENT_PASSWORD: "",
      NEW_PASSWORD : "",

      TOKEN_NAME: localStorage.getItem("MR_Token")
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
      PHONE : _event2.detail.value
    });
  };
  
  onChange3 = (_event3 : any) => {
    console.log(_event3.detail.value);
    this.setState({
      CURRENT_PASSWORD : _event3.detail.value
    });
  };

  onChange4 = (_event4 : any) => {
    console.log(_event4.detail.value);
    this.setState({
      NEW_PASSWORD : _event4.detail.value
    });

    // if(this.state.NEW_PASSWORD === this.state.CURRENT_PASSWORD) {
    //   this.setState({permissionForOTP : true})
    // }
  };

  public EditCredential() {

    fetch(`http://127.0.0.1:8000/editcredential/`, {
        method: 'PUT',
        headers: {
          'Authorization': `Token ${this.state.TOKEN_NAME}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: this.state.EMAIL, 
                              phone: this.state.PHONE, 
                              current_password: this.state.CURRENT_PASSWORD, 
                              new_password: this.state.NEW_PASSWORD })
      })
      .then( res => res.json())
      .then( res => {
        
        console.log("Credentials Updated");
      })
      .catch( () => console.log("Error"));
  
  };
  
  render() {

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
  
  
  
            <img src="/assets/icon/edit-profile.svg" className="" alt=""></img>
            
  
          <IonItem className="cus-input1 mb-12 ft-w p-2">
              <IonInput placeholder="Enter your email" value={this.state.EMAIL} onIonChange={_e => this.onChange(_e)}></IonInput>
            </IonItem>
            <IonItem className="cus-input1 mb-12 ft-w p-2">
              <IonInput placeholder="Enter your mobile no." value={this.state.PHONE} onIonChange={_e => this.onChange2(_e)}></IonInput>
            </IonItem>
            
            <IonRow className="px-7">
              <IonCol size="12">
                <p className="small-title asd">"Want to change password ?"</p>
              </IonCol>
  
            </IonRow>
  
            <IonItem className="cus-input1 mb-12 ft-w p-2">
              <IonInput placeholder="Enter your current password" type="password" value={this.state.CURRENT_PASSWORD} onIonChange={e => this.onChange3(e)}></IonInput>
            </IonItem>
            <IonItem className="cus-input1 mb-12 ft-w p-2">
              <IonInput placeholder="Enter new password" type="password" value={this.state.NEW_PASSWORD} onIonChange={_e => this.onChange4(_e)}></IonInput>
            </IonItem>
            
          <IonButton className="cus-color mt-4" expand="full" onClick={() => { this.EditCredential(); this.props.history.push('/page39/Page39'); } } >Go To OTP / Submit</IonButton>
         
          </IonContent>
  
        </IonPage>
    );

  }

  

};


