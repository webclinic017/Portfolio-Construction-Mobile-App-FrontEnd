import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton,
IonItem, IonRow, IonCol, IonFooter,
IonGrid} from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from "react-router-dom";
import './Page7.css';
import {Doughnut} from 'react-chartjs-2';
import axios from 'axios';

export default class Page extends React.Component<RouteComponentProps<{}>,any> {
  interval: ReturnType<typeof setTimeout> = setTimeout(() => '', 1000);

  constructor(props: RouteComponentProps<{}>)
  {
    super(props);
    this.state = {

     CHECKUSER : 0,
     response_from_ExistingPortfolioAPI: 0,
     
     complete_sell_nifty_bees_l_c : [],
     complete_sell_nifty_bees_m_c : [],
     complete_sell_nifty_bees_s_c : [],
     
     COMPLETE_SELL_LARGE_CAP : [],
     COMPLETE_SELL_MID_CAP : [],
     COMPLETE_SELL_SMALL_CAP : [], 
     counter_for_complete_sell : 0,


     REBALANCE_LARGE_CAP : [],
     REBALANCE_MID_CAP : [],
     REBALANCE_SMALL_CAP : [],
     count_for_rebalance : 0,


     FIRST_TIME_LARGE_CAP_PORFOLIO_FRESH_BUY:[],
     FIRST_TIME_MID_CAP_PORFOLIO_FRESH_BUY:[],
     FIRST_TIME_SMALL_CAP_PORFOLIO_FRESH_BUY:[],
     first_time_count_for_fresh_buy:0,


     EVERYDAY_LARGE_CAP_PORFOLIO_FRESH_BUY:[],
     EVERYDAY_MID_CAP_PORFOLIO_FRESH_BUY:[],
     EVERYDAY_SMALL_CAP_PORFOLIO_FRESH_BUY:[],
     everyday_count_for_fresh_buy:0,








     
      chartData:{},
      
      Total_Portfolio_value: 0, 
      Overall_Gain: 0, 
      Equity_Profit_Percent: 0, 

      Fixed_Income_Profit_Percent: 0,
      Equity_Investment_Amount: 0, 
      Equity_Overall_Profit: 0, 
      Equity_Weightage: 0,
      Fixed_Income_Investment_Amount: 0, 
      Fixed_Income_Overall_Profit: 0, 
      Fixed_Income_Weightage: 0,

      actionPending: false,
      actionPendingCount: 0,

      actionPendingFI: false,
      actionPendingCountFI: 0


    }
  }

  checkUser() {

    axios.get('http://127.0.0.1:8000/checkingnewuserexistinguser/',{
          headers: {
            'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`
          }
        }
      )
      .then(response =>{
        console.log(response)
        this.setState({CHECKUSER : response.data['Whether_NewUSer_Or_ExistingPortfolioUser']})




        if (this.state.CHECKUSER === 'new_user_without_portfolio') {

          axios.get('http://127.0.0.1:8000/finalportfoliooutputfornewuser/',{
              headers: {
                'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`
              }
            }
          )
          .then(response =>{
            console.log(response)
            this.setState({FIRST_TIME_LARGE_CAP_PORFOLIO_FRESH_BUY : response.data['large_cap_portfolio_list']})
            this.setState({FIRST_TIME_MID_CAP_PORFOLIO_FRESH_BUY : response.data['mid_cap_portfolio_list']})
            this.setState({FIRST_TIME_SMALL_CAP_PORFOLIO_FRESH_BUY : response.data['small_cap_portfolio_list']})
            this.setState({first_time_count_for_fresh_buy : this.state.FIRST_TIME_LARGE_CAP_PORFOLIO_FRESH_BUY.length + this.state.FIRST_TIME_MID_CAP_PORFOLIO_FRESH_BUY.length + this.state.FIRST_TIME_SMALL_CAP_PORFOLIO_FRESH_BUY.length})
            
            if (this.state.first_time_count_for_fresh_buy !== 0) {
              this.setState({actionPending: true})
              this.setState({actionPendingCount: this.state.first_time_count_for_fresh_buy})
            }

          })
          .catch(error => {
            console.log(error)
          })

  
  
      }

        else if (this.state.CHECKUSER === 'user_without_portfolio_already_existing') {
              this.dataFetchForUserWithoutPortfolio();
              this.dataFetchForUserWithoutPortfolioFixedIncome();
        }

        else if (this.state.CHECKUSER === 'new_user_with_portfolio') {

                  axios.get('http://127.0.0.1:8000/existingportfolioupload/',{
                        headers: {
                          'Authorization': `Token fee90488ee134b4f0596b998fc57c33ebd358f5a`
                        }
                      }
                    )
                    .then(response =>{
                      console.log(response)
                      this.setState({response_from_ExistingPortfolioAPI : response.data['response_from_ExistingPortfolioAPI']})

                      if (this.state.response_from_ExistingPortfolioAPI === 1) {

                        axios.get('http://127.0.0.1:8000/portfolioaction/',{
                          headers: {
                            'Authorization': `Token fee90488ee134b4f0596b998fc57c33ebd358f5a`
                          }
                        }
                        )
                        .then(response =>{
                          console.log(response)
                          this.setState({FIRST_TIME_LARGE_CAP_PORFOLIO_FRESH_BUY : response.data['fresh_buy_large_cap_list']})
                          this.setState({FIRST_TIME_MID_CAP_PORFOLIO_FRESH_BUY : response.data['fresh_buy_mid_cap_list']})
                          this.setState({FIRST_TIME_SMALL_CAP_PORFOLIO_FRESH_BUY : response.data['fresh_buy_small_cap_list']})
                          this.setState({first_time_count_for_fresh_buy : this.state.FIRST_TIME_LARGE_CAP_PORFOLIO_FRESH_BUY.length + this.state.FIRST_TIME_MID_CAP_PORFOLIO_FRESH_BUY.length + this.state.FIRST_TIME_SMALL_CAP_PORFOLIO_FRESH_BUY.length})
  
                          this.setState({COMPLETE_SELL_LARGE_CAP : response.data['complete_sell_largecap_stock_list']})
                          this.setState({COMPLETE_SELL_MID_CAP : response.data['complete_sell_midcap_stock_list']})
                          this.setState({COMPLETE_SELL_SMALL_CAP : response.data['complete_sell_smallcap_stock_list']})
                          this.setState({counter_for_complete_sell : this.state.COMPLETE_SELL_LARGE_CAP.length + this.state.COMPLETE_SELL_MID_CAP.length + this.state.COMPLETE_SELL_SMALL_CAP.length})
  
                          if (this.state.first_time_count_for_fresh_buy !== 0 || this.state.counter_for_complete_sell !== 0 ) {
                            this.setState({actionPending: true})
                            this.setState({actionPendingCount: this.state.first_time_count_for_fresh_buy + this.state.counter_for_complete_sell})
                          }
                  
                        })
                        .catch(error => {
                          console.log(error)
                        })
  
                    }
                })
                .catch(error => {
                    console.log(error)
                })



                    

          }

          else if (this.state.CHECKUSER === 'user_with_portfolio_already_existing') {
            this.dataFetchForUserWithPortfolioEveryDay();
            this.dataFetchForUserWithPortfolioEveryDayFixedIncome();

          }



        })
      .catch(error => {
        console.log(error)
      })


  }


  dataFetchForUserWithoutPortfolio() {
    
    axios.get('http://127.0.0.1:8000/everydayfirsttimeuserportfolioreconstruction/',{
          headers: {
            'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`
          }
        }
      )
      .then(response =>{
        console.log(response)
        this.setState({COMPLETE_SELL_LARGE_CAP : response.data['complete_sell_large_cap']})
        this.setState({COMPLETE_SELL_MID_CAP : response.data['complete_sell_mid_cap']})
        this.setState({COMPLETE_SELL_SMALL_CAP : response.data['complete_sell_small_cap']})

        this.setState({complete_sell_nifty_bees_l_c : response.data['complete_sell_nifty_bees_l_c']})
        this.setState({complete_sell_nifty_bees_m_c : response.data['complete_sell_nifty_bees_m_c']})
        this.setState({complete_sell_nifty_bees_s_c : response.data['complete_sell_nifty_bees_s_c']})
        this.setState({counter_for_complete_sell : this.state.COMPLETE_SELL_LARGE_CAP.length + this.state.COMPLETE_SELL_MID_CAP.length + this.state.COMPLETE_SELL_SMALL_CAP.length + this.state.complete_sell_nifty_bees_l_c.length + this.state.complete_sell_nifty_bees_m_c.length + this.state.complete_sell_nifty_bees_s_c.length})
        

        this.setState({REBALANCE_LARGE_CAP : response.data['rebalance_large_cap']})
        this.setState({REBALANCE_MID_CAP : response.data['rebalance_mid_cap']})
        this.setState({REBALANCE_SMALL_CAP : response.data['rebalance_small_cap']})
        this.setState({count_for_rebalance : this.state.REBALANCE_LARGE_CAP.length + this.state.REBALANCE_MID_CAP.length + this.state.REBALANCE_SMALL_CAP.length})

        
        this.setState({EVERYDAY_LARGE_CAP_PORFOLIO_FRESH_BUY : response.data['everyday_large_cap_fresh_buy']})
        this.setState({EVERYDAY_MID_CAP_PORFOLIO_FRESH_BUY : response.data['everyday_mid_cap_fresh_buy']})
        this.setState({EVERYDAY_SMALL_CAP_PORFOLIO_FRESH_BUY : response.data['everyday_small_cap_fresh_buy']})
        
        this.setState({everyday_count_for_fresh_buy : this.state.EVERYDAY_LARGE_CAP_PORFOLIO_FRESH_BUY.length + this.state.EVERYDAY_MID_CAP_PORFOLIO_FRESH_BUY.length + this.state.EVERYDAY_SMALL_CAP_PORFOLIO_FRESH_BUY.length })
        
        if (this.state.counter_for_complete_sell !== 0 || this.state.count_for_rebalance !== 0 || this.state.everyday_count_for_fresh_buy !== 0 ) {
          this.setState({actionPending: true})
          this.setState({actionPendingCount: this.state.counter_for_complete_sell + this.state.count_for_rebalance + this.state.everyday_count_for_fresh_buy })
        }
        console.log(this.state.actionPending)
        console.log(this.state.actionPendingCount)
      })
      .catch(error => {
        console.log(error)
      })

  }



  dataFetchForUserWithoutPortfolioFixedIncome() {
        axios.get('http://127.0.0.1:8000/everdayuserwithoutportfoliofixedincome/',{
          headers: {
            'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`
           }
          }
        )
        .then(response =>{
          console.log(response)
          this.setState({COMPLETE_SELL_FIXED_INCOME : response.data['complete_sell']})
          this.setState({REBALANCE_FIXED_INCOME : response.data['rebalance']})
          this.setState({EVERYDAY_FIXED_INCOME_FRESH_BUY : response.data['everyday_fresh_buy']})
          this.setState({ADD_FIXED_INCOME : response.data['add']})

          this.setState({counter_for_complete_sell : this.state.COMPLETE_SELL_FIXED_INCOME.length })
          this.setState({count_for_rebalance : this.state.REBALANCE_FIXED_INCOME.length })
          this.setState({everyday_count_for_fresh_buy : this.state.EVERYDAY_FIXED_INCOME_FRESH_BUY.length })
          this.setState({counter_for_add_fixed_income : this.state.ADD_FIXED_INCOME.length })

          if (this.state.counter_for_complete_sell !== 0 || this.state.count_for_rebalance !== 0 || this.state.everyday_count_for_fresh_buy !== 0 || this.state.counter_for_add_fixed_income !== 0 ) {
            this.setState({actionPendingFI: true})
            this.setState({actionPendingCountFI: this.state.counter_for_complete_sell + this.state.count_for_rebalance + this.state.everyday_count_for_fresh_buy + this.state.counter_for_add_fixed_income })
          }
          
        })
        .catch(error => {
          console.log(error)
      })
  }



  dataFetchForUserWithPortfolioEveryDay() {

    axios.get('http://127.0.0.1:8000/everydayexistinguserportfolioreconstruction/',{
          headers: {
            'Authorization': `Token fee90488ee134b4f0596b998fc57c33ebd358f5a`
          }
        }
      )
      .then(response =>{
        console.log(response)
        this.setState({COMPLETE_SELL_LARGE_CAP : response.data['complete_sell_large_cap_existing_portfolio_everyday']})
        this.setState({COMPLETE_SELL_MID_CAP : response.data['complete_sell_mid_cap_existing_portfolio_everyday']})
        this.setState({COMPLETE_SELL_SMALL_CAP : response.data['complete_sell_small_cap_existing_portfolio_everyday']})

        this.setState({complete_sell_nifty_bees_l_c : response.data['complete_sell_nifty_bees_l_c']})
        this.setState({complete_sell_nifty_bees_m_c : response.data['complete_sell_nifty_bees_m_c']})
        this.setState({complete_sell_nifty_bees_s_c : response.data['complete_sell_nifty_bees_s_c']})
        this.setState({counter_for_complete_sell : this.state.COMPLETE_SELL_LARGE_CAP.length + this.state.COMPLETE_SELL_MID_CAP.length + this.state.COMPLETE_SELL_SMALL_CAP.length + this.state.complete_sell_nifty_bees_l_c.length + this.state.complete_sell_nifty_bees_m_c.length + this.state.complete_sell_nifty_bees_s_c.length})
        

        this.setState({REBALANCE_LARGE_CAP : response.data['rebalance_largecap_stock_list']})
        this.setState({REBALANCE_MID_CAP : response.data['rebalance_midcap_stock_list']})
        this.setState({REBALANCE_SMALL_CAP : response.data['rebalance_smallcap_stock_list']})
        this.setState({count_for_rebalance : this.state.REBALANCE_LARGE_CAP.length + this.state.REBALANCE_MID_CAP.length + this.state.REBALANCE_SMALL_CAP.length})

        
        this.setState({EVERYDAY_LARGE_CAP_PORFOLIO_FRESH_BUY : response.data['everyday_large_cap_fresh_buy_existing_portfolio']})
        this.setState({EVERYDAY_MID_CAP_PORFOLIO_FRESH_BUY : response.data['everyday_mid_cap_fresh_buy_existing_portfolio']})
        this.setState({EVERYDAY_SMALL_CAP_PORFOLIO_FRESH_BUY : response.data['everyday_small_cap_fresh_buy_existing_portfolio']})
        
        this.setState({everyday_count_for_fresh_buy : this.state.EVERYDAY_LARGE_CAP_PORFOLIO_FRESH_BUY.length + this.state.EVERYDAY_MID_CAP_PORFOLIO_FRESH_BUY.length + this.state.EVERYDAY_SMALL_CAP_PORFOLIO_FRESH_BUY.length })
        
        if (this.state.counter_for_complete_sell !== 0 || this.state.count_for_rebalance !== 0 || this.state.everyday_count_for_fresh_buy !== 0 ) {
          this.setState({actionPending: true})
          this.setState({actionPendingCount: this.state.counter_for_complete_sell + this.state.count_for_rebalance + this.state.everyday_count_for_fresh_buy })
        }

      })
      .catch(error => {
        console.log(error)
      })

  }


  dataFetchForUserWithPortfolioEveryDayFixedIncome() {

    axios.get('http://127.0.0.1:8000/everdayuserwithportfoliofixedincome/',{
                      headers: {
                        'Authorization': `Token fee90488ee134b4f0596b998fc57c33ebd358f5a`
                      }
                    }
                  )
                  .then(response =>{
                    console.log(response)
                    this.setState({COMPLETE_SELL_FIXED_INCOME : response.data['complete_sell']})
                    this.setState({REBALANCE_FIXED_INCOME : response.data['rebalance']})
                    this.setState({EVERYDAY_FIXED_INCOME_FRESH_BUY : response.data['everyday_fresh_buy']})
                    this.setState({ADD_FIXED_INCOME : response.data['add']})

                    this.setState({counter_for_complete_sell : this.state.COMPLETE_SELL_FIXED_INCOME.length })
                    this.setState({count_for_rebalance : this.state.REBALANCE_FIXED_INCOME.length })
                    this.setState({everyday_count_for_fresh_buy : this.state.EVERYDAY_FIXED_INCOME_FRESH_BUY.length })
                    this.setState({counter_for_add_fixed_income : this.state.ADD_FIXED_INCOME.length })

                    if (this.state.counter_for_complete_sell !== 0 || this.state.count_for_rebalance !== 0 || this.state.everyday_count_for_fresh_buy !== 0 || this.state.counter_for_add_fixed_income !== 0 ) {
                      this.setState({actionPendingFI: true})
                      this.setState({actionPendingCountFI: this.state.counter_for_complete_sell + this.state.count_for_rebalance + this.state.everyday_count_for_fresh_buy + this.state.counter_for_add_fixed_income })
                    }
                    
                  })
                  .catch(error => {
                    console.log(error)
                })

  }

  componentDidMount() {


    this.checkUser();
    
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

      this.datafetch()
      this.interval = setInterval(() => {this.datafetch();}, 60000);

    
  }

  datafetch(){
   
    axios.get('http://127.0.0.1:8000/myportfolio/',{
                      headers: {
                        'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`
                      }
                    }
                  )
                  .then(response =>{
                    console.log(response)
                    this.setState({Total_Portfolio_value : response.data['Total_Portfolio_value']})
                    this.setState({Overall_Gain : response.data['Overall_Gain']})
                    this.setState({Equity_Profit_Percent : response.data['Equity_Profit_Percent']})

                    this.setState({Fixed_Income_Profit_Percent : response.data['Fixed_Income_Profit_Percent']})
                    this.setState({Equity_Investment_Amount : response.data['Equity_Investment_Amount']})
                    this.setState({Equity_Overall_Profit : response.data['Equity_Overall_Profit']})
                    this.setState({Equity_Weightage : response.data['Equity_Weightage']})
                    this.setState({Fixed_Income_Investment_Amount : response.data['Fixed_Income_Investment_Amount']})
                    this.setState({Fixed_Income_Overall_Profit : response.data['Fixed_Income_Overall_Profit']})
                    this.setState({Fixed_Income_Weightage : response.data['Fixed_Income_Weightage']})
                  })
                  .catch(error => {
                    console.log(error)
                  })

  }

  componentWillUnmount() {
    clearInterval(this.interval);
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

  render() {

    let {actionPending} = this.state
    let {actionPendingFI} = this.state

    const displayActionPending = () => {
    if(actionPending) {
      return (
        
        <div>

          <img src="/assets/icon/error1.svg" className="pxl-10" alt=""></img>

          <IonItem className="cus-input1 mb-12 mt-5 red-bd" onClick={()=> { console.log("OK"); this.props.history.push('/page50/Page50'); } }>

            <IonCol className="d-flex f-14" size="6">
              <p className="danger-color">Actions pending </p>
            </IonCol>
            <IonCol size="6" className="text-right">
                    <h5 className="danger-color">{this.state.actionPendingCount}</h5>
            </IonCol>
            
          </IonItem>

        </div>
          

      
      )
      
    }

  }


  const viewPortfolioEquity = () => {
    if(actionPending) {
      return (
        
        <IonRow className="">
              <IonCol className=" f-14 text-center" size="12">
                <p className="main-color" onClick={()=> { console.log("OK"); this.props.history.push('/page48/Page48'); } }
                  ><u>View Portfolio</u></p>
              </IonCol>

        </IonRow>
        
      
      )
      
    }
    else {

      return (
        <IonRow className="">
          <IonCol className=" f-14 text-center" size="12">
            <p className="main-color" onClick={()=> { console.log("OK"); this.props.history.push('/page14/Page14'); } }
              ><u>View Portfolio</u></p>
          </IonCol>

        </IonRow>
      )
      

    }

  }

  const viewPortfolioFixedIncome = () => {
    if(actionPendingFI) {
      return (
        
        <IonRow className="">
              <IonCol className=" f-14 text-center" size="12">
                <p className="main-color" onClick={()=> { console.log("OK"); this.props.history.push('/page51/Page51'); } }
                  ><u>View Portfolio</u></p>
              </IonCol>

        </IonRow>
        
      
      )
      
    }
    else {

      return (
        <IonRow className="">
          <IonCol className=" f-14 text-center" size="12">
            <p className="main-color" onClick={()=> { console.log("OK"); this.props.history.push('/page12/Page12'); } }
              ><u>View Portfolio</u></p>
          </IonCol>

        </IonRow>
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
            <IonTitle className="header-bag">
    
            </IonTitle>
          </IonToolbar>
        </IonHeader>
    
        <IonContent>
          <img src="/assets/icon/port.svg" className="" alt=""></img>
    
          <IonItem className="cus-input1 mb-12">
              <IonGrid>
    
                <IonRow className="">
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
                </IonRow>
              </IonGrid>
            </IonItem>
            {
              displayActionPending()
            }
	      
          <IonItem className="cus-input1 mb-12 mt-5">
    
            <IonCol className="d-flex f-14" size="6">
              <p>Total portfolio value </p>
            </IonCol>
            <IonCol size="6" className="text-right">
              <h5 className="main-color">₹{this.state.Total_Portfolio_value}</h5>
            </IonCol>
          </IonItem>
          <IonItem className="cus-input1 mb-12 mt-5">
    
            <IonCol className="d-flex f-14" size="6">
              <p>Overall Gain</p>
            </IonCol>
            <IonCol size="6" className="text-right">
              <h5 className="main-color">₹{this.state.Overall_Gain}</h5>
            </IonCol>
          </IonItem>
    
    
          <IonItem className="cus-input1 mb-12 mt-5">
            <IonGrid>
              <IonRow>
              <IonCol size="1">
                    <img className="svg1" src="/assets/icon/yellow.svg" alt=""></img>                   
                  </IonCol>
                <IonCol className="bb f-14 b-500" size="7">
                  <p>Equity</p>
                </IonCol>
                <IonCol className="bb main-color  b-500 text-right" size="4">
                  <p>{this.state.Equity_Profit_Percent}%</p>
                </IonCol>
    
              </IonRow>
              <IonRow className="bb">
                <IonCol className=" f-14" size="8">
                  <p>Investment Amount</p>
                </IonCol>
                <IonCol size="4" className="text-right">
                  <h5 className="main-color">₹{this.state.Equity_Investment_Amount}</h5>
                </IonCol>
              </IonRow>
             
              <IonRow className="bb">
                <IonCol className=" f-14" size="8">
                  <p>Overall Profit</p>
                </IonCol>
                <IonCol size="4" className="text-right">
                  <h5 className="main-color">₹{this.state.Equity_Overall_Profit}</h5>
                </IonCol>
              </IonRow>
              <IonRow className="bb">
                <IonCol className=" f-14" size="8">
                  <p>Weightage</p>
                </IonCol>
                <IonCol size="4" className="text-right">
                  <h5 className="main-color">{this.state.Equity_Weightage}%</h5>
                </IonCol>
              </IonRow>
              {
                viewPortfolioEquity()
              }
    
            </IonGrid>
          </IonItem>
          <IonItem className="cus-input1 mb-12 mt-5">
            <IonGrid>
              <IonRow>
              <IonCol size="1">
                    <img className="svg1" src="/assets/icon/blue.svg" alt=""></img>                   
                  </IonCol>
                <IonCol className="bb f-14 b-500" size="7">
                  <p>Fixed Income</p>
                </IonCol>
                <IonCol className="bb main-color  b-500 text-right" size="4">
                  <p>{this.state.Fixed_Income_Profit_Percent}%</p>
                </IonCol>          </IonRow>
              <IonRow className="bb">
                <IonCol className=" f-14" size="8">
                  <p>Investment Amount</p>
                </IonCol>
                <IonCol size="4" className="text-right f-14">
                  <p className="">{this.state.Fixed_Income_Investment_Amount} </p>
                </IonCol>
              </IonRow>
              <IonRow className="bb">
                <IonCol className=" f-14" size="8">
                  <p>Overall Profit</p>
                </IonCol>
                <IonCol size="4" className="text-right f-14">
                  <p className="">{this.state.Fixed_Income_Overall_Profit} </p>
                </IonCol>
              </IonRow>
              <IonRow  className="bb">
                <IonCol className=" f-14" size="8">
                  <p>Weightage</p>
                </IonCol>
                <IonCol size="4" className="text-right f-14">
                  <p className="">{this.state.Fixed_Income_Weightage}%</p>
                </IonCol>
              </IonRow>
              {
                viewPortfolioFixedIncome()
              }  
            </IonGrid>
          </IonItem>
          <IonRow>
            <IonCol size="1"></IonCol>
            <IonCol size="5">
              <IonButton className="cus-color mt-4 w-100 pi" fill="outline">Upload Holdings</IonButton>
            </IonCol>
            <IonCol size="5">
              <IonButton className="cus-color mt-4 w-100 pi">  <img className="" src="/assets/icon/alert1.svg" alt=""></img> &nbsp;Query</IonButton>
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

