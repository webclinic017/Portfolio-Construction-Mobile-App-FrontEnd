import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonRow, IonCol, IonFooter,
IonGrid } from '@ionic/react';
import React from 'react';
import './Page.css';
import { RouteComponentProps } from "react-router-dom";
//import {Pie, Doughnut} from 'react-chartjs-2';

// eslint-disable-next-line
const state = {
      labels: ['January', 'February'],
      datasets: [
          {
              label: 'Rainfall',
              backgroundColor: [
                  '#FFCB39',
                  '#344ADE'
              ],
              hoverBackgroundColor: [
                  '#FFCB39',
                  '#344ADE'
              ],
              data: [80, 20]
          }
      ]
}
const Page: React.FC<RouteComponentProps> = (props) => {

  

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
        <img src="/assets/icon/business-news.svg" className="" alt=""></img>


        <IonItem className="cus-input1 mb-12 d-flex">
            <IonRow className="w-100">

              <IonCol className="company-logo" size="1">
                <img className="logo-11" src="/assets/icon/Canera.png" alt=""></img>
              </IonCol>
              
              <IonCol className="" size="8">
                <button className=" f-14 long-text b-500 mt-5" id="tool-tip" color="light">News Headline</button><br />
                <p className="ft-12">News description</p>
              </IonCol>
              <IonCol size="3" className="text-right">
                <img className="logo-13" src="/assets/icon/navigate.svg" alt=""></img>
              </IonCol>
            </IonRow>
          </IonItem>
          <IonItem className="cus-input1 mb-12 d-flex">
            <IonRow className="w-100">

              <IonCol className="company-logo" size="1">
                <img className="logo-11" src="/assets/icon/Canera.png" alt=""></img>
              </IonCol>
              
              <IonCol className="" size="8">
                <button className=" f-14 long-text b-500 mt-5" id="tool-tip" color="light">News Headline</button><br />
                <p className="ft-12">News description</p>
              </IonCol>
              <IonCol size="3" className="text-right">
                <img className="logo-13" src="/assets/icon/navigate.svg" alt=""></img>
              </IonCol>
            </IonRow>
          </IonItem>
          
      </IonContent>
      <IonFooter className="ion-no-border">
        <IonGrid className="text-center d-flex w-95 mt-10px">
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/home.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow className="jc-footer">
              <p className=" mt-5px ft-13 b-500 ft-13" onClick={()=> { console.log("OK");
                props.history.push('/page30/Page30'); } } >Home</p>
            </IonRow>
          </IonCol>
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/news.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow className="jc-footer">
              <p className=" mt-5px ft-13" onClick={()=> { console.log("OK"); props.history.push('/page7/Page7'); } }
                >My Portfolio</p>
            </IonRow>
          </IonCol>
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/res.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow className="jc-footer">
              <p className=" mt-5px ft-13" onClick={()=> { console.log("OK"); props.history.push('/page26/Page26'); } }
                >Restructure</p>
            </IonRow>
          </IonCol>
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/ale.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow className="jc-footer">
              <p className=" mt-5px ft-13" onClick={()=> { console.log("OK"); props.history.push('/page10/Page1'); } }
                >Alerts</p>
            </IonRow>
          </IonCol>

        </IonGrid>
      </IonFooter>

    </IonPage>
    );
    };

    export default Page;