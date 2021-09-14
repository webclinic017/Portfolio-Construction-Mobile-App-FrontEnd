import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonList, IonRow, IonCol, IonFooter, IonItemSliding,
IonItemOption,IonItemOptions, IonGrid } from '@ionic/react';
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
      WATCHLIST : [],
      }
    }

    datafetch(){
     
      axios.get('http://127.0.0.1:8000/watchlistfi/',{
                        headers: {
                          'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`
                        }
                      }
                    )
                    .then(response =>{
                      console.log(response)
                      this.setState({WATCHLIST : response.data['WatchList']})
                    })
                    .catch(error => {
                      console.log(error)
                    })

    }
       
    componentDidMount() {

    
      this.datafetch()
      this.interval = setInterval(() => {this.datafetch();}, 60000);
      
  
    }
    componentWillUnmount() {
      clearInterval(this.interval);
    }

    renderWatchList(m: any) {

      if (m.PNLPercent >= 0) {

        return (
  
          <IonItemSliding>
            <IonItem className="cus-input1 mb-12 d-flex">
              <IonRow className="w-100">
  
                <IonCol className="company-logo" size="1">
                  <img className="logo-11" src="/assets/icon/Canera.png" alt=""></img>
                </IonCol>
                <IonCol className="" size="8">
                  <button className=" f-14 long-text b-500 mt-5" id="tool-tip" color="light">{m.stock_name}</button><br />
                  <p className="ft-12">Current Price : ₹{m.current_price}   |   Profit : ₹{m.PNL} </p>
                </IonCol>
                <IonCol size="3" className="text-right main-color d-flex jcf">
                  <p className="pt-55">{m.PNLPercent}%</p>
                  <img className="logo-14" src="/assets/icon/green.svg" alt=""></img>
                </IonCol>
              </IonRow>
            </IonItem>
            <IonItemOptions side="end" className="h-83">
              <IonItemOption onClick={() => { console.log("OK"); } }>View More</IonItemOption>
            </IonItemOptions>
        </IonItemSliding>
        )

      }

      else{

        return (
  
          <IonItemSliding>
            <IonItem className="cus-input1 mb-12 d-flex">
              <IonRow className="w-100">
  
                <IonCol className="company-logo" size="1">
                  <img className="logo-11" src="/assets/icon/Canera.png" alt=""></img>
                </IonCol>
                <IonCol className="" size="8">
                  <button className=" f-14 long-text b-500 mt-5" id="tool-tip" color="light">{m.stock_name}</button><br />
                  <p className="ft-12">Current Price : ₹{m.current_price}   |   Profit : ₹{m.PNL} </p>
                </IonCol>
                <IonCol size="3" className="text-right danger-color d-flex jcf">
                  <p className="pt-55">{m.PNLPercent}%</p>
                  <img className="logo-14" src="/assets/icon/green.svg" alt=""></img>
                </IonCol>
              </IonRow>
            </IonItem>
            <IonItemOptions side="end" className="h-83">
              <IonItemOption onClick={() => { console.log("OK"); } }>View More</IonItemOption>
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
        
          <img src="/assets/icon/fe.svg" className="" alt=""></img>
          
    
    
  
    <IonRow className="px-70">
  
          <IonCol size="6" className="segment3-bg pl-0">
            <button className="ft-12 cus-button4 " onClick={() => { console.log("OK"); this.props.history.push('/page12/Page12'); } }>My Holdings</button>
          </IonCol>
          <IonCol size="6" className="segment2-bg pl-0">
            <button className="ft-12 cus-button3"  >Watchlist</button>
          </IonCol>
        </IonRow>
          <p className="text-center f-14">Swipe to know more</p>
          
          <IonList>
            
            {this.state.WATCHLIST.map((art: any) => { return this.renderWatchList(art); })}
            
          </IonList>
    
          
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
            <IonCol size="3">
              <IonRow className="jc-footer">
                <img src="/assets/icon/news.svg" className="w-30" alt=""></img>
              </IonRow>
              <IonRow className="jc-footer">
                <p className=" mt-5px ft-13" onClick={() => { console.log("OK"); this.props.history.push('/page7/Page7'); } }  >My Portfolio</p>
              </IonRow>
            </IonCol>
          </IonGrid>
        </IonFooter>
    
      </IonPage>
      );

    }
  
    
    
  
  
  
  };
