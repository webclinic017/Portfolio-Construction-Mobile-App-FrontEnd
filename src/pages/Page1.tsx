import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonThumbnail, 
  IonButton, IonInput, IonItem, IonSelect, IonSelectOption, IonRow, IonCol, IonFooter, IonAlert, IonGrid, IonSegmentButton, IonSegment  } from '@ionic/react';
import React from 'react';
import './Page.css';
import { RouteComponentProps } from "react-router-dom";
import axios from 'axios';

export default class Page extends React.Component<RouteComponentProps<{}>,any> {

 
  constructor(props: any)
  {
    super(props);
    this.state = {
      transactPopUp : false,
      Risk: "",
      NatureOfInvestment: "", 
      AssetClass: "",
      EnterCapitalAmount: "",
      NextInvestmentAfter: ""
    }

  }

  onChange3 = (_event3 : any) => {
    console.log(_event3.detail.value);
    this.setState({
      EnterCapitalAmount : _event3.detail.value
    });
  };

  onChange4 = (_event4 : any) => {
    console.log(_event4.detail.value);
    this.setState({
      NextInvestmentAfter : _event4.detail.value
    });
  };


  public assignRisk(segmentValue:any) {
    
    if (segmentValue === "Conservative"){
      this.setState({Risk : "Conservative"});
      console.log(this.state.Risk)
    }

    if (segmentValue === "Moderate"){
      this.setState({Risk : "Moderate"});
      console.log(this.state.Risk)
    }

    if (segmentValue === "Aggressive"){
      this.setState({Risk : "Aggressive"});
      console.log(this.state.Risk)
    }

    if (segmentValue === "Lumpsum"){
      this.setState({NatureOfInvestment : "Lumpsum"});
      console.log(this.state.NatureOfInvestment)
    }

    if (segmentValue === "Sip"){
      this.setState({NatureOfInvestment : "Sip"});
      console.log(this.state.NatureOfInvestment)
    }

    if (segmentValue === "Equity"){
      this.setState({AssetClass : "Equity"});
      console.log(this.state.AssetClass)
    }

    if (segmentValue === "FixedIncomeAndEquity"){
      this.setState({AssetClass : "FixedIncomeAndEquity"});
      console.log(this.state.AssetClass)
    }

    
}


public dataFetchClientInformation() {

  fetch(`http://127.0.0.1:8000/clientinformation/`, {
      method: 'POST',
      headers: {
        'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({risk_profile: this.state.Risk, nature_of_investment: this.state.NatureOfInvestment, 
        asset_class: this.state.AssetClass, investment_amount: this.state.EnterCapitalAmount, 
        next_investment_after: this.state.NextInvestmentAfter})
    })
    .then( res => res.json())
    .then( res => {
      
      console.log("Client Information Successfully Sent");
      this.FinalDiversificationStructureDatabaseCreation();
      console.log("FinalDiversificationStructure Successfully Created");
    })
    .catch( () => console.log("Error"));

};

public FinalDiversificationStructureDatabaseCreation() {

  axios.get('http://127.0.0.1:8000/finaldiversificationdatabasecreate/',{
        headers: {
          'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`
        }
      }
    )
    .then(response =>{
      console.log(response)

    })
    .catch(error => {
      console.log(error)
    })

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
  
  
  
            <img src="/assets/icon/New_investment.svg" className="" alt=""></img>
            <IonRow className="px-7">
              <IonCol size="10">
                <p className="small-title asd">Portfolio Details</p>
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
           
                    <IonRow className="px-7">
                      <IonCol size="12">
                        <p className="small-title asd">Risk</p>
                      </IonCol>
  
                    </IonRow>
                    <IonRow className="pl-30">
  
                      <IonCol size="3.5" className="cuscorner cus-border-1">
                        <IonSegment>
                          <IonSegmentButton onClick={e => this.assignRisk("Conservative")} value="Conservative">
                            <img src="/assets/icon/Conservative.svg" className="" alt=""></img>
                          </IonSegmentButton>
                        </IonSegment>
                        
                      </IonCol>
                      
                      <IonCol size="3.5" className="cuscorner">
                        <IonSegment>
                          <IonSegmentButton onClick={e => this.assignRisk("Moderate")} value="Moderate">
                            <img src="/assets/icon/Moderate.svg" className="" alt=""></img>
                          </IonSegmentButton>
                        </IonSegment>
                        
                      </IonCol>
                      
                      <IonCol size="3.5" className="cuscorner">
                        <IonSegment>
                          <IonSegmentButton onClick={e => this.assignRisk("Aggressive")} value="Aggressive">
                            <img src="/assets/icon/Aggressive.svg" className="" alt=""></img>
                          </IonSegmentButton>
                        </IonSegment>
                        
                      </IonCol>
                    </IonRow>
  
                    <IonRow className="px-7">
                      <IonCol size="12">
                        <p className="small-title asd">Nature of investment</p>
                      </IonCol>
        
                    </IonRow>
                    <IonRow  className="pl-30">
                      <IonCol size="3.5" className="cuscorner">
                        <IonSegment>
                          <IonSegmentButton onClick={e => this.assignRisk("Lumpsum")} value="Lumpsum">
                            <img src="/assets/icon/lumpsum.svg" className="" alt=""></img>
                          </IonSegmentButton>
                        </IonSegment>
                        
                      </IonCol>
                      <IonCol size="1"></IonCol>
                      <IonCol size="3.5" className="cuscorner ml-1010 cus-border-1">
                        <IonSegment>
                          <IonSegmentButton onClick={e => this.assignRisk("Sip")} value="Sip">
                            <img src="/assets/icon/Sip.svg" className="" alt=""></img>
                          </IonSegmentButton>
                        </IonSegment>
                        
                      </IonCol>
                      <IonCol size="1"></IonCol>
                      <IonCol size="3"></IonCol>
                    </IonRow>
          
          <IonRow className="px-7">
                      <IonCol size="12">
                        <p className="small-title asd">Asset class</p>
                      </IonCol>
        
                    </IonRow>
                    <IonRow  className="pl-30">
                      <IonCol size="3.5" className="cuscorner cus-border-1">
                        <IonSegment>
                          <IonSegmentButton onClick={e => this.assignRisk("Equity")} value="Equity">
                            <img src="/assets/icon/equity.svg" className="" alt=""></img>
                          </IonSegmentButton>
                        </IonSegment>
                      </IonCol>
                      <IonCol size="1"></IonCol>
                      <IonCol size="3.5" className="cuscorner ml-1010">
                        <IonSegment>
                          <IonSegmentButton onClick={e => this.assignRisk("FixedIncomeAndEquity")} value="FixedIncomeAndEquity">
                            <img src="/assets/icon/fixed income.svg" className="" alt=""></img>
                          </IonSegmentButton>
                        </IonSegment>
                        
                      </IonCol>
                      <IonCol size="1"></IonCol>
                      <IonCol size="3"></IonCol>
          </IonRow>
          <IonItem className="mb-12 p-2">
            
          </IonItem>
          <IonItem className="cus-input1 mb-12 ft-w p-2">            
              <IonInput placeholder="Enter Capital Amount" value={this.state.EnterCapitalAmount} onIonChange={e => this.onChange3(e)}></IonInput>
          </IonItem>
          <IonItem className="cus-input1 mb-12 p-2">
              <IonSelect placeholder="Next investment after" value={this.state.NextInvestmentAfter} onIonChange={_e => this.onChange4(_e)} className="pl-0 IonSelect ft-w" interface="popover">
                <IonSelectOption value="1 Months">1 Months</IonSelectOption>
                <IonSelectOption value="3 Months">3 Months</IonSelectOption>
                <IonSelectOption value="6 Months">6 Months</IonSelectOption>
                <IonSelectOption value="1 Year">1 Year</IonSelectOption>
              </IonSelect>
          </IonItem>
  
          <IonButton className="cus-color mt-4" expand="full" onClick={() => { console.log("OK"); this.dataFetchClientInformation(); /*this.props.history.push('/page7/Page7');*/ } } >Next</IonButton>
  
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

  


}






/*
export default class Page extends React.Component<any,any> {



  constructor(props: any)
  {
    super(props);
    this.state = {
      transactPopUp : false,
      Risk: [""], 
      NatureOfInvestment : [""], 
      EnterCapitalAmount: "",
      NextInvestmentAfter: ""
    }

  }

  onChange = (_event : any) => {
    console.log(_event.detail.value);
    this.setState({
      Risk : _event.detail.value
    });
  };
  
  onChange2 = (_event2 : any) => {
    console.log(_event2.detail.value);
    this.setState({
      NatureOfInvestment : _event2.detail.value
    });
  };
  
  onChange3 = (_event3 : any) => {
    console.log(_event3.detail.value);
    this.setState({
      EnterCapitalAmount : _event3.detail.value
    });
  };

  onChange4 = (_event4 : any) => {
    console.log(_event4.detail.value);
    this.setState({
      NextInvestmentAfter : _event4.detail.value
    });
  };


  public dataFetchClientInformation() {

    fetch(`http://127.0.0.1:8000/clientinformation/`, {
        method: 'POST',
        headers: {
          'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({risk_profile: this.state.Risk, nature_of_investment: this.state.NatureOfInvestment, investment_amount: this.state.EnterCapitalAmount, next_investment_after: this.state.NextInvestmentAfter})
      })
      .then( res => res.json())
      .then( res => {
        
        console.log("Client Information Successfully Sent");
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
  
           
         
            <img src="/assets/icon/New_investment.svg" className="" alt="" alt=""></img>
            <IonRow className="px-7">
              <IonCol size="10">
                <p className="small-title asd">Portfolio Details</p>
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
            <IonItem className="cus-input1 mb-12 p-2">
              <IonSelect placeholder="Risk" value={this.state.Risk} onIonChange={_e => this.onChange(_e)} className="pl-0 IonSelect ft-w" interface="popover">
                <IonSelectOption value="Conservative">Conservative</IonSelectOption>
                <IonSelectOption value="Moderate">Moderate</IonSelectOption>
                <IonSelectOption value="Aggresive">Aggressive</IonSelectOption>
              </IonSelect>
          </IonItem>
          <IonItem className="cus-input1 mb-12 p-2">
              <IonSelect placeholder="Nature of Investment" value={this.state.NatureOfInvestment} onIonChange={_e => this.onChange2(_e)} className="pl-0 IonSelect ft-w" interface="popover">
                <IonSelectOption value="One time">One time</IonSelectOption>
                <IonSelectOption value="Sip">Sip</IonSelectOption>
              </IonSelect>
          </IonItem>
          <IonItem className="cus-input1 mb-12 ft-w p-2">            
              <IonInput placeholder="Enter Capital Amount" value={this.state.EnterCapitalAmount} onIonChange={e => this.onChange3(e)}></IonInput>
          </IonItem>
          <IonItem className="cus-input1 mb-12 p-2">
              <IonSelect placeholder="Next investment after" value={this.state.NextInvestmentAfter} onIonChange={_e => this.onChange4(_e)} className="pl-0 IonSelect ft-w" interface="popover">
                <IonSelectOption value="1 Months">1 Months</IonSelectOption>
                <IonSelectOption value="3 Months">3 Months</IonSelectOption>
                <IonSelectOption value="6 Months">6 Months</IonSelectOption>
                <IonSelectOption value="1 Year">1 Year</IonSelectOption>
              </IonSelect>
          </IonItem>
            
          <IonButton onClick={e => this.dataFetchClientInformation()} className="cus-color mt-4"  expand="full">Next</IonButton>
       
          </IonContent>
  
      <IonFooter className="ion-no-border">
        <IonGrid className="text-center d-flex w-95 mt-10px">
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/home.svg" className="w-30" alt="" alt=""></img>
            </IonRow>
            <IonRow  className="jc-footer">
              <p className=" mt-5px ft-13 b-500 ft-13">Home</p>
            </IonRow>
          </IonCol>
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/res.svg" className="w-30" alt="" alt=""></img>
            </IonRow>
            <IonRow  className="jc-footer">
              <p className=" mt-5px ft-13  ft-13">Restructure</p>
            </IonRow>
          </IonCol>
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/ale.svg" className="w-30" alt="" alt=""></img>
            </IonRow>
            <IonRow  className="jc-footer">
              <p className=" mt-5px ft-13  ft-13">Alerts</p>
            </IonRow>
          </IonCol>
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/news.svg" className="w-30" alt="" alt=""></img>
            </IonRow>
            <IonRow  className="jc-footer">
            <p className=" mt-5px ft-13  ft-13">My Portfolio</p>
            </IonRow>
          </IonCol>
        </IonGrid>
    </IonFooter>
        </IonPage>
    );
  }

  




}

*/