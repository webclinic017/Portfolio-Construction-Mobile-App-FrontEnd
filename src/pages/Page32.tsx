import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton,
IonRow, IonCol, IonFooter, IonAlert,
IonGrid } from '@ionic/react';
import React, { useState }  from 'react';

import './Page.css';

import { RouteComponentProps } from "react-router-dom";
const Page: React.FC<RouteComponentProps> = (props) => {


const [showAlert1, setShowAlert1] = useState(false);
const [showAlert2, setShowAlert2] = useState(false);
const [showAlert3, setShowAlert3] = useState(false);
const [showAlert4, setShowAlert4] = useState(false);
const [showAlert5, setShowAlert5] = useState(false);

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
      <img src="/assets/icon/investment.svg" className="" alt=""></img>

      <img src="/assets/icon/tree1.svg" className="px-10 pl-30" alt=""></img>
      <h6 className="text-center">Features</h6>
      <IonGrid>
        <IonRow>
        <IonCol size="1"></IonCol>
          <IonCol size="5">
            <IonButton className="cus123" onClick={() => setShowAlert1(true)} id="tool-tip" color="light" expand="block">
            <img src="/assets/icon/1.svg"  className="ts13" alt=""></img></IonButton>
          </IonCol>
          <IonCol size="5">
            <IonButton className="cus123" onClick={() => setShowAlert2(true)} id="tool-tip" color="light" expand="block">
            <img src="/assets/icon/2.svg"  className="ts13" alt=""></img></IonButton>
          </IonCol>
          <IonCol size="1"></IonCol>
        </IonRow>
        <IonRow>
        <IonCol size="1"></IonCol>
          <IonCol size="5">
            <IonButton className="cus123" onClick={() => setShowAlert3(true)} id="tool-tip" color="light" expand="block">
            <img src="/assets/icon/3.svg"  className="ts13" alt=""></img></IonButton>
          </IonCol>
          <IonCol size="5">
            <IonButton className="cus123" onClick={() => setShowAlert4(true)} id="tool-tip" color="light" expand="block">
            <img src="/assets/icon/4.svg"  className="ts13" alt=""></img></IonButton>
          </IonCol>
          <IonCol size="1"></IonCol>
        </IonRow>
        <IonRow>
        <IonCol size="1"></IonCol>
          <IonCol size="5">
            <IonButton className="cus123" onClick={() => setShowAlert5(true)} id="tool-tip" color="light" expand="block">
            <img src="/assets/icon/5.svg"  className="ts13" alt=""></img></IonButton>
          </IonCol>
          <IonCol size="5">
          </IonCol>
          <IonCol size="1"></IonCol>
        </IonRow>
      </IonGrid>
      <IonAlert
          isOpen={showAlert1}
          onDidDismiss={() => setShowAlert1(false)}
          header={'Growth is a future of value'}
          subHeader={'Description for current page'}
          message={'This is an alert message.'}
          buttons={['OK']}
        />
              <IonAlert
          isOpen={showAlert2}
          onDidDismiss={() => setShowAlert2(false)}
          header={'Value at right price'}
          subHeader={'Description for current page'}
          message={'This is an alert message.'}
          buttons={['OK']}
        />
              <IonAlert
          isOpen={showAlert3}
          onDidDismiss={() => setShowAlert3(false)}
          header={'Mr. market knows the best'}
          subHeader={'Description for current page'}
          message={'This is an alert message.'}
          buttons={['OK']}
        />
              <IonAlert
          isOpen={showAlert4}
          onDidDismiss={() => setShowAlert4(false)}
          header={'Data never lies'}
          subHeader={'Description for current page'}
          message={'This is an alert message.'}
          buttons={['OK']}
        />
              <IonAlert
          isOpen={showAlert5}
          onDidDismiss={() => setShowAlert5(false)}
          header={'No Human Biase'}
          subHeader={'Description for current page'}
          message={'This is an alert message.'}
          buttons={['OK']}
        />
  
        
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
            <p className=" mt-5px ft-13"onClick={() => { console.log("OK"); props.history.push('/page26/Page26'); } }  >Restructure</p>
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