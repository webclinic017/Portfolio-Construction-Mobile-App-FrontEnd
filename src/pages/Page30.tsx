import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonRow, IonCol, IonFooter, IonGrid} from '@ionic/react';
import React from 'react';
import './Page.css';
import axios from 'axios';
import { RouteComponentProps } from "react-router-dom";
export default class Page extends React.Component<RouteComponentProps<{}>,any> {

  constructor(props: RouteComponentProps<{}>)
  {
    super(props);
    this.state = {   

      global_number_of_stocks: 0,
      
      number_of_stocks_everday_first_time_user: 0,
      number_of_stocks_finalportfoliooutputfornewuser: 0,
      number_of_stocks_everday_existing_user: 0,
      number_of_stocks_portfolioaction: 0,

      Total_Portfolio_value: 0,
      Overall_Gain: 0,

      number_of_events: 0,
      number_of_news: 0,
      username: ''

    }
  }

  datafetch(){
     
    axios.get('http://127.0.0.1:8000/rssfeedparser/',{
                      headers: {
                        'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`
                      }
                    }
                  )
                  .then(response =>{
                    console.log(response)
                    this.setState({number_of_events : response.data['Number_of_Events']})      
                    this.setState({username : response.data['username']})    
                  })
                  .catch(error => {
                    console.log(error)
                  })

    axios.get('http://127.0.0.1:8000/businessnews/',{
                    headers: {
                      'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`
                    }
                  }
                )
                .then(response =>{
                  console.log(response)
                  this.setState({number_of_news : response.data['Number_of_News']})      
             
                })
                .catch(error => {
                  console.log(error)
                })

    
    axios.get('http://127.0.0.1:8000/myportfolio/',{
                  headers: {
                    'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`
                  }
                }
              )
              .then(response =>{
                console.log(response)
                this.setState({Total_Portfolio_value : response.data['Total_Portfolio_value']})
                this.setState({Overall_Gain : response.data['Equity_Profit_Percent']})
                
              })
              .catch(error => {
                console.log(error)
              })

  } // datafetch() end

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
            this.setState({global_number_of_stocks : response.data['number_of_stocks_finalportfoliooutputfornewuser']})
            
            
          })
          .catch(error => {
            console.log(error)
          })
  
  
        }



        else if (this.state.CHECKUSER === 'user_without_portfolio_already_existing') {


          axios.get('http://127.0.0.1:8000/everydayfirsttimeuserportfolioreconstruction/',{
                headers: {
                  'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`
                }
              }
            )
            .then(response =>{
              console.log(response)
              this.setState({global_number_of_stocks : response.data['number_of_stocks_recommendation']})
              
              
            })
            .catch(error => {
              console.log(error)
            })

          

        }



        else if (this.state.CHECKUSER === 'new_user_with_portfolio') {


          axios.get('http://127.0.0.1:8000/portfolioaction/',{
              headers: {
                'Authorization': `Token fee90488ee134b4f0596b998fc57c33ebd358f5a`
              }
            }
          )
          .then(response =>{
            console.log(response)
            this.setState({global_number_of_stocks : response.data['number_of_stocks_portfolioaction']})
            
            
          })
          .catch(error => {
            console.log(error)
          })

                  

        }

        else if (this.state.CHECKUSER === 'user_with_portfolio_already_existing') {



          axios.get('http://127.0.0.1:8000/everydayexistinguserportfolioreconstruction/',{
            headers: {
              'Authorization': `Token fee90488ee134b4f0596b998fc57c33ebd358f5a`
            }
          }
        )
        .then(response =>{
          console.log(response)
          this.setState({global_number_of_stocks : response.data['number_of_stocks_everday_existing_user']})
          
          
        })
        .catch(error => {
          console.log(error)
        })

        }



        })
      .catch(error => {
        console.log(error)
      })


  } // checkUser() end
     
  componentDidMount() {
    this.datafetch();
    this.checkUser();
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
            <img src="/assets/icon/home1.svg" className="" alt=""></img>
    
            <img src="/assets/icon/mission.svg" className="px-10" alt=""></img>
            
            <IonItem className="mb-12 mt-5">
              <IonRow className="w-100">
                <IonCol className="d-flex f-14 " size="12">
                  <img src="/assets/icon/user.svg" className="px-10" alt=""></img>
                  <h6>Hello {this.state.username}, There are {this.state.global_number_of_stocks} stocks in portfolio action.</h6>
                </IonCol>
              </IonRow>
            </IonItem>
    
    
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
                <h5 className="main-color">{this.state.Overall_Gain}%</h5>
              </IonCol>
            </IonItem>
    
            <IonItem className="cus-input1 mb-12 mt-5"  onClick={()=> { console.log("OK"); this.props.history.push('/page35/Page35'); } }>
              <IonCol className="d-flex f-14" size="2">
                <img src="/assets/icon/event.svg" className="px-10" alt=""></img>
              </IonCol>
              <IonCol className="d-flex f-14" size="6">
                <p >Company Event</p>
              </IonCol>
              <IonCol size="4" className="text-right">
                <h5 className="main-color">{this.state.number_of_events}</h5>
              </IonCol>
            </IonItem>
           
            <IonItem className="cus-input1 mb-12 mt-5"   onClick={()=> { console.log("OK"); this.props.history.push('/page36/Page36'); } }>
              <IonCol className="d-flex f-14" size="2">
                <img src="/assets/icon/news1.svg" className="px-10" alt=""></img>
              </IonCol>
              <IonCol className="d-flex f-14" size="6">
                <p>Your business news</p>
              </IonCol>
              <IonCol size="4" className="text-right">
                <h5 className="main-color">{this.state.number_of_news}</h5>
              </IonCol>
    
            </IonItem>
            <IonItem className="cus-input1 mb-12 mt-5">
              <IonCol className="d-flex f-14" size="2">
                <img src="/assets/icon/blog.svg" className="px-10" alt=""></img>
              </IonCol>
              <IonCol className="d-flex f-14" size="6">
                <p>Blogs</p>
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
                  <p className=" mt-5px ft-13 b-500 ft-13" onClick={()=> { console.log("OK"); this.props.history.push('/page30/Page30'); } } >Home</p>
                </IonRow>
              </IonCol>
              <IonCol size="3">
                <IonRow className="jc-footer">
                  <img src="/assets/icon/news.svg" className="w-30" alt=""></img>
                </IonRow>
                <IonRow className="jc-footer">
                  <p className=" mt-5px ft-13" onClick={()=> { console.log("OK"); this.props.history.push('/page7/Page7'); } }
                    >My Portfolio</p>
                </IonRow>
              </IonCol>
              <IonCol size="3">
                <IonRow className="jc-footer">
                  <img src="/assets/icon/res.svg" className="w-30" alt=""></img>
                </IonRow>
                <IonRow className="jc-footer">
                  <p className=" mt-5px ft-13" onClick={()=> { console.log("OK"); this.props.history.push('/page26/Page26'); } }
                    >Restructure</p>
                </IonRow>
              </IonCol>
              <IonCol size="3">
                <IonRow className="jc-footer">
                  <img src="/assets/icon/ale.svg" className="w-30" alt=""></img>
                </IonRow>
                <IonRow className="jc-footer">
                  <p className=" mt-5px ft-13" onClick={()=> { console.log("OK"); this.props.history.push('/page10/Page1'); } }
                    >Alerts</p>
                </IonRow>
              </IonCol>
    
            </IonGrid>
          </IonFooter>
    
        </IonPage>
        );
    }

    
    
  
  
}
