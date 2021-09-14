import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonRow, IonCol, IonFooter, IonAlert, IonGrid  } from '@ionic/react';
import React from 'react';
import './Page.css';
import { RouteComponentProps } from "react-router-dom";
export default class Page extends React.Component<RouteComponentProps<{}>,any> {

 

  constructor(props: any)
  {
    super(props);
    this.state = {
      transactPopUp : false,
      EQUITY: "",
      FIXEDINCOME: "",
      NOOFSTOCKS: "",
      SMALLCAP : "",
      MIDCAP : "",
      LARGECAP : "",

      TOKEN_NAME: localStorage.getItem("MR_Token")      
      
    }

  }

  onChange = (_event : any) => {
    console.log(_event.detail.value);
    this.setState({
      EQUITY : _event.detail.value
    });
  };

  onChange2 = (_event2 : any) => {
    console.log(_event2.detail.value);
    this.setState({
      FIXEDINCOME : _event2.detail.value
    });
  };
  
  onChange3 = (_event3 : any) => {
    console.log(_event3.detail.value);
    this.setState({
      NOOFSTOCKS : _event3.detail.value
    });
  };

  onChange4 = (_event4 : any) => {
    console.log(_event4.detail.value);
    this.setState({
      SMALLCAP : _event4.detail.value
    });
  };

  onChange5 = (_event5 : any) => {
    console.log(_event5.detail.value);
    this.setState({
      MIDCAP : _event5.detail.value
    });
  };

  onChange6 = (_event6 : any) => {
    console.log(_event6.detail.value);
    this.setState({
      LARGECAP : _event6.detail.value
    });
  };






  public EditFinalDiversificationStructure() {

    fetch(`http://127.0.0.1:8000/finaldiversification/`, {
        method: 'PUT',
        headers: {
          'Authorization': `Token ${this.state.TOKEN_NAME}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                              equity_weightage_clientchoice_final: this.state.EQUITY, 
                              debt_weightage_clientchoice_final: this.state.FIXEDINCOME, 
                              no_of_stock_final: this.state.NOOFSTOCKS, 
                              smallcap_weightage_clientchoice_final: this.state.SMALLCAP,
                              midcap_weightage_clientchoice_final: this.state.MIDCAP,
                              largecap_weightage_clientchoice_final: this.state.LARGECAP   
                            })
      })
      .then( res => res.json())
      .then( res => {
        
        console.log("FinalDiversificationStructure Updated");
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
  
  
        <IonAlert
            isOpen={this.state.transactPopUp}
            onDidDismiss={() => this.setState({transactPopUp : false})}
            header={'Portfolio Details'}
            subHeader={'Description for current page'}
            message={'This is an alert message.'}
            buttons={['OK']}
          />
  
            <img src="/assets/icon/signup.svg" className="" alt=""></img>
  
            <IonItem className="cus-input1 mb-12 ft-w p-2">
              <IonRow className="px-7 w-100 ">
                <IonCol size="10">
                  <p className="small-title asd">Equity </p>
                </IonCol>
          
                <IonCol size="2" className="p-cus-10">
                  <IonInput placeholder="0" color="primary" value={this.state.EQUITY} onIonChange={_e => this.onChange(_e)}></IonInput> 
                </IonCol>
              </IonRow>             
            </IonItem>
  
            <IonItem className="cus-input1 mb-12 ft-w p-2">
              <IonRow className="px-7 w-100">
                <IonCol size="10">
                  <p className="small-title asd">Fixed Income </p>
                </IonCol>
  
                <IonCol size="2" className="p-cus-10">
                  <IonInput placeholder="0"  color="primary" value={this.state.FIXEDINCOME} onIonChange={_e => this.onChange2(_e)}></IonInput>
                </IonCol>
              </IonRow>             
            </IonItem>
  
            <IonItem className="cus-input1 mb-12 ft-w p-2">
              <IonRow className="px-7 w-100">
                <IonCol size="10">
                  <p className="small-title asd">No. of stocks </p>
                </IonCol>
                <IonCol size="2" className="p-cus-10">
                  <IonInput placeholder="0"  color="primary"  type="number"  value={this.state.NOOFSTOCKS} onIonChange={e => this.onChange3(e)}></IonInput>
                </IonCol>   
              </IonRow>             
            </IonItem>
  
            {/* <IonItem className="cus-input1 mb-12 ft-w p-2">
            <IonRow className="px-7">
              <IonCol size="6">
                <p className="small-title asd">Equity </p>
              </IonCol>
        
                <IonCol size="6">
                <IonInput placeholder="Enter your equity" color="primary" value={"50%"}></IonInput> 
                </IonCol>
                </IonRow>             
            </IonItem>
            <IonItem className="cus-input1 mb-12 ft-w p-2">
            <IonRow className="px-7">
              <IonCol size="5">
                <p className="small-title asd">Fixed Income </p>
              </IonCol>
              <IonCol size="7">
                <IonInput placeholder="Enter Fixed Income"  color="primary" value={"50%"}></IonInput>
              </IonCol>
         
                 
                </IonRow>             
            </IonItem>
            <IonItem className="cus-input1 mb-12 ft-w p-2">
            <IonRow className="px-7">
              <IonCol size="5">
                <p className="small-title asd">No. of stocks </p>
              </IonCol>
              <IonCol size="7">
                <IonInput placeholder="Enter No. of stocks"  color="primary"  type="number"  value={"50"}></IonInput>
              </IonCol>
         
                 
                </IonRow>             
            </IonItem> */}
            
            <IonRow className="px-7">
              <IonCol size="10">
                <p className="small-title asd">Stock distribution </p>
              </IonCol>
            </IonRow>
  
            <IonItem className="cus-input1 mb-12 ">
              <IonCol className="f-14" size="6">
                <p>Small Cap</p>
              </IonCol>
              <IonCol size="6" className="text-right">
              {/*<h5 className="main-color">53</h5>  */} <IonInput placeholder="0" color="primary"  type="number" value={this.state.SMALLCAP} onIonChange={_e => this.onChange4(_e)}></IonInput>
              </IonCol>
            </IonItem>
  
          <IonItem className="cus-input1 mb-12 ">
            <IonCol className="f-14" size="6">
              <p>Mid Cap</p>
            </IonCol>
            <IonCol size="6" className="text-right">
              {/*<h5 className="main-color">53</h5>  */} <IonInput placeholder="0" color="primary"  type="number"  value={this.state.MIDCAP} onIonChange={_e => this.onChange5(_e)}></IonInput>
            </IonCol>
          </IonItem>
  
          <IonItem className="cus-input1 mb-12 ">
            <IonCol className="f-14" size="6">
              <p>Large Cap</p>
            </IonCol>
            <IonCol size="6" className="text-right">
              {/*<h5 className="main-color">53</h5>  */} <IonInput placeholder="0" color="primary"  type="number"  value={this.state.LARGECAP} onIonChange={_e => this.onChange6(_e)}></IonInput> 
            </IonCol>
          </IonItem>
  
        
          <IonButton className="cus-color mt-4"  onClick={() => { this.EditFinalDiversificationStructure() } } id="tool-tip" color="primary" expand="block">Submit</IonButton>
          </IonContent>
  
          <IonAlert
            isOpen={this.state.transactPopUp}
            onDidDismiss={() => this.setState({transactPopUp : false})}
            header={'Portfolio Details'}
            subHeader={'Description for current page'}
            message={'This is an alert message.'}
            buttons={['Cancel','Submit']}
          />
  
  
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


