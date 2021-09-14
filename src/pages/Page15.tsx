import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, 
 IonItem, IonLabel, IonRow, IonCol, IonFooter,
IonSegment, IonSegmentButton, 
IonGrid } from '@ionic/react';
import React from 'react';

import './Page.css';
import axios from 'axios';
import { RouteComponentProps } from "react-router-dom";

export default class Page extends React.Component<RouteComponentProps<{}>,any> {

  constructor(props: RouteComponentProps<{}>)
  {
 
    super(props);
  
    this.state = {   
      
      stockName : this.props.location.state,
      Initial_Investment: 0, 
      Investment_Price: 0, 
      Overall_Gain: 0,
      Current_Quantity: 0, 
      Recommended_Quantity: 0,
      Current_Weightage: 0, 
      Recommended_Weightage: 0,
      Upside_Potential: 0, 
      Stop_Loss: 0
      
    }

  }

  datafetch() {
    
   
      axios.get('http://127.0.0.1:8000/investmentdetails/', {

                        params: {
                          // eslint-disable-next-line
                        stock_name: this.state.stockName +'$$'
                      },
                      headers: {
                        'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`,
                        'Content-Type': 'application/json'
                      }

                    })
                  .then(res =>{
                    console.log(res)
                    this.setState({Initial_Investment : res.data['Initial_Investment']})
                    this.setState({Investment_Price : res.data['Investment_Price']})
                    this.setState({Overall_Gain : res.data['Overall_Gain']})
                    this.setState({Current_Quantity : res.data['Current_Quantity']})
                    this.setState({Recommended_Quantity : res.data['Recommended_Quantity']})
                    this.setState({Current_Weightage : res.data['Current_Weightage']})
                    this.setState({Recommended_Weightage : res.data['Recommended_Weightage']})
                    this.setState({Upside_Potential : res.data['Upside_Potential']})
                    this.setState({Stop_Loss : res.data['Stop_Loss']})
                    console.log("Investment Details Successful");
                  })
                  .catch(error => {
                    console.log(error)
                  })

  }

  componentDidMount() {

   
    this.datafetch()
    
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
        
    
          <img src="/assets/icon/Group 519.svg" className="" alt=""></img>
    
          <IonRow className="px-7">
            <IonCol size="12">
              <IonSegment className="bg-white">
                <IonSegmentButton value="call" className="cus-segment">
                  <IonLabel color="primary">Investment Details</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="" onClick={() => { console.log("OK"); this.props.history.push('/page16/Page16', this.state.stockName); } }>
                  <IonLabel >Company Details</IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </IonCol>
          </IonRow>
    
       
    
    <IonItem className="cus-input1 mb-12 mt-5">
    
    <IonCol className="d-flex f-14" size="6">
      <p>Initial Investment</p>
    </IonCol>
    <IonCol size="6" className="text-right">
      <h5 className="main-color">₹{this.state.Initial_Investment}</h5>
    </IonCol>
    </IonItem>
    <IonItem className="cus-input1 mb-12 mt-5">
    
    <IonCol className="d-flex f-14" size="6">
      <p>Investment Price</p>
    </IonCol>
    <IonCol size="6" className="text-right">
      <h5 className="main-color">₹{this.state.Investment_Price}</h5>
    </IonCol>
    </IonItem>
          <IonItem className="cus-input1 mb-12 mt-5">
    
            <IonCol className="d-flex f-14" size="6">
              <p>Overall Gain </p>
            </IonCol>
            <IonCol size="6" className="text-right">
              <h5 className="main-color">₹{this.state.Overall_Gain}</h5>
            </IonCol>
          </IonItem>
    
          <IonItem className="cus-input1 mb-12 mt-5">
            <IonGrid>
              <IonRow>
                <IonCol className="d-flex f-14" size="6">
                  <p><strong>Quantity</strong></p>
                </IonCol>
                <IonCol size="6" className="text-right d-flex jf-end">
                  <img src="/assets/icon/check.svg" className="pl-9" alt=""></img>
                </IonCol>
    
              </IonRow>
              <IonRow>
                <IonCol size="5" className="text-center">
                  <h5 className="main-color">{this.state.Current_Quantity}</h5>
                  <p className="f-14">Current<br /> Quantity</p>
                </IonCol>
                <IonCol size="2">
                  <img src="/assets/icon/line.svg" className="pl-9" alt=""></img>
                </IonCol>
                <IonCol size="5" className="text-center">
                  <h5 className="main-color">{this.state.Recommended_Quantity}</h5>
                  <p className="f-14">Recommanded Quantity</p>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
          <IonItem className="cus-input1 mb-12 mt-5">
            <IonGrid>
              <IonRow>
                <IonCol className="d-flex f-14" size="6">
                  <p><strong>Weightage</strong></p>
                </IonCol>
                <IonCol size="6" className="text-right d-flex jf-end">
                  
                  <img src="/assets/icon/warning.svg" className="pl-9" alt=""></img>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="5" className="text-center">
                  <h5 className="main-color">{this.state.Current_Weightage}%</h5>
                  <p className="f-14">Current Weightage</p>
                </IonCol>
                <IonCol size="2">
                  <img src="/assets/icon/line.svg" className="pl-9" alt=""></img>
                </IonCol>
                <IonCol size="5" className="text-center">
                  <h5 className="main-color">{this.state.Recommended_Weightage}%</h5>
                  <p className="f-14">Recommanded Weightage</p>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
          <IonItem className="cus-input1 mb-12 mt-5">
    
            <IonCol className="d-flex f-14" size="6">
              <p>Upside Potential</p>
            </IonCol>
            <IonCol size="6" className="text-right">
              <h5 className="main-color">{this.state.Upside_Potential}%</h5>
            </IonCol>
          </IonItem>
          <IonItem className="cus-input1 mb-12 mt-5">
    
            <IonCol className="d-flex f-14" size="6">
              <p>Stop Loss</p>
            </IonCol>
            <IonCol size="6" className="text-right">
              <h5 className="main-color">₹{this.state.Stop_Loss}</h5>
            </IonCol>
          </IonItem>
    
        </IonContent>
        <IonFooter className="ion-no-border">
          <IonGrid className="text-center d-flex w-95 mt-10px">
            <IonCol size="3">
              <IonRow className="jc-footer">
                <img src="/assets/icon/home.svg" className="w-30" alt=""></img>
              </IonRow>
              <IonRow className="jc-footer">
                <p className=" mt-5px ft-13 b-500 ft-13">Home</p>
              </IonRow>
            </IonCol>
            <IonCol size="3">
              <IonRow className="jc-footer">
                <img src="/assets/icon/res.svg" className="w-30" alt=""></img>
              </IonRow>
              <IonRow className="jc-footer">
                <p className=" mt-5px ft-13">Restructure</p>
              </IonRow>
            </IonCol>
            <IonCol size="3">
              <IonRow className="jc-footer">
                <img src="/assets/icon/ale.svg" className="w-30" alt=""></img>
              </IonRow>
              <IonRow className="jc-footer">
                <p className=" mt-5px ft-13">Alerts</p>
              </IonRow>
            </IonCol>
            <IonCol size="3">
              <IonRow className="jc-footer">
                <img src="/assets/icon/news.svg" className="w-30" alt=""></img>
              </IonRow>
              <IonRow className="jc-footer">
                <p className=" mt-5px ft-13">My Portfolio</p>
              </IonRow>
            </IonCol>
          </IonGrid>
        </IonFooter>
    
      </IonPage>
      );

  }

  
  


}

