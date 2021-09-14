import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, 
IonItem, IonLabel, IonRow, IonCol, IonFooter,
IonGrid,
IonSegment, IonSegmentButton } from '@ionic/react';
import React from 'react';
import axios from 'axios';
import { RouteComponentProps } from "react-router-dom";
import './Page.css';

export default class Page extends React.Component<RouteComponentProps<{}>,any> {

  constructor(props: RouteComponentProps<{}>)
  {
 
    super(props);
    this.state = {   
      stockName : this.props.location.state,
      stock_name: '', 
      sector: '', 
      promotor_holding: 0,
      quality_of_management: 0, 
      balance_sheet: 0,
      growth: 0, 
      market_sentiment: 0,
      overall_company_score: 0, 

      green_and_red_message: ''
      
    }

  }

  datafetch() {

    


      axios.get('http://127.0.0.1:8000/companydetails/', {

                        params: {
                          // eslint-disable-next-line
                        stock_name: this.state.stockName + '$$'
                      },
                      headers: {
                        'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`,
                        'Content-Type': 'application/json'
                      }

                    })
                  .then(res =>{
                    console.log(res)
                    this.setState({stock_name : res.data['stock_name']})
                    this.setState({sector : res.data['sector']})
                    this.setState({promotor_holding : res.data['promotor_holding']})
                    this.setState({quality_of_management : res.data['quality_of_management']})
                    this.setState({balance_sheet : res.data['balance_sheet']})
                    this.setState({growth : res.data['growth']})
                    this.setState({market_sentiment : res.data['market_sentiment']})
                    this.setState({overall_company_score : res.data['overall_company_score']})

                    this.setState({green_and_red_message : res.data['green_and_red_message']})
                    console.log("Company Details Successful");
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
          <img src="/assets/icon/my-investment.svg" className="" alt=""></img>
    
    
          <IonRow className="px-7">
            <IonCol size="12">
              <IonSegment className="bg-white">
                <IonSegmentButton value="call" onClick={() => { console.log("OK"); this.props.history.push('/page15/Page15', this.state.stockName); } }>
                  <IonLabel >Investment Details</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="" className="cus-segment">
                  <IonLabel color="primary">Company Details</IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </IonCol>
          </IonRow>
    
          <IonItem className="cus-input1 mb-12 mt-5">
              <IonCol className="company-logo" size="1">
                <img src="/assets/icon/Canera.png" alt=""></img>
              </IonCol>
              <IonCol className="d-flex f-14" size="5">
                <p className="long-text">{this.state.stock_name}</p>
              </IonCol>
              <IonCol size="6" className="text-right">
              
              </IonCol>
            </IonItem>
            <IonItem className="cus-input1 mb-12 mt-5">
              <IonCol className="d-flex f-14" size="6">
                <p className="long-text">Sector</p>
              </IonCol>
              <IonCol size="6" className="text-right">
              <h5 className="main-color">{this.state.sector}</h5>
              </IonCol>
            </IonItem>
    
          <IonItem className="cus-input1 mb-12">
            <IonGrid>
              <IonRow className="bb">
                <IonCol className=" f-14" size="10">
                  <p className="b-500">Easyvest Score</p>
                </IonCol>
                <IonCol size="2" className="text-right pt-7">
                 
                </IonCol>
              </IonRow>
              
              <IonRow className="bb">
                <IonCol className="d-flex f-14" size="1">
                  <img src="/assets/icon/holdings.svg" alt=""></img>
                </IonCol>
                <IonCol className="d-flex f-14" size="9">
                  <p className="long-text">Promoter Holding</p>
                </IonCol>
                <IonCol size="2" className="text-right">
                  <h5 className="main-color"> {this.state.promotor_holding}</h5>
                </IonCol>
              </IonRow>
              <IonRow className="bb">
                <IonCol className="d-flex f-14" size="1">
                 <img src="/assets/icon/Shield.svg" alt=""></img>
                </IonCol>
                <IonCol className="d-flex f-14" size="9">
                  <p className="long-text">Quality of managment</p>
                </IonCol>
                <IonCol size="2" className="text-right">
                  <h5 className="main-color"> {this.state.quality_of_management}</h5>
                </IonCol>
              </IonRow>
              <IonRow className="bb">
                <IonCol className="d-flex f-14" size="1">
                  <img src="/assets/icon/balance.svg" alt=""></img>
                </IonCol>
                <IonCol className="d-flex f-14" size="9">
                  <p className="long-text">Balance Sheet</p>
                </IonCol>
                <IonCol size="2" className="text-right">
                  <h5 className="main-color"> {this.state.balance_sheet}</h5>
                </IonCol>
              </IonRow>
              <IonRow className="bb">
                <IonCol className="d-flex f-14" size="1">
                 <img src="/assets/icon/statistics.svg" alt=""></img>
                </IonCol>
                <IonCol className="d-flex f-14" size="9">
                  <p className="long-text">Growth</p>
                </IonCol>
                <IonCol size="2" className="text-right">
                  <h5 className="main-color"> {this.state.growth}</h5>
                </IonCol>
              </IonRow>
              <IonRow className="bb">
                <IonCol className="d-flex f-14" size="1">
                <img src="/assets/icon/megaphone.svg" alt=""></img>
                </IonCol>
                <IonCol className="d-flex f-14" size="9">
                  <p className="long-text">Market sentiment</p>
                </IonCol>
                <IonCol size="2" className="text-right">
                  <h5 className="danger-color"> {this.state.market_sentiment}</h5>
                </IonCol>
              </IonRow>
              <IonRow className="">
                <IonCol className="d-flex f-14" size="1">
                <img src="/assets/icon/calculator.svg" alt=""></img>
                </IonCol>
                <IonCol className="d-flex f-14" size="9">
                  <p className="long-text">Overall company score</p>
                </IonCol>
                <IonCol size="2" className="text-right">
                  <h5 className="danger-color"> {this.state.overall_company_score}</h5>
                </IonCol>
              </IonRow>
              
    
            </IonGrid>
          </IonItem>
          <IonItem className="cus-input1 mb-12">
            <IonGrid>
              <IonRow className="">
                <IonCol className=" f-14" size="12">
                  <p className="b-500">All companies having an overall company score <u>in the range of 0-3/4-7/8-10</u> have delivered <u>35% CAGR</u> over the past 3 years</p>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
          <IonItem className="cus-input1 mb-12">
            <IonGrid>
              <IonRow className="">
                <IonCol className=" f-14" size="12">
                  <p className="b-500 main-color" color="main">{this.state.green_and_red_message}</p>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
          
          
          
    
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

