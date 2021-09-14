import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton,
IonItem, IonList, IonRow, IonCol, IonFooter,
IonGrid, IonItemSliding, IonItemOptions, IonItemOption } from '@ionic/react';
import React from 'react';

import './Page.css';
import axios from 'axios';
import { RouteComponentProps } from "react-router-dom";
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

     add_large_cap: [],
     add_mid_cap: [],
     add_small_cap: [],
     add_count:0
     





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
          
        })
        .catch(error => {
          console.log(error)
        })


    }

      else if (this.state.CHECKUSER === 'user_without_portfolio_already_existing') {

        /*const currentTime = new Date().getTime();  //current unix timestamp
        const execTime = new Date().setHours(20,0,0,0);  //API call time = today at 20:00
        let timeLeft;
        if(currentTime < execTime) {
          //it's currently earlier than 20:00
          timeLeft = execTime - currentTime;
        } else {
          //it's currently later than 20:00, schedule for tomorrow at 20:00
          timeLeft = execTime + 86400000 - currentTime
        }*/

        /*
        setTimeout(function() { setInterval(function() {  //your code }, 86400000);  //repeat every 24h }, timeLeft);  //wait until 20:00 as calculated above
        */

        this.dataFetchForUserWithoutPortfolio();
        
        //this.interval = setTimeout(() => {setInterval(() => {this.dataFetch();}, 86400000);}, timeLeft)
        this.interval = setInterval(() => {this.dataFetchForUserWithoutPortfolio();}, 60000);

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

        /*const currentTime = new Date().getTime();  //current unix timestamp
          const execTime = new Date().setHours(20,0,0,0);  //API call time = today at 20:00
          let timeLeft;
          if(currentTime < execTime) {
            //it's currently earlier than 20:00
            timeLeft = execTime - currentTime;
          } else {
            //it's currently later than 20:00, schedule for tomorrow at 20:00
            timeLeft = execTime + 86400000 - currentTime
          }*/

          /*
          setTimeout(function() { setInterval(function() {  //your code }, 86400000);  //repeat every 24h }, timeLeft);  //wait until 20:00 as calculated above
          */

        this.dataFetchForUserWithPortfolioEveryDay();
          
        //this.interval = setTimeout(() => {setInterval(() => {this.dataFetch();}, 86400000);}, timeLeft)
        this.interval = setInterval(() => {this.dataFetchForUserWithPortfolioEveryDay();}, 60000);

      }








      })
    .catch(error => {
      console.log(error)
    })


}


componentDidMount() {

  
  this.checkUser()
  

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
      
      
      this.setState({add_large_cap : response.data['add_large_cap']})
      this.setState({add_mid_cap : response.data['add_mid_cap']})
      this.setState({add_small_cap : response.data['add_small_cap']})
      
      this.setState({add_count : this.state.add_large_cap.length + this.state.add_mid_cap.length + this.state.add_small_cap.length })
      

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
      
      this.setState({add_large_cap : response.data['add_large_cap']})
      this.setState({add_mid_cap : response.data['add_mid_cap']})
      this.setState({add_small_cap : response.data['add_small_cap']})
      
      this.setState({add_count : this.state.add_large_cap.length + this.state.add_mid_cap.length + this.state.add_small_cap.length })

    })
    .catch(error => {
      console.log(error)
    })

}


componentWillUnmount() {
  clearInterval(this.interval);
}


renderPortfolio(m: any) {
  return (

        <IonItemSliding>
          <IonItem className="cus-input1 mb-12 d-flex">
            <IonRow className="w-100">

              <IonCol className="company-logo" size="1">
                <img className="logo-11" src="/assets/icon/Canera.png" alt=""></img>
              </IonCol>
              <IonCol className="" size="8">
                <button className=" f-14 long-text b-500 mt-5" id="tool-tip" color="light">{m.stock_name}</button><br />
                <p className="ft-12">Buy At : ₹{m.price} | Buy Quantity : {m.stock_quantity}</p>
              </IonCol>
              <IonCol size="3" className="text-right">
                <img className="logo-13" src="/assets/icon/navigate.svg" alt=""></img>
              </IonCol>
            </IonRow>
          </IonItem>
          <IonItemOptions side="end" className="h-83">
                                      <IonItemOption onClick={()=> console.log('unread clicked')}>View More</IonItemOption>


          </IonItemOptions>
        </IonItemSliding>
  )
    

}

renderCompleteSell(m: any) {

return (

  <IonItemSliding>
            <IonItem className="cus-input1 mb-12 d-flex">
              <IonRow className="w-100">
  
                <IonCol className="company-logo" size="1">
                  <img className="logo-11" src="/assets/icon/Canera.png" alt=""></img>
                </IonCol>
                <IonCol className="" size="8">
                  <button className=" f-14 long-text b-500 mt-5" id="tool-tip" color="light">{m.stock_name}</button><br />
                  <p className="ft-12">Sell At : ₹{m.price} | Sell Quantity : {m.stock_quantity}</p>
                </IonCol>
                <IonCol size="3" className="text-right">
                  <img className="logo-13" src="/assets/icon/navigate.svg" alt=""></img>
                </IonCol>
              </IonRow>
            </IonItem>
            <IonItemOptions side="end" className="h-83">
                                        <IonItemOption onClick={()=> console.log('unread clicked')}>View More</IonItemOption>
  
  
            </IonItemOptions>
  </IonItemSliding>

)

}

renderRebalance(m: any) {

return(

  <IonItemSliding>
            <IonItem className="cus-input1 mb-12 d-flex">
              <IonRow className="w-100">
  
                <IonCol className="company-logo" size="1">
                  <img className="logo-11" src="/assets/icon/Canera.png" alt=""></img>
                </IonCol>
                <IonCol className="" size="9">
                  <button className=" f-14 long-text b-500 mt-5" id="tool-tip" color="light">{m.stock_name}</button><br />
                  <p className="ft-12">Sell At : ₹{m.price} | Sell Quantity : {m.stock_quantity}</p>
                </IonCol>
                <IonCol size="2" className="text-right">
                  <img className="logo-13" src="/assets/icon/navigate.svg" alt=""></img>
                </IonCol>
              </IonRow>
            </IonItem>
            <IonItemOptions side="end" className="h-83">
                                        <IonItemOption onClick={()=> console.log('unread clicked')}>View More</IonItemOption>
  
  
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
        <img src="/assets/icon/mm.svg" className="" alt=""></img>
    
    
        <IonRow className="px-70">
          <IonCol size="6" className="segment3-bg pl-0">
            <button className="ft-12 cus-button3 ">Stocks</button>
          </IonCol>
          <IonCol size="6" className="segment2-bg pl-0">
            <button className="ft-12 cus-button4"  onClick={() => { console.log("OK"); this.props.history.push('/page41/Page41'); } }>Fixed Income</button>
          </IonCol>
        </IonRow>
        <p className="text-center f-14">Swipe left to know more</p>
        <IonList>
          <IonGrid>
            <IonRow className="w-90 ml-5">
              <IonCol className=" f-16" size="10">
                <p className="b-600">Complete Exit </p>
              </IonCol>
              <IonCol size="2" className="text-right">
                <p className="f-16 b-600"><span className="button-inner"> ({this.state.counter_for_complete_sell})</span></p>
              </IonCol>
            </IonRow>
          </IonGrid>

            {this.state.COMPLETE_SELL_LARGE_CAP.map((art: any) => { return this.renderCompleteSell(art); })}
            {this.state.COMPLETE_SELL_MID_CAP.map((art: any) => { return this.renderCompleteSell(art); })}
            {this.state.COMPLETE_SELL_SMALL_CAP.map((art: any) => { return this.renderCompleteSell(art); })}

            {this.state.complete_sell_nifty_bees_l_c.map((art: any) => { return this.renderCompleteSell(art); })}
            {this.state.complete_sell_nifty_bees_m_c.map((art: any) => { return this.renderCompleteSell(art); })}
            {this.state.complete_sell_nifty_bees_s_c.map((art: any) => { return this.renderCompleteSell(art); })}

        </IonList>

        
    
        <IonList>
          <IonGrid>
            <IonRow className="w-90 ml-5">
              <IonCol className=" f-16" size="10">
                <p className="b-600">Reduce</p>
              </IonCol>
              <IonCol size="2" className="text-right">
                <p className="f-16 b-600"><span className="button-inner"> ({this.state.count_for_rebalance})</span></p>
              </IonCol>
            </IonRow>
          </IonGrid>
            {this.state.REBALANCE_LARGE_CAP.map((art: any) => { return this.renderRebalance(art); })}
            {this.state.REBALANCE_MID_CAP.map((art: any) => { return this.renderRebalance(art); })}
            {this.state.REBALANCE_SMALL_CAP.map((art: any) => { return this.renderRebalance(art); })}
        </IonList>


    
        <IonList>
          <IonGrid>
            <IonRow className="w-90 ml-5">
              <IonCol className=" f-16" size="10">
                <p className="b-600">Add</p>
              </IonCol>
              <IonCol size="2" className="text-right">
                <p className="f-16 b-600"><span className="button-inner"> ({this.state.add_count})</span></p>
              </IonCol>
            </IonRow>
          </IonGrid>
          {this.state.add_large_cap.map((art: any) => { return this.renderPortfolio(art); })}
            {this.state.add_mid_cap.map((art: any) => { return this.renderPortfolio(art); })}
            {this.state.add_small_cap.map((art: any) => { return this.renderPortfolio(art); })}
        </IonList>



        <IonList>
          <IonGrid>
            <IonRow className="w-90 ml-5">
              <IonCol className=" f-16" size="10">
                <p className="b-600">Fresh Buy</p>
              </IonCol>
              <IonCol size="2" className="text-right">
                <p className="f-16 b-600"><span className="button-inner"> ({this.state.first_time_count_for_fresh_buy})</span></p>
              </IonCol>
            </IonRow>
          </IonGrid>
            {this.state.FIRST_TIME_LARGE_CAP_PORFOLIO_FRESH_BUY.map((art: any) => { return this.renderPortfolio(art); })}
            {this.state.FIRST_TIME_MID_CAP_PORFOLIO_FRESH_BUY.map((art: any) => { return this.renderPortfolio(art); })}
            {this.state.FIRST_TIME_SMALL_CAP_PORFOLIO_FRESH_BUY.map((art: any) => { return this.renderPortfolio(art); })}

     

            {this.state.EVERYDAY_LARGE_CAP_PORFOLIO_FRESH_BUY.map((art: any) => { return this.renderPortfolio(art); })}
            {this.state.EVERYDAY_MID_CAP_PORFOLIO_FRESH_BUY.map((art: any) => { return this.renderPortfolio(art); })}
            {this.state.EVERYDAY_SMALL_CAP_PORFOLIO_FRESH_BUY.map((art: any) => { return this.renderPortfolio(art); })}


        </IonList>

        <IonRow>
          <IonCol size="1"></IonCol>
          <IonCol size="11">
            <IonButton className="cus-color mt-4 w-90 f-15 " fill="outline"  onClick={() => { console.log("OK"); this.props.history.push('/page41/Page41'); } } >Next</IonButton>
          </IonCol>
          
        </IonRow>
      </IonContent>
    <IonFooter className="ion-no-border">
        <IonGrid className="text-center d-flex w-95 mt-10px">
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/home.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow className="jc-footer">
              <p className=" mt-5px ft-13 b-500 ft-13"onClick={() => { console.log("OK"); this.props.history.push('/page30/Page30'); } } >Home</p>
            </IonRow>
          </IonCol>
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/news.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow className="jc-footer">
              <p className=" mt-5px ft-13" onClick={() => { console.log("OK"); this.props.history.push('/page7/Page7'); } }  >My Portfolio</p>
            </IonRow>
          </IonCol>
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/res.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow className="jc-footer">
              <p className=" mt-5px ft-13"onClick={() => { console.log("OK"); this.props.history.push('/page26/Page26'); } }  >Restructure</p>
            </IonRow>
          </IonCol>
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/ale.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow className="jc-footer">
              <p className=" mt-5px ft-13"onClick={() => { console.log("OK"); this.props.history.push('/page10/Page1'); } }  >Alerts</p>
            </IonRow>
          </IonCol>
    
        </IonGrid>
      </IonFooter>
    
    </IonPage>
    );

}






};

