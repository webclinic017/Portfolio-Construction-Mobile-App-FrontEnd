import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonRow, IonCol, IonFooter, 
    IonGrid} from '@ionic/react';
    import React from 'react';
    import './Page.css';
    import { RouteComponentProps } from "react-router-dom";
    
    export default class Page extends React.Component<RouteComponentProps<{}>,any> {
    
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
              <img src="/assets/icon/Group 520.svg" className="" alt=""></img>
        
              
        
              <IonRow className="px-7">
                    <IonCol size="12">
                    <IonRow className="px-70">
                  <IonCol size="6" className="segment3-bg pl-0">
                    <button className="ft-12 cus-button3 ">My Holdings</button>
                  </IonCol>
                  <IonCol size="6" className="segment2-bg pl-0">
                    <button className="ft-12 cus-button4"  onClick={() => { console.log("OK"); this.props.history.push('/'); } }>Watchlist</button>
                  </IonCol>
              </IonRow>
                  </IonCol>
                </IonRow>
                <img src="/assets/icon/error2.svg" className="pxl-710 mt-50" alt=""></img>
        
                <IonButton className="cus-color mt-4" expand="full" onClick={() => { console.log("OK"); this.props.history.push('/page39/Page39'); } } >Next</IonButton>
              
        
        
        
        
        
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
                      <img src="/assets/icon/res.svg" className="w-30" alt=""></img>
                    </IonRow>
                    <IonRow  className="jc-footer">
                      <p className=" mt-5px ft-13"onClick={() => { console.log("OK"); this.props.history.push('/page26/Page26'); } }  >Restructure</p>
                    </IonRow>
                  </IonCol>
                  <IonCol size="3">
                    <IonRow className="jc-footer">
                      <img src="/assets/icon/ale.svg" className="w-30" alt=""></img>
                    </IonRow>
                    <IonRow  className="jc-footer">
                      <p className=" mt-5px ft-13"onClick={() => { console.log("OK"); this.props.history.push('/page10/Page1'); } }  >Alerts</p>
                    </IonRow>
                  </IonCol>
                  <IonCol size="3">
                    <IonRow className="jc-footer">
                      <img src="/assets/icon/news.svg" className="w-30" alt=""></img>
                    </IonRow>
                    <IonRow  className="jc-footer">
                    <p className=" mt-5px ft-13" onClick={() => { console.log("OK"); this.props.history.push('/page7/Page7'); } }  >My Portfolio</p>
                    </IonRow>
                  </IonCol>
                </IonGrid>
            </IonFooter>
        
          </IonPage>
          );
    
      }
    
      
      
    
    
    
    };
    