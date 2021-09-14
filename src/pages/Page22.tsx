import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonRow, IonCol, IonFooter,
IonGrid } from '@ionic/react';
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
      <img src="/assets/icon/home1.svg" className="" alt=""></img>

      <img src="/assets/icon/mission.svg" className="px-10" alt=""></img>

      <IonItem className="cus-input1 mb-12 mt-5">
        <IonRow className="w-100">
          <IonCol className="d-flex f-14 bb" size="12">
            <h6>Why ? </h6>
          </IonCol>
          <IonCol className="d-flex f-14" size="12">
            <p>We ourselves have been retail investors. The pain of generic solution lack of hand holding during tough times and minumal accountabiliy formed the genesis of easyvest.</p>
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
            <p className=" mt-5px ft-13 b-500 ft-13"onClick={() => { console.log("OK"); props.history.push('/page30/Page30'); } } >Home</p>
          </IonRow>
        </IonCol>
        <IonCol size="3">
          <IonRow className="jc-footer">
            <img src="/assets/icon/news.svg" className="w-30" alt=""></img>
          </IonRow>
          <IonRow className="jc-footer">
            <p className=" mt-5px ft-13" onClick={() => { console.log("OK"); props.history.push('/page7/Page7'); } }  >My Portfolio</p>
          </IonRow>
        </IonCol>
        <IonCol size="3">
          <IonRow className="jc-footer">
            <img src="/assets/icon/res.svg" className="w-30" alt=""></img>
          </IonRow>
          <IonRow className="jc-footer">
            <p className=" mt-5px ft-13"onClick={() => { console.log("OK"); props.history.push('/page/Page1'); } }  >Restructure</p>
          </IonRow>
        </IonCol>
        <IonCol size="3">
          <IonRow className="jc-footer">
            <img src="/assets/icon/ale.svg" className="w-30" alt=""></img>
          </IonRow>
          <IonRow className="jc-footer">
            <p className=" mt-5px ft-13"onClick={() => { console.log("OK"); props.history.push('/page10/Page1'); } }  >Alerts</p>
          </IonRow>
        </IonCol>

      </IonGrid>
    </IonFooter>

  </IonPage>
  );
  };

  export default Page;