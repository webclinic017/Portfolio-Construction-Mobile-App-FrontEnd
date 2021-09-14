import { IonButtons, IonContent, IonHeader, IonMenuButton, IonTextarea, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonRow, IonCol, IonFooter, IonAlert, IonGrid  } from '@ionic/react';
import React from 'react';
import './Page.css';
import { RouteComponentProps } from "react-router-dom";
export default class Page extends React.Component<RouteComponentProps<{}>,any> {

  constructor(props: any)
  {
    super(props);
    this.state = {
      transactPopUp : false,
      EMAIL : "",
      QUERY: ""
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
      QUERY : _event2.detail.value
    });
  };

  public dataPostforQuery() {

    fetch(`http://127.0.0.1:8000/query/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: this.state.EMAIL, query: this.state.QUERY})
      })
      .then( res => res.json())
      .then( res => {
          console.log(res)
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
  
           
         
            <img src="/assets/icon/query.svg" className="" alt=""></img>
  
            <IonAlert
            isOpen={this.state.transactPopUp}
            onDidDismiss={() => this.setState({transactPopUp : false})}
            header={'Portfolio Details'}
            subHeader={'Description for current page'}
            message={'This is an alert message.'}
            buttons={['OK']}
          />
            
          <IonItem className="cus-input1 mb-12 ft-w p-2">            
              <IonInput placeholder="Enter Your Registered Email" value={this.state.EMAIL} onIonChange={_e => this.onChange(_e)}></IonInput>
          </IonItem>
          <IonItem className="cus-input1 mb-12 ft-w p-2">            
            <IonTextarea rows={6} value={this.state.QUERY} onIonChange={_e => this.onChange2(_e)}></IonTextarea>
          </IonItem>
  
            
          <IonButton className="cus-color mt-4" expand="full" onClick={() => { this.dataPostforQuery(); } } >Send</IonButton>
          <p className="small-title asd">* Your query has been received. Kindly give us 24 hours to get back.</p>
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
              <p className=" mt-5px ft-13  ft-13"onClick={() => { console.log("OK"); this.props.history.push('/page26/Page26'); } }  >Restructure</p>
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

 




};


