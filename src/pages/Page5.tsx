import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, 
IonItem, IonLabel, IonRow, IonCol, IonFooter, 
IonGrid,IonSegmentButton, IonSegment} from '@ionic/react';
import React from 'react';
import './Page.css';
import axios from 'axios';
import { RouteComponentProps } from "react-router-dom";

export default class Page extends React.Component<RouteComponentProps<{}>,any> {

  constructor(props: RouteComponentProps<{}>)
  {
 
    super(props);
  
    this.state = {   
      
      today : 1, 
      threeMonth : 0,
      sixMonth : 0,
      tillDate : 0,


      Profit: 0, 
      Profit_Percentage: 0, 
      Best_Performance_sector: '',
      ProfitPercent_of_Best_Performance_sector: 0, 
      Worst_Performance_sector: '',
      ProfitPercent_of_Worst_Performance_sector: 0, 
      EasyVest_Performance: 0,
      Index_Performance: 0, 
      Mutual_Fund_Performance: 0,

      Three_Month_Profit: 0, 
      Three_Month_Profit_Percentage: 0, 
      Three_Month_Best_Performance_sector: '',
      Three_Month_ProfitPercent_of_Best_Performance_sector: 0, 
      Three_Month_Worst_Performance_sector: '',
      Three_Month_ProfitPercent_of_Worst_Performance_sector: 0, 
      Three_Month_EasyVest_Performance: 0,
      Three_Month_Index_Performance: 0, 
      Three_Month_Mutual_Fund_Performance: 0,

      Six_Month_Profit: 0, 
      Six_Month_Profit_Percentage: 0, 
      Six_Month_Best_Performance_sector: '',
      Six_Month_ProfitPercent_of_Best_Performance_sector: 0, 
      Six_Month_Worst_Performance_sector: '',
      Six_Month_ProfitPercent_of_Worst_Performance_sector: 0, 
      Six_Month_EasyVest_Performance: 0,
      Six_Month_Index_Performance: 0, 
      Six_Month_Mutual_Fund_Performance: 0,

      TillDate_Profit: 0, 
      TillDate_Profit_Percentage: 0, 
      TillDate_Best_Performance_sector: '',
      TillDate_ProfitPercent_of_Best_Performance_sector: 0, 
      TillDate_Worst_Performance_sector: '',
      TillDate_ProfitPercent_of_Worst_Performance_sector: 0, 
      TillDate_EasyVest_Performance: 0,
      TillDate_Index_Performance: 0, 
      TillDate_Mutual_Fund_Performance: 0
      
    }

  }

  datafetch() {
    
   
    axios.get('http://127.0.0.1:8000/onedayreturn/', {

                    headers: {
                      'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`,
                      'Content-Type': 'application/json'
                    }

    })
  .then(res =>{
    console.log(res)
    this.setState({Profit : res.data['Profit']})
    this.setState({Profit_Percentage : res.data['Profit_Percentage']})
    this.setState({Best_Performance_sector : res.data['Best_Performance_sector']})
    this.setState({ProfitPercent_of_Best_Performance_sector : res.data['ProfitPercent_of_Best_Performance_sector']})
    this.setState({Worst_Performance_sector : res.data['Worst_Performance_sector']})
    this.setState({ProfitPercent_of_Worst_Performance_sector : res.data['ProfitPercent_of_Worst_Performance_sector']})
    this.setState({EasyVest_Performance : res.data['EasyVest_Performance']})
    this.setState({Index_Performance : res.data['Index_Performance']})
    this.setState({Mutual_Fund_Performance : res.data['Mutual_Fund_Performance']})
    
  })
  .catch(error => {
    console.log(error)
  })

    
    axios.get('http://127.0.0.1:8000/threemonthreturn/', {

      headers: {
        'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`,
        'Content-Type': 'application/json'
      }

    })
  .then(res =>{
    console.log(res)
    this.setState({Three_Month_Profit : res.data['Three_Month_Profit']})
    this.setState({Three_Month_Profit_Percentage : res.data['Three_Month_Profit_Percentage']})
    this.setState({Three_Month_Best_Performance_sector : res.data['Three_Month_Best_Performance_sector']})
    this.setState({Three_Month_ProfitPercent_of_Best_Performance_sector : res.data['Three_Month_ProfitPercent_of_Best_Performance_sector']})
    this.setState({Three_Month_Worst_Performance_sector : res.data['Three_Month_Worst_Performance_sector']})
    this.setState({Three_Month_ProfitPercent_of_Worst_Performance_sector : res.data['Three_Month_ProfitPercent_of_Worst_Performance_sector']})
    this.setState({Three_Month_EasyVest_Performance : res.data['Three_Month_EasyVest_Performance']})
    this.setState({Three_Month_Index_Performance : res.data['Three_Month_Index_Performance']})
    this.setState({Three_Month_Mutual_Fund_Performance : res.data['Three_Month_Mutual_Fund_Performance']})
   
  })
  .catch(error => {
    console.log(error)
  })

  axios.get('http://127.0.0.1:8000/sixmonthreturn/', {

        headers: {
          'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`,
          'Content-Type': 'application/json'
        }

      })
    .then(res =>{
      console.log(res)
      this.setState({Six_Month_Profit : res.data['Six_Month_Profit']})
      this.setState({Six_Month_Profit_Percentage : res.data['Six_Month_Profit_Percentage']})
      this.setState({Six_Month_Best_Performance_sector : res.data['Six_Month_Best_Performance_sector']})
      this.setState({Six_Month_ProfitPercent_of_Best_Performance_sector : res.data['Six_Month_ProfitPercent_of_Best_Performance_sector']})
      this.setState({Six_Month_Worst_Performance_sector : res.data['Six_Month_Worst_Performance_sector']})
      this.setState({Six_Month_ProfitPercent_of_Worst_Performance_sector : res.data['Six_Month_ProfitPercent_of_Worst_Performance_sector']})
      this.setState({Six_Month_EasyVest_Performance : res.data['Six_Month_EasyVest_Performance']})
      this.setState({Six_Month_Index_Performance : res.data['Six_Month_Index_Performance']})
      this.setState({Six_Month_Mutual_Fund_Performance : res.data['Six_Month_Mutual_Fund_Performance']})
      
    })
    .catch(error => {
      console.log(error)
    })

    axios.get('http://127.0.0.1:8000/tilldatereturn/', {

        headers: {
          'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`,
          'Content-Type': 'application/json'
        }

      })
    .then(res =>{
      console.log(res)
      this.setState({TillDate_Profit : res.data['TillDate_Profit']})
      this.setState({TillDate_Profit_Percentage : res.data['TillDate_Profit_Percentage']})
      this.setState({TillDate_Best_Performance_sector : res.data['TillDate_Best_Performance_sector']})
      this.setState({TillDate_ProfitPercent_of_Best_Performance_sector : res.data['TillDate_ProfitPercent_of_Best_Performance_sector']})
      this.setState({TillDate_Worst_Performance_sector : res.data['TillDate_Worst_Performance_sector']})
      this.setState({TillDate_ProfitPercent_of_Worst_Performance_sector : res.data['TillDate_ProfitPercent_of_Worst_Performance_sector']})
      this.setState({TillDate_EasyVest_Performance : res.data['TillDate_EasyVest_Performance']})
      this.setState({TillDate_Index_Performance : res.data['TillDate_Index_Performance']})
      this.setState({TillDate_Mutual_Fund_Performance : res.data['TillDate_Mutual_Fund_Performance']})
     
    })
    .catch(error => {
      console.log(error)
    })

}

componentDidMount() {

 
  this.datafetch()
  
}

public increamentFlag(segmentValue:any) {

  if (segmentValue === "today"){
    this.setState({today : this.state.today + 1});
    this.setState({threeMonth : 0});
    this.setState({sixMonth : 0});
    this.setState({tillDate : 0});
   

  }
  if (segmentValue === "threeMonth"){
    this.setState({threeMonth: this.state.threeMonth + 1});
    this.setState({today : 0});
    this.setState({sixMonth : 0});
    this.setState({tillDate : 0});
   

  }

  if (segmentValue === "sixMonth"){
    this.setState({sixMonth : this.state.sixMonth + 1});
    this.setState({today : 0});
    this.setState({threeMonth : 0});
    this.setState({tillDate : 0});
   

  }
  if (segmentValue === "tillDate"){
    this.setState({tillDate: this.state.tillDate + 1});
    this.setState({today : 0});
    this.setState({threeMonth : 0});
    this.setState({sixMonth : 0});
   

  }
  

}

  render() {

    if(this.state.today) {
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
                    <IonSegmentButton value="call">
                      <IonLabel>Diversification</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="">
                      <IonLabel color="">Stocks<span className="button-inner"> *</span></IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="map" className="cus-segment">
                      <IonLabel color="primary">Return</IonLabel>
                    </IonSegmentButton>
                  </IonSegment>
                </IonCol>
              </IonRow>
      
                <div className="d-flex text-center jc">         
                  <IonSegmentButton className="f-14 select-timeline" onClick={e => this.increamentFlag("today")} value="today"><IonLabel >1D</IonLabel></IonSegmentButton>
                  <IonSegmentButton className="f-14 not-select-timeline" onClick={e => this.increamentFlag("threeMonth")} value="threeMonth"><IonLabel >3M</IonLabel></IonSegmentButton>
                  <IonSegmentButton className="f-14 not-select-timeline" onClick={e => this.increamentFlag("sixMonth")} value="sixMonth"><IonLabel >6M</IonLabel></IonSegmentButton>
                  <IonSegmentButton className="f-14 not-select-timeline" onClick={e => this.increamentFlag("tillDate")} value="tillDate"><IonLabel >Till Date</IonLabel></IonSegmentButton>
                </div>
      
      
            <IonItem className="cus-input1 mb-12 mt-5">
      
              <IonCol className="d-flex f-14" size="6">
                <p>Profit</p>
              </IonCol>
              <IonCol size="6" className="text-right">
                <h5 className="main-color">₹{this.state.Profit}</h5> 
              </IonCol>
            </IonItem>
            <IonItem className="cus-input1 mb-12 mt-5">
      
              <IonCol className="d-flex f-14" size="8">
                <p>Profit Percentage </p>
              </IonCol>
              <IonCol size="4" className="text-right">
                <h5 className="main-color">{this.state.Profit_Percentage}%</h5> 
              </IonCol>
            </IonItem>
      
            <IonItem className="cus-input1 mb-12 mt-5">
              <IonGrid>
                <IonRow>
                  <IonCol className="bb f-14 b-500" size="12">
                    <p>Best Performing sector</p>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol className=" f-14" size="8">
                    <p>{this.state.Best_Performance_sector}</p>
                  </IonCol>
                  <IonCol size="4" className="text-right">
                    <h5 className="main-color">{this.state.ProfitPercent_of_Best_Performance_sector}%</h5> 
                  </IonCol>
                </IonRow>
      
              </IonGrid>
            </IonItem>
            <IonItem className="cus-input1 mb-12 mt-5">
              <IonGrid>
                <IonRow>
                  <IonCol className="bb f-14 b-500" size="12">
                    <p>Worst Performing sector</p>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol className="f-14" size="8">
                    <p>{this.state.Worst_Performance_sector}</p>
                  </IonCol>
                  <IonCol size="4" className="text-right">
                    <h5 className="danger-color">{this.state.ProfitPercent_of_Worst_Performance_sector}%</h5> 
                  </IonCol>
                </IonRow>
      
              </IonGrid>
            </IonItem>
            <IonItem className="cus-input1 mb-12 mt-5">
              <IonGrid>
                <IonRow>
                  <IonCol className="bb f-14 b-500" size="12">
                    <p>Compare</p>
                  </IonCol>
                </IonRow>
                <IonRow className="mb--15">
                  <IonCol className="f-14" size="8">
                    <p>Easy West</p>
                  </IonCol>
                  <IonCol size="4" className="text-right">
                    <h5 className="danger-color">{this.state.EasyVest_Performance}%</h5> 
                  </IonCol>
                </IonRow>
                <IonRow className="mb--15">
                  <IonCol className="f-14" size="8">
                    <p>Index</p>
                  </IonCol>
                  <IonCol size="4" className="text-right">
                    <h5 className="danger-color">{this.state.Index_Performance}%</h5> 
                  </IonCol>
                </IonRow>
                <IonRow className="mb--15">
                  <IonCol className="f-14" size="8">
                    <p>M.F.</p>
                  </IonCol>
                  <IonCol size="4" className="text-right">
                    <h5 className="danger-color">{this.state.Mutual_Fund_Performance}%</h5> 
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
                  <p className=" mt-5px ft-13" >My Portfolio</p>
                  </IonRow>
                </IonCol>
              </IonGrid>
          </IonFooter>
      
        </IonPage>
        );
    }


    //************************************************************************************************** */

    if(this.state.threeMonth) {
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
                    <IonSegmentButton value="call">
                      <IonLabel>Diversification</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="">
                      <IonLabel color="">Stocks<span className="button-inner"> *</span></IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="map" className="cus-segment">
                      <IonLabel color="primary">Return</IonLabel>
                    </IonSegmentButton>
                  </IonSegment>
                </IonCol>
              </IonRow>
      
                <div className="d-flex text-center jc">         
                  <IonSegmentButton className="f-14 not-select-timeline" onClick={e => this.increamentFlag("today")} value="today"><IonLabel >1D</IonLabel></IonSegmentButton>
                  <IonSegmentButton className="f-14 select-timeline" onClick={e => this.increamentFlag("threeMonth")} value="threeMonth"><IonLabel >3M</IonLabel></IonSegmentButton>
                  <IonSegmentButton className="f-14 not-select-timeline" onClick={e => this.increamentFlag("sixMonth")} value="sixMonth"><IonLabel >6M</IonLabel></IonSegmentButton>
                  <IonSegmentButton className="f-14 not-select-timeline" onClick={e => this.increamentFlag("tillDate")} value="tillDate"><IonLabel >Till Date</IonLabel></IonSegmentButton>
                </div>
      
      
            <IonItem className="cus-input1 mb-12 mt-5">
      
              <IonCol className="d-flex f-14" size="6">
                <p>Profit</p>
              </IonCol>
              <IonCol size="6" className="text-right">
                <h5 className="main-color">₹{this.state.Three_Month_Profit}</h5> 
              </IonCol>
            </IonItem>
            <IonItem className="cus-input1 mb-12 mt-5">
      
              <IonCol className="d-flex f-14" size="8">
                <p>Profit Percentage </p>
              </IonCol>
              <IonCol size="4" className="text-right">
                <h5 className="main-color">{this.state.Three_Month_Profit_Percentage}%</h5> 
              </IonCol>
            </IonItem>
      
            <IonItem className="cus-input1 mb-12 mt-5">
              <IonGrid>
                <IonRow>
                  <IonCol className="bb f-14 b-500" size="12">
                    <p>Best Performing sector</p>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol className=" f-14" size="8">
                    <p>{this.state.Three_Month_Best_Performance_sector}</p>
                  </IonCol>
                  <IonCol size="4" className="text-right">
                    <h5 className="main-color">{this.state.Three_Month_ProfitPercent_of_Best_Performance_sector}%</h5> 
                  </IonCol>
                </IonRow>
      
              </IonGrid>
            </IonItem>
            <IonItem className="cus-input1 mb-12 mt-5">
              <IonGrid>
                <IonRow>
                  <IonCol className="bb f-14 b-500" size="12">
                    <p>Worst Performing sector</p>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol className="f-14" size="8">
                    <p>{this.state.Three_Month_Worst_Performance_sector}</p>
                  </IonCol>
                  <IonCol size="4" className="text-right">
                    <h5 className="danger-color">{this.state.Three_Month_ProfitPercent_of_Worst_Performance_sector}%</h5> 
                  </IonCol>
                </IonRow>
      
              </IonGrid>
            </IonItem>
            <IonItem className="cus-input1 mb-12 mt-5">
              <IonGrid>
                <IonRow>
                  <IonCol className="bb f-14 b-500" size="12">
                    <p>Compare</p>
                  </IonCol>
                </IonRow>
                <IonRow className="mb--15">
                  <IonCol className="f-14" size="8">
                    <p>Easy West</p>
                  </IonCol>
                  <IonCol size="4" className="text-right">
                    <h5 className="danger-color">{this.state.Three_Month_EasyVest_Performance}%</h5> 
                  </IonCol>
                </IonRow>
                <IonRow className="mb--15">
                  <IonCol className="f-14" size="8">
                    <p>Index</p>
                  </IonCol>
                  <IonCol size="4" className="text-right">
                    <h5 className="danger-color">{this.state.Three_Month_Index_Performance}%</h5> 
                  </IonCol>
                </IonRow>
                <IonRow className="mb--15">
                  <IonCol className="f-14" size="8">
                    <p>M.F.</p>
                  </IonCol>
                  <IonCol size="4" className="text-right">
                    <h5 className="danger-color">{this.state.Three_Month_Mutual_Fund_Performance}%</h5> 
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
                  <p className=" mt-5px ft-13" >My Portfolio</p>
                  </IonRow>
                </IonCol>
              </IonGrid>
          </IonFooter>
      
        </IonPage>
        );
    }

    /************************************************************************* */

    if(this.state.sixMonth) {
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
                    <IonSegmentButton value="call">
                      <IonLabel>Diversification</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="">
                      <IonLabel color="">Stocks<span className="button-inner"> *</span></IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="map" className="cus-segment">
                      <IonLabel color="primary">Return</IonLabel>
                    </IonSegmentButton>
                  </IonSegment>
                </IonCol>
              </IonRow>
      
                <div className="d-flex text-center jc">         
                  <IonSegmentButton className="f-14 not-select-timeline" onClick={e => this.increamentFlag("today")} value="today"><IonLabel >1D</IonLabel></IonSegmentButton>
                  <IonSegmentButton className="f-14 not-select-timeline" onClick={e => this.increamentFlag("threeMonth")} value="threeMonth"><IonLabel >3M</IonLabel></IonSegmentButton>
                  <IonSegmentButton className="f-14 select-timeline" onClick={e => this.increamentFlag("sixMonth")} value="sixMonth"><IonLabel >6M</IonLabel></IonSegmentButton>
                  <IonSegmentButton className="f-14 not-select-timeline" onClick={e => this.increamentFlag("tillDate")} value="tillDate"><IonLabel >Till Date</IonLabel></IonSegmentButton>
                </div>
      
      
            <IonItem className="cus-input1 mb-12 mt-5">
      
              <IonCol className="d-flex f-14" size="6">
                <p>Profit</p>
              </IonCol>
              <IonCol size="6" className="text-right">
                <h5 className="main-color">₹{this.state.Six_Month_Profit}</h5> 
              </IonCol>
            </IonItem>
            <IonItem className="cus-input1 mb-12 mt-5">
      
              <IonCol className="d-flex f-14" size="8">
                <p>Profit Percentage </p>
              </IonCol>
              <IonCol size="4" className="text-right">
                <h5 className="main-color">{this.state.Six_Month_Profit_Percentage}%</h5> 
              </IonCol>
            </IonItem>
      
            <IonItem className="cus-input1 mb-12 mt-5">
              <IonGrid>
                <IonRow>
                  <IonCol className="bb f-14 b-500" size="12">
                    <p>Best Performing sector</p>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol className=" f-14" size="8">
                    <p>{this.state.Six_Month_Best_Performance_sector}</p>
                  </IonCol>
                  <IonCol size="4" className="text-right">
                    <h5 className="main-color">{this.state.Six_Month_ProfitPercent_of_Best_Performance_sector}%</h5> 
                  </IonCol>
                </IonRow>
      
              </IonGrid>
            </IonItem>
            <IonItem className="cus-input1 mb-12 mt-5">
              <IonGrid>
                <IonRow>
                  <IonCol className="bb f-14 b-500" size="12">
                    <p>Worst Performing sector</p>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol className="f-14" size="8">
                    <p>{this.state.Six_Month_Worst_Performance_sector}</p>
                  </IonCol>
                  <IonCol size="4" className="text-right">
                    <h5 className="danger-color">{this.state.Six_Month_ProfitPercent_of_Worst_Performance_sector}%</h5> 
                  </IonCol>
                </IonRow>
      
              </IonGrid>
            </IonItem>
            <IonItem className="cus-input1 mb-12 mt-5">
              <IonGrid>
                <IonRow>
                  <IonCol className="bb f-14 b-500" size="12">
                    <p>Compare</p>
                  </IonCol>
                </IonRow>
                <IonRow className="mb--15">
                  <IonCol className="f-14" size="8">
                    <p>Easy West</p>
                  </IonCol>
                  <IonCol size="4" className="text-right">
                    <h5 className="danger-color">{this.state.Six_Month_EasyVest_Performance}%</h5> 
                  </IonCol>
                </IonRow>
                <IonRow className="mb--15">
                  <IonCol className="f-14" size="8">
                    <p>Index</p>
                  </IonCol>
                  <IonCol size="4" className="text-right">
                    <h5 className="danger-color">{this.state.Six_Month_Index_Performance}%</h5> 
                  </IonCol>
                </IonRow>
                <IonRow className="mb--15">
                  <IonCol className="f-14" size="8">
                    <p>M.F.</p>
                  </IonCol>
                  <IonCol size="4" className="text-right">
                    <h5 className="danger-color">{this.state.Six_Month_Mutual_Fund_Performance}%</h5> 
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
                  <p className=" mt-5px ft-13" >My Portfolio</p>
                  </IonRow>
                </IonCol>
              </IonGrid>
          </IonFooter>
      
        </IonPage>
        );
    } 

    /************************************************************************************************* */

    if(this.state.tillDate) {
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
                    <IonSegmentButton value="call">
                      <IonLabel>Diversification</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="">
                      <IonLabel color="">Stocks<span className="button-inner"> *</span></IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="map" className="cus-segment">
                      <IonLabel color="primary">Return</IonLabel>
                    </IonSegmentButton>
                  </IonSegment>
                </IonCol>
              </IonRow>
      
                <div className="d-flex text-center jc">         
                  <IonSegmentButton className="f-14 not-select-timeline" onClick={e => this.increamentFlag("today")} value="today"><IonLabel >1D</IonLabel></IonSegmentButton>
                  <IonSegmentButton className="f-14 not-select-timeline" onClick={e => this.increamentFlag("threeMonth")} value="threeMonth"><IonLabel >3M</IonLabel></IonSegmentButton>
                  <IonSegmentButton className="f-14 not-select-timeline" onClick={e => this.increamentFlag("sixMonth")} value="sixMonth"><IonLabel >6M</IonLabel></IonSegmentButton>
                  <IonSegmentButton className="f-14 select-timeline" onClick={e => this.increamentFlag("tillDate")} value="tillDate"><IonLabel >Till Date</IonLabel></IonSegmentButton>
                </div>
      
      
            <IonItem className="cus-input1 mb-12 mt-5">
      
              <IonCol className="d-flex f-14" size="6">
                <p>Profit</p>
              </IonCol>
              <IonCol size="6" className="text-right">
                <h5 className="main-color">₹{this.state.TillDate_Profit}</h5> 
              </IonCol>
            </IonItem>
            <IonItem className="cus-input1 mb-12 mt-5">
      
              <IonCol className="d-flex f-14" size="8">
                <p>Profit Percentage </p>
              </IonCol>
              <IonCol size="4" className="text-right">
                <h5 className="main-color">{this.state.TillDate_Profit_Percentage}%</h5> 
              </IonCol>
            </IonItem>
      
            <IonItem className="cus-input1 mb-12 mt-5">
              <IonGrid>
                <IonRow>
                  <IonCol className="bb f-14 b-500" size="12">
                    <p>Best Performing sector</p>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol className=" f-14" size="8">
                    <p>{this.state.TillDate_Best_Performance_sector}</p>
                  </IonCol>
                  <IonCol size="4" className="text-right">
                    <h5 className="main-color">{this.state.TillDate_ProfitPercent_of_Best_Performance_sector}%</h5> 
                  </IonCol>
                </IonRow>
      
              </IonGrid>
            </IonItem>
            <IonItem className="cus-input1 mb-12 mt-5">
              <IonGrid>
                <IonRow>
                  <IonCol className="bb f-14 b-500" size="12">
                    <p>Worst Performing sector</p>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol className="f-14" size="8">
                    <p>{this.state.TillDate_Worst_Performance_sector}</p>
                  </IonCol>
                  <IonCol size="4" className="text-right">
                    <h5 className="danger-color">{this.state.TillDate_ProfitPercent_of_Worst_Performance_sector}%</h5> 
                  </IonCol>
                </IonRow>
      
              </IonGrid>
            </IonItem>
            <IonItem className="cus-input1 mb-12 mt-5">
              <IonGrid>
                <IonRow>
                  <IonCol className="bb f-14 b-500" size="12">
                    <p>Compare</p>
                  </IonCol>
                </IonRow>
                <IonRow className="mb--15">
                  <IonCol className="f-14" size="8">
                    <p>Easy West</p>
                  </IonCol>
                  <IonCol size="4" className="text-right">
                    <h5 className="danger-color">{this.state.TillDate_EasyVest_Performance}%</h5> 
                  </IonCol>
                </IonRow>
                <IonRow className="mb--15">
                  <IonCol className="f-14" size="8">
                    <p>Index</p>
                  </IonCol>
                  <IonCol size="4" className="text-right">
                    <h5 className="danger-color">{this.state.TillDate_Index_Performance}%</h5> 
                  </IonCol>
                </IonRow>
                <IonRow className="mb--15">
                  <IonCol className="f-14" size="8">
                    <p>M.F.</p>
                  </IonCol>
                  <IonCol size="4" className="text-right">
                    <h5 className="danger-color">{this.state.TillDate_Mutual_Fund_Performance}%</h5> 
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
                  <p className=" mt-5px ft-13" >My Portfolio</p>
                  </IonRow>
                </IonCol>
              </IonGrid>
          </IonFooter>
      
        </IonPage>
        );
    }

    

  } // end render function




} // end class

