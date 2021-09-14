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
     
      CHECKUSER : '',
     
     
      COMPLETE_SELL_FIXED_INCOME : [],
      counter_for_complete_sell : 0,
 
 
      REBALANCE_FIXED_INCOME : [],
      count_for_rebalance : 0,
 
 
      EVERYDAY_FIXED_INCOME_FRESH_BUY:[],
      everyday_count_for_fresh_buy:0,
 
 
      FIRST_TIME_FIXED_INCOME_FRESH_BUY:[],
      first_time_count_for_fresh_buy:0,

      ADD_FIXED_INCOME: [],
      counter_for_add_fixed_income:0,
 

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

        if (this.state.CHECKUSER === 'new_user_without_portfolio' || this.state.CHECKUSER === 'new_user_with_portfolio') {

          axios.get('http://127.0.0.1:8000/userwithorwithoutportfoliofixedincome/',{
                      headers: {
                        'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`
                      }
                    }
                  )
                  .then(response =>{
                    console.log(response)
                    this.setState({FIRST_TIME_FIXED_INCOME_FRESH_BUY : response.data['fresh_buy']})
                    this.setState({first_time_count_for_fresh_buy : this.state.FIRST_TIME_FIXED_INCOME_FRESH_BUY.length })
        

                    
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


    this.checkUser();
    

  }


  dataFetchForUserWithoutPortfolio() {

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

                    
                  })
                  .catch(error => {
                    console.log(error)
                })


  }


  dataFetchForUserWithPortfolioEveryDay() {

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

                    
                  })
                  .catch(error => {
                    console.log(error)
                })

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
              <button className=" f-14 long-text b-500 mt-5" id="tool-tip" color="light">{m.name}</button><br />
              <p className="ft-12">Buy At : ₹{m.price} | Buy Quantity : {m.quantity}</p>
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
                    <button className=" f-14 long-text b-500 mt-5" id="tool-tip" color="light">{m.name}</button><br />
                    <p className="ft-12">Sell At : ₹{m.price} | Sell Quantity : {m.quantity}</p>
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
                    <button className=" f-14 long-text b-500 mt-5" id="tool-tip" color="light">{m.name}</button><br />
                    <p className="ft-12">{m.signal} At : ₹{m.price} | Reduce Quantity : {m.quantity}</p>
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
              <button className="ft-12 cus-button4 "  onClick={() => { console.log("OK"); this.props.history.push('/page39/Page39'); } }>Stocks</button>
            </IonCol>
            <IonCol size="6" className="segment2-bg pl-0">
              <button className="ft-12 cus-button3">Fixed Income</button>
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

            {this.state.COMPLETE_SELL_FIXED_INCOME.map((art: any) => { return this.renderCompleteSell(art); })}

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

            {this.state.REBALANCE_FIXED_INCOME.map((art: any) => { return this.renderRebalance(art); })}

          </IonList>
    

          <IonList>
            <IonGrid>
              <IonRow className="w-90 ml-5">
                <IonCol className=" f-16" size="10">
                  <p className="b-600">Add</p>
                </IonCol>
                <IonCol size="2" className="text-right">
                  <p className="f-16 b-600"><span className="button-inner"> ({this.state.counter_for_add_fixed_income})</span></p>
                </IonCol>
              </IonRow>
            </IonGrid>

            {this.state.ADD_FIXED_INCOME.map((art: any) => { return this.renderRebalance(art); })}

          </IonList>


          <IonList>
            <IonGrid>
              <IonRow className="w-90 ml-5">
                <IonCol className=" f-16" size="10">
                  <p className="b-600">Fresh Buy</p>
                </IonCol>
                <IonCol size="2" className="text-right">
                  <p className="f-16 b-600"><span className="button-inner"> ({this.state.everyday_count_for_fresh_buy + this.state.first_time_count_for_fresh_buy})</span></p>
                </IonCol>
              </IonRow>
            </IonGrid>

            {this.state.EVERYDAY_FIXED_INCOME_FRESH_BUY.map((art: any) => { return this.renderPortfolio(art); })}
            {this.state.FIRST_TIME_FIXED_INCOME_FRESH_BUY.map((art: any) => { return this.renderPortfolio(art); })}
            

          </IonList>

          <IonRow>
            <IonCol size="1"></IonCol>
            <IonCol size="5">
              <IonButton className="cus-color mt-4 w-90 pi f-15 " fill="outline"  onClick={() => { console.log("OK"); this.props.history.push('/page44/Page44'); } } >Execute</IonButton>
            </IonCol>
            <IonCol size="5">
              <IonButton className="cus-color mt-4 w-90 pi f-15 "  onClick={() => { console.log("OK"); this.props.history.push('/page40/Page40'); } } >Customize</IonButton>
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

