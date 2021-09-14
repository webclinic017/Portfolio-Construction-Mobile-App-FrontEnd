import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonItem, IonSelect, IonSelectOption, IonRow, IonCol, IonFooter, IonGrid  } from '@ionic/react';
import React from 'react';
import './Page.css';
import { RouteComponentProps } from "react-router-dom";
export default class Page extends React.Component<RouteComponentProps<{}>,any> {

  constructor(props: RouteComponentProps<{}>)
  {
    super(props);
    this.state = {
      transactPopUp : false,
      RemindMeToUpdatePrice: "", 
      TOKEN_NAME : localStorage.getItem('MR_Token')
    }
  }

  onChange = (_event : any) => {
    console.log(_event.detail.value);
    this.setState({
      RemindMeToUpdatePrice : _event.detail.value
    });
  };

  public dataFetchRemindMeToUpdatePrice() {

    fetch(`http://127.0.0.1:8000/monitortransactionpriceupdatereminder/`, {
        method: 'POST',
        headers: {
          'Authorization': `Token ${this.state.TOKEN_NAME}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ remind_me_to_update_transaction_price: this.state.RemindMeToUpdatePrice })
      })
      .then( res => res.json())
      .then( res => {
        
        console.log("Remind me To Update Price Successfully Sent");
      })
      .catch( () => console.log("Error"));
  
  };

  render() {

    let {RemindMeToUpdatePrice} = this.state
    const decideDirection = () => {

      if(RemindMeToUpdatePrice === "Now"){
        return <IonButton onClick={() => {this.dataFetchRemindMeToUpdatePrice(); this.props.history.push('/page18/Page18');} }  className="cus-color mt-4"  expand="full">Proceed</IonButton>
      }
      else{
        return <IonButton onClick={() => {this.dataFetchRemindMeToUpdatePrice(); this.props.history.push('/page7/Page7');} }  className="cus-color mt-4"  expand="full">Proceed</IonButton>
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
                <p className="small-title asd">It is great to see you commit to the journey of wealth creation.</p>
  
                <p className="small-title asd">"Price" that we recommend and your "transaction price" may differ let us know when do you want to update your transaction price ?</p>
              </IonCol>
  
            </IonRow>
  
            <IonItem className="cus-input1 mb-12 p-2">
              <IonSelect placeholder="Remind me to Update Transaction Price:" value={this.state.RemindMeToUpdatePrice} onIonChange={_e => this.onChange(_e)} className="pl-0 IonSelect ft-w" interface="action-sheet">
              <IonSelectOption value="Now">Now</IonSelectOption>
                <IonSelectOption value="3 Days">3 Days</IonSelectOption>
                <IonSelectOption value="5 Days">5 Days</IonSelectOption>
                
              </IonSelect>
          </IonItem>
          {/* <IonButton className="cus-color mt-4" expand="full" onClick={() => { console.log("OK"); props.history.push('/page18/Page18'); } } >Proceed</IonButton> */}
          <IonRow>
            <IonCol size="1"></IonCol>
            
            <IonCol size="5">
            {
                decideDirection()
            }
              {/* <IonButton className="cus-color mt-4 w-90 pi f-15 "  onClick={() => { console.log("OK"); this.props.history.push('/page18/Page18'); } } >Proceed</IonButton> */}
            </IonCol>
            <IonCol size="1"></IonCol>
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


