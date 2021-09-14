import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonGrid, IonToolbar, IonFooter, IonRow, IonCol } from '@ionic/react';
import React from 'react';
//import { useParams } from 'react-router';
//import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Page: React.FC = () => {

  //const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2 className="ml-3 f-700 mb-10 mt-10">Select From Following</h2>
        
         <img src="/assets/icon/Current.svg" className="px-10" alt=""></img>
         <img src="/assets/icon/New.svg" className="px-10" alt=""></img>
      </IonContent>
      <IonRow>
          <IonCol size="4"></IonCol>
          <IonCol size="4">
            <p className="text-center color3">Version 2.1</p>
          </IonCol>
          <IonCol size="4"></IonCol>
        </IonRow>
     
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
          <IonRow  className="jc-footer ft-13">
            <p className=" mt-5px ft-13">Restructure</p>
          </IonRow>
        </IonCol>
        <IonCol size="3">
          <IonRow className="jc-footer">
            <img src="/assets/icon/ale.svg" className="w-30" alt=""></img>
          </IonRow>
          <IonRow  className="jc-footer ft-13">
            <p className=" mt-5px ft-13">Alerts</p>
          </IonRow>
        </IonCol>
        <IonCol size="3">
          <IonRow className="jc-footer">
            <img src="/assets/icon/news.svg" className="w-30" alt=""></img>
          </IonRow>
          <IonRow  className="jc-footer ft-13">
          <p className=" mt-5px ft-13">My Portfolio</p>
          </IonRow>
        </IonCol>
      </IonGrid>
  </IonFooter>

    </IonPage>
  );
};

export default Page;
