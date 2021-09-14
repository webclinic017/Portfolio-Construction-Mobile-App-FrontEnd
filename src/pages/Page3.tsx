import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonRow, IonCol, IonFooter, IonGrid,
  IonSegment, IonSegmentButton } from '@ionic/react';
  import React from 'react';
  import {Doughnut} from 'react-chartjs-2';
  import './Page.css';
  import axios from 'axios';
  



  export default class Page extends React.Component<any,any> {
  


  constructor(props: any)
  {
    super(props);
    this.state = {
     chartData:{},
 
     MarketCapWiseDiversificationAPI :{},
     BuyFlagCalculationAPI :{}, 
     sectors:[],
     SECTOR_AND_PERCENTAGE_DICT:{}
   
    }
  }
  componentDidMount() {
    
    // MarketCapWiseDiversificationAPI
    axios.get('http://127.0.0.1:8000/marketcapwisediversification/',{
          headers: {
            'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`
          }
        }
      )
      .then(response =>{
        console.log(response)
        this.setState({MarketCapWiseDiversificationAPI : response.data})

        this.getChartData(this.state.MarketCapWiseDiversificationAPI["cap_list"]);
  
      })
      .catch(error => {
        console.log(error)
      })



      // BuyFlagCalculationAPI
      axios.get('http://127.0.0.1:8000/buyflagcalculation/',{
          headers: {
            'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`
          }
        }
      )
      .then(response =>{
        console.log(response)
        this.setState({BuyFlagCalculationAPI : response.data})
        this.setState({sectors : response.data["unique_sectors"]})
        this.setState({SECTOR_AND_PERCENTAGE_DICT : response.data["sector_and_percentages"]})
        
  
      })
      .catch(error => {
        console.log(error)
      })
  
    
  }

  getChartData( caplist : []){
  
    
    // Ajax calls here
    this.setState({

      chartData:{
        labels: ['Large Cap', 'Mid Cap', 'Small Cap'],
        datasets: [
          {
            label: 'Rainfall',
            backgroundColor: [
              '#FFCB39',
              '#344ADE',
              '#4dd2ff'
            ],
            hoverBackgroundColor: [
            '#FFCB39',
            '#344ADE',
            '#4dd2ff'
            ],
            data: caplist
          }
        ]
        
    } // chartData end
  }); // Ajax call end
}

  renderSectors(key: any, val:any) {

    var s = "/assets/icon/"
    s = s + key

    s = s + ".svg"
    console.log(s)
    
    if(key === 'Paints / Varnishes'){
          return (
            <IonRow className="bb">
                          <IonCol size="1" className="pt-6">
                            <img src="/assets/icon/Paints and Varnishes.svg" alt=""></img>
                          </IonCol>
                          <IonCol className=" f-14" size="8">
                            <p className="">{key}</p>
                          </IonCol>
                          <IonCol size="3" className="text-right">
                            <h5 className="main-color">{val}%</h5> 
                          </IonCol>
            </IonRow>     
      )
    }

    return (
            <IonRow className="bb">
                          <IonCol size="1" className="pt-6">
                            <img src={s} alt=""></img>
                          </IonCol>
                          <IonCol className=" f-14" size="8">
                            <p className="">{key}</p>
                          </IonCol>
                          <IonCol size="3" className="text-right">
                            <h5 className="main-color">{val}%</h5> 
                          </IonCol>
            </IonRow>     
      )

      
      
  } 

  render(){
    const {SECTOR_AND_PERCENTAGE_DICT} = this.state;

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
              <IonLabel color="primary">Diversification</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="">
              <IonLabel>Stocks<span className="button-inner"> *</span></IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="map">
              <IonLabel>Return</IonLabel>
            </IonSegmentButton>
          </IonSegment>
            </IonCol>
          </IonRow>
    
          <IonItem className="cus-input1 mb-12 mt-22">
            <IonCol className=" f-14" size="6">
              <p>Investment Value</p>
            </IonCol>
            <IonCol size="6" className="text-right">
              <h5 className="main-color">₹ {this.state.BuyFlagCalculationAPI["total_investment"]}</h5> 
            </IonCol>
          </IonItem>
          <IonItem className="cus-input1 mb-12">
            <IonCol className=" f-14" size="6">
              <p>Number of stocks</p>
            </IonCol>
            <IonCol size="6" className="text-right">
              <h5 className="main-color">{this.state.BuyFlagCalculationAPI["number_of_stock"]}</h5> 
            </IonCol>
          </IonItem>
          
  
          <IonItem className="cus-input1 mb-12">
            <IonGrid>
              <IonRow className="bb">
                <IonCol className=" f-14" size="10">
                  <p className="b-500">Market Cap Diversification</p>
                </IonCol>
                <IonCol size="2" className="text-right pt-7">
                  <img className="r-90" src="https://i.postimg.cc/wBxFgPLD/Path-225.png" alt=""></img>
                </IonCol>
              </IonRow>
             
                <Doughnut
                  data={this.state.chartData}
                  options={{
                    title:{
                      display:true,
                      text:'',
                      fontSize:5
                    },
                    legend:{
                      display:false,
                      position:'right'
                    }
                  }}
                />
              
              <IonRow className="bb">
                <IonCol size="1">
                  <img className="svg1" src="/assets/icon/yellow.svg" alt=""></img>                   
                </IonCol>
                <IonCol className=" f-14" size="5">
                  <p className="">Large Cap</p>
                </IonCol>
                <IonCol size="6" className="text-right">
                  <h5 className="main-color">{this.state.MarketCapWiseDiversificationAPI["LargeCap"]}%</h5> 
                </IonCol>
              </IonRow>
              <IonRow className="bb">
                <IonCol size="1">
                  <img className="svg1 svg2" src="/assets/icon/skublue.png" alt=""></img>                
                </IonCol> 
                <IonCol className=" f-14" size="5">
                  <p className="">Medium Cap</p>
                </IonCol>
                <IonCol size="6" className="text-right">
                  <h5 className="main-color">{this.state.MarketCapWiseDiversificationAPI["MidCap"]}%</h5> 
                </IonCol>
              </IonRow>
              <IonRow className="">
                <IonCol size="1">
                  <img className="svg1" src="/assets/icon/blue.svg" alt=""></img>                
                </IonCol>
                <IonCol className=" f-14" size="5">
                  <p className="">Small Cap</p>
                </IonCol>
                <IonCol size="6" className="text-right">
                  <h5 className="main-color">{this.state.MarketCapWiseDiversificationAPI["SmallCap"]}%</h5> 
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
  
          <IonItem className="cus-input1 mb-12">
            <IonGrid>

                <IonRow className="bb">
                  <IonCol className=" f-14" size="10">
                    <p className="b-500">Sector Allocation</p>
                  </IonCol>
                  <IonCol size="2" className="text-right pt-7">
                    <img className="r-90" src="https://i.postimg.cc/wBxFgPLD/Path-225.png" alt=""></img>
                  </IonCol>
                </IonRow>

               
               {Object.keys(SECTOR_AND_PERCENTAGE_DICT).map((key: any) => this.renderSectors(key, SECTOR_AND_PERCENTAGE_DICT[key]))}
              
               {/*  {this.state.sectors.map((art: any) => this.renderSectors(art))}  */}
              
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
            <IonRow  className="jc-footer ">
              <p className=" mt-5px ft-13">Restructure</p>
            </IonRow>
          </IonCol>
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/ale.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow  className="jc-footer ">
              <p className=" mt-5px ft-13">Alerts</p>
            </IonRow>
          </IonCol>
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/res.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow  className="jc-footer ">
            <p className=" mt-5px ft-13">My Portfolio</p>
            </IonRow>
          </IonCol>
        </IonGrid>
    </IonFooter>
  
      </IonPage>
      );

  }
    
}
  
    //export default Page;




/*
    {vals} extracts out the vals property from an object. 
    Hence Object.keys({vals}) is incorrect as vals is already an object. 
    Likewise, it should be {vals[key]} instead of {vals[{key}]}.

    render(){
      const {vals} = this.state;  // Essentially does: const vals = this.state.vals;
      return (
        <div>
          {
            Object.keys(vals).map((key, index) => ( 
              <p key={index}> this is my key {key} and this is my value {vals[key]}</p> 
            ))
          }
        </div>
      )
    }

    If vals is an object containing { a: 1, b: 2}, 
    Object.keys(vals) will get you ['a', 'b'] and in the first iteration of the map, 
    key will be 'a' and to access the value, do vals[key] which is essentially vals['a'] => 1.

    I think you are confused by the Object destructuring syntax. 
    It's really quite simple as it's just syntactic sugar over ES5 JavaScript (most ES6 is just sugar). 
    Have a read at MDN's docs on Destructuring assignment to understand it better.
*/