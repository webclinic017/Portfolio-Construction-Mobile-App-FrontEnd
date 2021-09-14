import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonList, IonRow, IonCol, IonFooter,
IonGrid,IonItemOptions, IonItemSliding, IonItemOption } from '@ionic/react';
import React from 'react';
//import { useParams } from 'react-router';
//import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

import { RouteComponentProps } from "react-router-dom";
const Page: React.FC<RouteComponentProps> = (props) => {

//const { name } = useParams<{ name: string; }>();

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
      <img src="/assets/icon/home1.svg" className="" alt="" ></img>

      <img src="/assets/icon/mission.svg" className="px-10" alt=""></img>
      <h4 className="ml-3  mb-10 mt-10">Investment Corner</h4>
      <IonList>
          
          <IonItemSliding>
            <IonItem className="cus-input1 mb-12 d-flex">
              <IonRow className="w-100">
  
                <IonCol className="company-logo pt-78" size="1">
                  <img className="logo-12" src="/assets/icon/Canera.png" alt=""></img>
                </IonCol>
                <IonCol className="" size="8">
                  <button className=" f-14 long-text b-500 mt-5 pt-71" id="tool-tip" color="light">Our investment philosophy</button><br />
                </IonCol>
                <IonCol size="3" className="text-right main-color d-flex jcf">
    
                  <img className="logo-14" src="/assets/icon/green.svg" alt=""></img>
                </IonCol>
              </IonRow>
            </IonItem>
            <IonItemOptions side="end" className="h-83">
              <IonItemOption onClick={()=> console.log('unread clicked')}>View More</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem className="cus-input1 mb-12 d-flex">
              <IonRow className="w-100">
  
                <IonCol className="company-logo pt-78" size="1">
                  <img className="logo-12" src="/assets/icon/Canera.png" alt="" ></img>
                </IonCol>
                <IonCol className="" size="8">
                  <button className=" f-14 long-text b-500 mt-5 pt-71" id="tool-tip" color="light">Proprietary algorithm</button><br />
                </IonCol>
                <IonCol size="3" className="text-right main-color d-flex jcf">
    
                  <img className="logo-14" src="/assets/icon/green.svg" alt="" ></img>
                </IonCol>
              </IonRow>
            </IonItem>
            <IonItemOptions side="end" className="h-83">
              <IonItemOption onClick={()=> console.log('unread clicked')}>View More</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem className="cus-input1 mb-12 d-flex">
              <IonRow className="w-100">
  
                <IonCol className="company-logo pt-78" size="1">
                  <img className="logo-12" src="/assets/icon/Canera.png" alt="" ></img>
                </IonCol>
                <IonCol className="" size="8">
                  <button className=" f-14 long-text b-500 mt-5 pt-71" id="tool-tip" color="light">Performance</button><br />
                </IonCol>
                <IonCol size="3" className="text-right main-color d-flex jcf">
    
                  <img className="logo-14" src="/assets/icon/green.svg" alt="" ></img>
                </IonCol>
              </IonRow>
            </IonItem>
            <IonItemOptions side="end" className="h-83">
              <IonItemOption onClick={()=> console.log('unread clicked')}>View More</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

        </IonList>
        <h4 className="ml-3  mb-10 mt-10">About us</h4>
      <IonList>
          
          <IonItemSliding>
            <IonItem className="cus-input1 mb-12 d-flex">
              <IonRow className="w-100">
  
                <IonCol className="company-logo pt-78" size="1">
                  <img className="logo-12" src="/assets/icon/Canera.png" alt="" ></img>
                </IonCol>
                <IonCol className="" size="8">
                  <button className=" f-14 long-text b-500 mt-5 pt-71" id="tool-tip" color="light">About us</button><br />
                </IonCol>
                <IonCol size="3" className="text-right main-color d-flex jcf">
    
                  <img className="logo-14" src="/assets/icon/green.svg" alt=""></img>
                </IonCol>
              </IonRow>
            </IonItem>
            <IonItemOptions side="end" className="h-83">
              <IonItemOption onClick={()=> console.log('unread clicked')}>View More</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem className="cus-input1 mb-12 d-flex">
              <IonRow className="w-100">
  
                <IonCol className="company-logo pt-78" size="1">
                  <img className="logo-12" src="/assets/icon/Canera.png" alt=""></img>
                </IonCol>
                <IonCol className="" size="8">
                  <button className=" f-14 long-text b-500 mt-5 pt-71" id="tool-tip" color="light">Why us</button><br />
                </IonCol>
                <IonCol size="3" className="text-right main-color d-flex jcf">
    
                  <img className="logo-14" src="/assets/icon/green.svg" alt=""></img>
                </IonCol>
              </IonRow>
            </IonItem>
            <IonItemOptions side="end" className="h-83">
              <IonItemOption onClick={()=> console.log('unread clicked')}>View More</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem className="cus-input1 mb-12 d-flex">
              <IonRow className="w-100">
  
                <IonCol className="company-logo pt-78" size="1">
                  <img className="logo-12" src="/assets/icon/Canera.png" alt=""></img>
                </IonCol>
                <IonCol className="" size="8">
                  <button className=" f-14 long-text b-500 mt-5 pt-71" id="tool-tip" color="light">Getting Started</button><br />
                </IonCol>
                <IonCol size="3" className="text-right main-color d-flex jcf">
    
                  <img className="logo-14" src="/assets/icon/green.svg" alt=""></img>
                </IonCol>
              </IonRow>
            </IonItem>
            <IonItemOptions side="end" className="h-83">
              <IonItemOption onClick={()=> console.log('unread clicked')}>View More</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

        </IonList>
      
      

    </IonContent>
    <IonFooter className="ion-no-border">
        <IonGrid className="text-center d-flex w-95 mt-10px">
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/home.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow  className="jc-footer">
              <p className=" mt-5px ft-13 b-500 ft-13"onClick={() => { console.log("OK"); props.history.push('/page30/Page30'); } } >Home</p>
            </IonRow>
          </IonCol>
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/res.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow  className="jc-footer">
              <p className=" mt-5px ft-13"onClick={() => { console.log("OK"); props.history.push('/page/Page1'); } }  >Restructure</p>
            </IonRow>
          </IonCol>
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/ale.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow  className="jc-footer">
              <p className=" mt-5px ft-13"onClick={() => { console.log("OK"); props.history.push('/page10/Page1'); } }  >Alerts</p>
            </IonRow>
          </IonCol>
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/news.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow  className="jc-footer">
            <p className=" mt-5px ft-13" onClick={() => { console.log("OK"); props.history.push('/page7/Page7'); } }  >My Portfolio</p>
            </IonRow>
          </IonCol>
        </IonGrid>
    </IonFooter>

  </IonPage>
  );
  };

  export default Page;