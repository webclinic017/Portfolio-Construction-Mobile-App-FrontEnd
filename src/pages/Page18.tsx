import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonThumbnail, IonButton,
IonItem, IonList, IonRow, IonCol, IonFooter, IonAlert,
IonItemSliding, IonItemOptions, IonItemOption,
IonGrid } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from "react-router-dom";
import './Page.css';
import axios from 'axios';
export default class Page extends React.Component<RouteComponentProps<{}>,any> {

interval: ReturnType<typeof setTimeout> = setTimeout(() => '', 1000);


constructor(props: RouteComponentProps<{}>)
{
  super(props);
  this.state = {
    transactPopUp : false,
    TRADEDETAILS : [],
  }

}

datafetch(){
     
  axios.get('http://127.0.0.1:8000/traderegister/',{
                    headers: {
                      'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`
                    }
                  }
                )
                .then(response =>{
                  
                  this.setState({TRADEDETAILS : response.data['TradeDetails']})
                  console.log(this.state.TRADEDETAILS)
                })
                .catch(error => {
                  console.log(error)
                })

}
   
componentDidMount() {


  this.datafetch()
  this.interval = setInterval(() => {this.datafetch();}, 60000);
  

}
componentWillUnmount() {
  clearInterval(this.interval);
}

dataDelete(m: any) {

      fetch(`http://127.0.0.1:8000/traderegister/`, {
            method: 'DELETE',
            headers: {
              'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({stock_name: m})
          })
          .then( res => res.json())
          .then( res => {
            
            console.log("MyHolding Model Successfully DELETED");
          })
          .catch( () => console.log("Error"));
}

renderTradeDetails(m: any) {
  
  return (
  
    <IonItemSliding>
                <IonItem className="cus-input1 mb-12 d-flex">
                  <IonRow className="w-100">
      
                    <IonCol className="company-logo" size="1">
                      <img className="logo-11" src="/assets/icon/Canera.png" alt=""></img>
                    </IonCol>
                    <IonCol className="" size="9">
                      <button className=" f-14 long-text b-500 mt-5" id="tool-tip" color="light">{m.stock_name}</button><br />
                      <p className="ft-12">Purchased Price : ₹{m.price}   |   Stocks : {m.stock_quantity}</p>
                    </IonCol>
                    <IonCol size="2" className="text-right main-color d-flex jcf">
                      <img className="logo-14" src="/assets/icon/green.svg" alt=""></img>
                    </IonCol>
                  </IonRow>
                </IonItem>
                <IonItemOptions side="end" className="h-83">
                  <IonItemOption  onClick={() => { console.log("OK"); this.props.history.push('/page17/Page17', m.stock_name + "$$" + (m.stock_quantity).toString() + "$$" + (m.price).toString()); } } >Edit</IonItemOption>
                  {/*<IonItemOption onClick={ e =>this.dataDelete(m.stock_name) } className="bg-danger-color">Delete</IonItemOption>*/}
    
                </IonItemOptions>
    </IonItemSliding>
  
  )
    

}

  render() {

    return (
      <IonPage className="z-999">
        <IonHeader>
          <IonToolbar>
            <IonButtons className="ios-btn1" slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle className="header-bag">
    
            </IonTitle>
          </IonToolbar>
        </IonHeader>
    
        <IonContent>
        
          <img src="/assets/icon/trade.svg" className="" alt=""></img>
    
          <IonRow className="px-7">
                <IonCol size="10">
                  <p className="small-title asd">Trade Details</p>
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
              header={'Stock Details'}
              subHeader={'Description for current page'}
              message={'This is an alert message.'}
              buttons={['OK']}
            />
            <p className="text-center f-14">Swipe left to modify price and quantity</p>
          <IonList>
          
              {this.state.TRADEDETAILS.map((art: any) => { return this.renderTradeDetails(art); })}
            </IonList>
      
            <IonButton className="cus-color mt-4" expand="full" onClick={() => { console.log("OK"); this.props.history.push('/page14/Page14'); } } >Submit</IonButton>      
          </IonContent>
    
    
    
        <IonFooter className="ion-no-border">
            <IonGrid className="text-center d-flex w-95 mt-10px">
              <IonCol size="3">
                <IonRow className="jc-footer">
                  <img src="/assets/icon/home.svg" className="w-30" alt=""></img>
                </IonRow>
                <IonRow  className="jc-footer">
                  <p className=" mt-5px ft-13 b-500 ft-13">Home</p>
                </IonRow>
              </IonCol>
              <IonCol size="3">
                <IonRow className="jc-footer">
                  <img src="/assets/icon/res.svg" className="w-30" alt=""></img>
                </IonRow>
                <IonRow  className="jc-footer">
                  <p className=" mt-5px ft-13">Restructure</p>
                </IonRow>
              </IonCol>
              <IonCol size="3">
                <IonRow className="jc-footer">
                  <img src="/assets/icon/ale.svg" className="w-30" alt=""></img>
                </IonRow>
                <IonRow  className="jc-footer">
                  <p className=" mt-5px ft-13">Alerts</p>
                </IonRow>
              </IonCol>
              <IonCol size="3">
                <IonRow className="jc-footer">
                  <img src="/assets/icon/news.svg" className="w-30" alt=""></img>
                </IonRow>
                <IonRow  className="jc-footer">
                <p className=" mt-5px ft-13">My Portfolio</p>
                </IonRow>
              </IonCol>
            </IonGrid>
        </IonFooter>
      </IonPage>
      );

  }

  
  


}
