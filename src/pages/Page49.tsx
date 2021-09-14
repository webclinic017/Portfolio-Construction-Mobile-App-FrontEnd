import { IonItem, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonRow, IonCol, IonFooter, IonGrid, IonSegmentButton, IonSegment, IonButton, IonInput  } from '@ionic/react';
import React from 'react';
import './Page.css';
import { RouteComponentProps } from "react-router-dom";

export default class Page extends React.Component<RouteComponentProps<{}>,any> {

  constructor(props: any)
  {
    super(props);
    this.state = {
      
      DISCOUNTCODE : "",
      PRICE_ONE: 300,
      PRICE_TWO: 3000,
      Amount: "",
      
    }

  }

  onChange = (_event : any) => {
    console.log(_event.detail.value);
    this.setState({
      DISCOUNTCODE : _event.detail.value
    });
  };

  public assignSubscriptionAmount(segmentValue:any) {

    if (segmentValue === "140"){
      this.setState({Amount : "140"});
      console.log(this.state.Amount);
    }

    if (segmentValue === "1400"){
      this.setState({Amount : "1400"});
      console.log(this.state.Amount);
     
    }

    
}



  render() {

    let {DISCOUNTCODE} = this.state
   


    const renderPrices = () => {

      if(DISCOUNTCODE === "") {
        return (
          <div>
            <IonRow className="px-7 mt-134">
              <IonCol size="6">
                  <div className="box text-center">
                    <p className="asd cus-title1234"><b>Monthly</b></p>
                    <p className="asd cus-text123 cus-text1234">Package</p>
                    <IonSegment>
                          <IonSegmentButton>
                            <h1 className="asd"><b>₹{this.state.PRICE_ONE}</b></h1>
                          </IonSegmentButton>
                    </IonSegment>
                    
                  </div>
              </IonCol>
              <IonCol size="6">
                  <div className="box text-center">
                    <p className="asd cus-title1234"><b>Yearly</b></p>
                    <p className="asd cus-text123 cus-text1234">Package</p>
                    <IonSegment>
                          <IonSegmentButton>
                            <h1 className="asd"><b>₹{this.state.PRICE_TWO}</b></h1>
                          </IonSegmentButton>
                    </IonSegment>
                    
                  </div>
           
              </IonCol>
            </IonRow>
          </div>
        )
      }

      else if(DISCOUNTCODE === "EASY25") {
        return (
          <div>
            <IonRow className="px-7 mt-134">
              <IonCol size="6">
                  <div className="box text-center">
                    <p className="asd cus-title1234"><b>Monthly</b></p>
                    <p className="asd cus-text123 cus-text1234">Package</p>
                    <IonSegment>
                          <IonSegmentButton>
                            <h1 className="asd"><b>₹{this.state.PRICE_ONE - (this.state.PRICE_ONE * 0.25)}</b></h1>
                          </IonSegmentButton>
                    </IonSegment>
                    
                  </div>
              </IonCol>
              <IonCol size="6">
                  <div className="box text-center">
                    <p className="asd cus-title1234"><b>Yearly</b></p>
                    <p className="asd cus-text123 cus-text1234">Package</p>
                    <IonSegment>
                          <IonSegmentButton>
                            <h1 className="asd"><b>₹{this.state.PRICE_TWO - (this.state.PRICE_TWO * 0.25)}</b></h1>
                          </IonSegmentButton>
                    </IonSegment>
                    
                  </div>
           
              </IonCol>
            </IonRow>
          </div>
        )
      }

      else if(DISCOUNTCODE === "EASY50") {
        return (
          <div>
            <IonRow className="px-7 mt-134">
              <IonCol size="6">
                  <div className="box text-center">
                    <p className="asd cus-title1234"><b>Monthly</b></p>
                    <p className="asd cus-text123 cus-text1234">Package</p>
                    <IonSegment>
                          <IonSegmentButton>
                            <h1 className="asd"><b>₹{this.state.PRICE_ONE - (this.state.PRICE_ONE * 0.50)}</b></h1>
                          </IonSegmentButton>
                    </IonSegment>
                    
                  </div>
              </IonCol>
              <IonCol size="6">
                  <div className="box text-center">
                    <p className="asd cus-title1234"><b>Yearly</b></p>
                    <p className="asd cus-text123 cus-text1234">Package</p>
                    <IonSegment>
                          <IonSegmentButton>
                            <h1 className="asd"><b>₹{this.state.PRICE_TWO - (this.state.PRICE_TWO * 0.50)}</b></h1>
                          </IonSegmentButton>
                    </IonSegment>
                    
                  </div>
           
              </IonCol>
            </IonRow>
          </div>
        )
      }

      else if(DISCOUNTCODE === "EASY75") {
        return (
          <div>
            <IonRow className="px-7 mt-134">
              <IonCol size="6">
                  <div className="box text-center">
                    <p className="asd cus-title1234"><b>Monthly</b></p>
                    <p className="asd cus-text123 cus-text1234">Package</p>
                    <IonSegment>
                          <IonSegmentButton>
                            <h1 className="asd"><b>₹{this.state.PRICE_ONE - (this.state.PRICE_ONE * 0.75)}</b></h1>
                          </IonSegmentButton>
                    </IonSegment>
                    
                  </div>
              </IonCol>
              <IonCol size="6">
                  <div className="box text-center">
                    <p className="asd cus-title1234"><b>Yearly</b></p>
                    <p className="asd cus-text123 cus-text1234">Package</p>
                    <IonSegment>
                          <IonSegmentButton>
                            <h1 className="asd"><b>₹{this.state.PRICE_TWO - (this.state.PRICE_TWO * 0.75)}</b></h1>
                          </IonSegmentButton>
                    </IonSegment>
                    
                  </div>
           
              </IonCol>
            </IonRow>
          </div>
        )
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
  
           
         
            <img src="/assets/icon/subscribe.svg" className="" alt=""></img>
            <IonRow className="px-7">
              <IonCol size="12">
                <h2 className="asd">Select from following plans</h2>
              </IonCol>
            </IonRow>
  
            <IonRow className="px-7">
              <IonCol size="2">
                <img src="/assets/icon/create.svg" className="mtl-40" alt=""></img>
              </IonCol>
              <IonCol size="10">
                <p className="asd"><b>Creation of new portfolio</b></p>
                <p className="asd cus-text123">Feature Description</p>
              </IonCol>
            </IonRow>
  
            <IonRow className="px-7">
              <IonCol size="2">
                <img src="/assets/icon/24-hours.svg" className="mtl-40" alt=""></img>
              </IonCol>
              <IonCol size="10">
                <p className="asd"><b>24*7 portfolio tracking</b></p>
                <p className="asd cus-text123">Feature Description</p>
              </IonCol>
            </IonRow>
  
            <IonRow className="px-7">
              <IonCol size="2">
                <img src="/assets/icon/layers.svg" className="mtl-40" alt=""></img>
              </IonCol>
              <IonCol size="10">
                <p className="asd"><b>Optimise existing portfolio</b></p>
                <p className="asd cus-text123">Feature Description</p>
              </IonCol>
            </IonRow>
  
            <IonRow className="px-7">
              <IonCol size="2">
                <img src="/assets/icon/download (1).svg" className="mtl-40" alt=""></img>
              </IonCol>
              <IonCol size="10">
                <p className="asd"><b>Company Insights on all stocks</b></p>
                <p className="asd cus-text123">Feature Description</p>
              </IonCol>
            </IonRow>
  
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size='12' className="ion-align-self-center">
              <IonItem className="cus-input1 mb-12 ft-w p-2">
                <IonInput placeholder="EASY25 / EASY50 / EASY75" value={this.state.DISCOUNTCODE} onIonChange={_e => this.onChange(_e)}></IonInput>
              </IonItem>
            </IonCol>
            <IonCol size='12' className="ion-align-self-center text-center">
              <IonButton className='w-100'>Apply Now</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
            
            {
              renderPrices()
            }
  
            <IonButton className="cus-color mt-4" expand="full" onClick={() => { console.log("OK"); window.location.href='http://127.0.0.1:8000/pay/'; } } >Pay</IonButton>
            
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


