import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonList, IonRow, IonCol, IonFooter,
IonGrid, IonItemSliding, IonItemOptions, IonItemOption, IonIcon} from '@ionic/react';
import React from 'react';
import './Page.css';

import axios from 'axios';
import { RouteComponentProps } from "react-router-dom";
//import { returnUpForwardOutline } from 'ionicons/icons';
export default class Page extends React.Component<RouteComponentProps<{}>,any> {

  constructor(props: RouteComponentProps<{}>)
    {
      super(props);
      this.state = {     
        Rebalancing_NinetyDay_Alert: [],

        Asset_Allocation_Update_Alert: [],
        Asset_Increased_Significantly_Alert: [],
        Asset_Decreased_Significantly_Alert: [],

        Equity_MarketCap_Allocation_Update_Alert: [],

        LargeCap_Increased_Significantly_Alert: [],
        MidCap_Increased_Significantly_Alert: [],
        SmallCap_Increased_Significantly_Alert: [],

        LargeCap_Decreased_Significantly_Alert: [],
        MidCap_Decreased_Significantly_Alert: [],
        SmallCap_Decreased_Significantly_Alert: [],
      }
    }


    datafetch(){

      axios.get('http://127.0.0.1:8000/rebalancingninetyday/',{
                        headers: {
                          'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`
                        }
                      }
                    )
                    .then(response =>{
                      console.log(response)
                      this.setState({Rebalancing_NinetyDay_Alert : response.data['Rebalancing_NinetyDay_Alert']})

                      
                    })
                    .catch(error => {
                      console.log(error)
                  })
     
      axios.get('http://127.0.0.1:8000/portfolioalertassetallocationupdate/',{
                        headers: {
                          'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`
                        }
                      }
                    )
                    .then(response =>{
                      console.log(response)
                      this.setState({Asset_Allocation_Update_Alert : response.data['Asset_Allocation_Update_Alert']})

                      
                    })
                    .catch(error => {
                      console.log(error)
                  })


      axios.get('http://127.0.0.1:8000/portfolioalertequityallocationupdate/',{
                    headers: {
                      'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`
                    }
                  }
                )
                .then(response =>{
                  console.log(response)
                  this.setState({Equity_MarketCap_Allocation_Update_Alert : response.data['Equity_MarketCap_Allocation_Update_Alert']})

                  
                })
                .catch(error => {
                  console.log(error)
              })


      axios.get('http://127.0.0.1:8000/portfolioalertassetincreasedsignificantly/',{
                    headers: {
                      'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`
                    }
                  }
                )
                .then(response =>{
                  console.log(response)
                  this.setState({Asset_Increased_Significantly_Alert : response.data['Asset_Increased_Significantly_Alert']})

                  
                })
                .catch(error => {
                  console.log(error)
              })


      
      axios.get('http://127.0.0.1:8000/portfolioalertassetdecreasedsignificantly/',{
                headers: {
                  'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`
                }
              }
            )
            .then(response =>{
              console.log(response)
              this.setState({Asset_Decreased_Significantly_Alert : response.data['Asset_Decreased_Significantly_Alert']})

              
            })
            .catch(error => {
              console.log(error)
          })




      axios.get('http://127.0.0.1:8000/portfolioalertmarketcapincreasedsignificantly/',{
                headers: {
                  'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`
                }
              }
            )
            .then(response =>{
              console.log(response)
              this.setState({LargeCap_Increased_Significantly_Alert : response.data['LargeCap_Increased_Significantly_Alert']})
              this.setState({MidCap_Increased_Significantly_Alert : response.data['MidCap_Increased_Significantly_Alert']})
              this.setState({SmallCap_Increased_Significantly_Alert : response.data['SmallCap_Increased_Significantly_Alert']})

              
            })
            .catch(error => {
              console.log(error)
          })

      axios.get('http://127.0.0.1:8000/portfolioalertmarketcapdecreasedsignificantly/',{
                headers: {
                  'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`
                }
              }
            )
            .then(response =>{
              console.log(response)
              this.setState({LargeCap_Decreased_Significantly_Alert : response.data['LargeCap_Decreased_Significantly_Alert']})
              this.setState({MidCap_Decreased_Significantly_Alert : response.data['MidCap_Decreased_Significantly_Alert']})
              this.setState({SmallCap_Decreased_Significantly_Alert : response.data['SmallCap_Decreased_Significantly_Alert']})

              
            })
            .catch(error => {
              console.log(error)
          })

    }
       
    componentDidMount() {

    
      this.datafetch()
      
    }

    renderPortfolioAlerts(m: any) {
      if (m.includes("decreased")) {

        return(

          <IonItemSliding>
    
    
              <IonItem className="cus-input1  mt-22 mx-0">
                <IonCol className="" size="2">
                  <img src="/assets/icon/warning.svg" className="" alt=""></img>
                </IonCol>
                <IonCol size="10" className="border-right-danger">
                  <p className=" f-14">{m}</p>
                  <p className="f-10">4 minutes ago</p>
                </IonCol>
    
              </IonItem>
    
              <IonItemOptions id="slide1" side="end" className="cus-input1  mt-22 mx-0 ">
                <IonItemOption onClick={()=> this.props.history.push('/page26/Page26')} className="bg-danger-color">Restructure</IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
    
            
        )

      }

      else {
        
        return(

        <IonItemSliding>
    
    
              <IonItem className="cus-input1  mt-22 mx-0">
                <IonCol className="" size="2">
                  <img src="/assets/icon/time.svg" className="" alt=""></img>
                </IonCol>
                <IonCol size="10" className="border-right">
                  <p className=" f-14">{m}</p>
                  <p className="f-10">4 minutes ago</p>
                </IonCol>
              </IonItem>
    
              <IonItemOptions id="slide1" side="end" className="cus-input1  mt-22 mx-0">
                <IonItemOption onClick={()=> console.log('unread clicked')}>Restructure</IonItemOption>
              </IonItemOptions>
        </IonItemSliding>

      )

    }
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
          <img src="/assets/icon/Alert.svg" className="" alt=""></img>
    
          <IonList>
            

       
            {/*<IonItemSliding>
    
    
              <IonItem className="cus-input1  mt-22 mx-0">
                <IonCol className="" size="2">
                  <img src="/assets/icon/time.svg" className="" alt=""></img>
                </IonCol>
                <IonCol size="10" className="border-right">
                  <p className=" f-14">It has been 90 days since your last portfolio re-balancing kindly restrcture your
                    portfolio for maximum return</p>
                  <p className="f-10">4 minutes ago</p>
                </IonCol>
              </IonItem>
    
              <IonItemOptions id="slide1" side="end" className="cus-input1  mt-22 mx-0">
                <IonItemOption onClick={()=> console.log('unread clicked')}>Restrcture</IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
    
            <IonItemSliding>
    
    
              <IonItem className="cus-input1  mt-22 mx-0">
                <IonCol className="" size="2">
                  <img src="/assets/icon/chart.svg" className="" alt=""></img>
                </IonCol>
                <IonCol size="10" className="border-right">
                  <p className=" f-14">The market data suggest that your asset allocation needs to change kindly restrcture
                  </p>
                  <p className="f-10">4 minutes ago</p>
                </IonCol>
    
              </IonItem>
    
              <IonItemOptions id="slide1" side="end" className="cus-input1  mt-22 mx-0">
                <IonItemOption onClick={()=> console.log('unread clicked')}>Restrcture</IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
            <IonItemSliding>
    
    
              <IonItem className="cus-input1  mt-22 mx-0">
                <IonCol className="" size="2">
                  <img src="/assets/icon/warning.svg" className="" alt=""></img>
                </IonCol>
                <IonCol size="10" className="border-right-danger">
                  <p className=" f-14">The market data suggest that your asset allocation needs to change kindly restrcture
                  </p>
                  <p className="f-10">4 minutes ago</p>
                </IonCol>
    
              </IonItem>
    
              <IonItemOptions id="slide1" side="end" className="cus-input1  mt-22 mx-0">
                <IonItemOption onClick={()=> console.log('unread clicked')}>Restrcture</IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
            <IonItemSliding>
    
    
              <IonItem className="cus-input1  mt-22 mx-0">
                <IonCol className="" size="2">
                  <img src="/assets/icon/warning.svg" className="" alt=""></img>
                </IonCol>
                <IonCol size="10" className="border-right-danger">
                  <p className=" f-14">The market data suggest that your asset allocation needs to change kindly restrcture
                  </p>
                  <p className="f-10">4 minutes ago</p>
                </IonCol>
    
              </IonItem>
    
              <IonItemOptions id="slide1" side="end" className="cus-input1  mt-22 mx-0 ">
                <IonItemOption onClick={()=> console.log('unread clicked')} className="bg-danger-color">Steps</IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
    
            <IonItemSliding>
    
    
              <IonItem className="cus-input1  mt-22 mx-0">
                <IonCol className="" size="2">
                  <img src="/assets/icon/wrong.svg" className="" alt=""></img>
                </IonCol>
                <IonCol size="10" className="border-right-danger">
                  <p className=" f-14">The market data suggest that your asset allocation needs to change kindly restrcture
                  </p>
                  <p className="f-10">4 minutes ago</p>
                </IonCol>
    
              </IonItem>
    
              <IonItemOptions id="slide1" side="end" className="cus-input1  mt-22 mx-0">
                <IonItemOption onClick={()=> console.log('unread clicked')}>Restrcture</IonItemOption>
              </IonItemOptions>
            </IonItemSliding>*/}
            {this.state.Rebalancing_NinetyDay_Alert.map((art: any) => { return this.renderPortfolioAlerts(art); })}
            {this.state.Asset_Allocation_Update_Alert.map((art: any) => { return this.renderPortfolioAlerts(art); })}
            {this.state.Equity_MarketCap_Allocation_Update_Alert.map((art: any) => { return this.renderPortfolioAlerts(art); })} 

            {this.state.Asset_Increased_Significantly_Alert.map((art: any) => { return this.renderPortfolioAlerts(art); })} 
            {this.state.Asset_Decreased_Significantly_Alert.map((art: any) => { return this.renderPortfolioAlerts(art); })} 

            {this.state.LargeCap_Increased_Significantly_Alert.map((art: any) => { return this.renderPortfolioAlerts(art); })}
            {this.state.MidCap_Increased_Significantly_Alert.map((art: any) => { return this.renderPortfolioAlerts(art); })}
            {this.state.SmallCap_Increased_Significantly_Alert.map((art: any) => { return this.renderPortfolioAlerts(art); })}
            {this.state.LargeCap_Decreased_Significantly_Alert.map((art: any) => { return this.renderPortfolioAlerts(art); })}
            {this.state.MidCap_Decreased_Significantly_Alert.map((art: any) => { return this.renderPortfolioAlerts(art); })}
            {this.state.SmallCap_Decreased_Significantly_Alert.map((art: any) => { return this.renderPortfolioAlerts(art); })}

          </IonList>
          <p className="text-center f-14 mt-10">Swipe left to know more</p>
          <IonIcon name="arrow-forward-outline"></IonIcon>
    
    
    
    
    
    
    
    
    
    
        </IonContent>
        <IonFooter className="ion-no-border">
          <IonGrid className="text-center d-flex w-95 mt-10px">
            <IonCol size="3">
              <IonRow className="jc-footer">
                <img src="/assets/icon/home.svg" className="w-30" alt=""></img>
              </IonRow>
              <IonRow className="jc-footer">
                <p className=" mt-5px ft-13 b-500 ft-13">Home</p>
              </IonRow>
            </IonCol>
            <IonCol size="3">
              <IonRow className="jc-footer">
                <img src="/assets/icon/res.svg" className="w-30" alt=""></img>
              </IonRow>
              <IonRow className="jc-footer">
                <p className=" mt-5px ft-13">Restructure</p>
              </IonRow>
            </IonCol>
            <IonCol size="3">
              <IonRow className="jc-footer">
                <img src="/assets/icon/ale.svg" className="w-30" alt=""></img>
              </IonRow>
              <IonRow className="jc-footer">
                <p className=" mt-5px ft-13">Alerts</p>
              </IonRow>
            </IonCol>
            <IonCol size="3">
              <IonRow className="jc-footer">
                <img src="/assets/icon/news.svg" className="w-30" alt=""></img>
              </IonRow>
              <IonRow className="jc-footer">
                <p className=" mt-5px ft-13">My Portfolio</p>
              </IonRow>
            </IonCol>
          </IonGrid>
        </IonFooter>
    
    
      </IonPage>
      );

  }


  
  




}
