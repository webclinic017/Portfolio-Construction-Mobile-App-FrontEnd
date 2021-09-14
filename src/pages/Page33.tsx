import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton,
IonItem, IonRow, IonCol, IonFooter, IonAlert,
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
      <img src="/assets/icon/algo.svg" className="" alt=""></img>

      <img src="/assets/icon/Ourinvestment.svg" className="px-10" alt=""></img>
      <h6 className="text-center">Features</h6>
      <IonGrid>
        <IonRow>
        <IonCol size="1"></IonCol>
          <IonCol size="5">
          <IonButton className="cus123" onClick={() => setShowAlert1(true)} id="tool-tip" color="light" expand="block">
            <img src="/assets/icon/opm.svg" className="ts13" alt=""></img></IonButton>
          </IonCol>
          <IonCol size="5">
            <IonButton className="cus123" onClick={() => setShowAlert2(true)} id="tool-tip" color="light" expand="block">
            <img src="/assets/icon/Pledge.svg" className="ts13" alt=""></img></IonButton>
          </IonCol>
          <IonCol size="1"></IonCol>
        </IonRow>
        <IonRow>
        <IonCol size="1"></IonCol>
          <IonCol size="5">
            <IonButton className="cus123" onClick={() => setShowAlert3(true)} id="tool-tip" color="light" expand="block">
            <img src="/assets/icon/soundness.svg" className="ts13" alt=""></img></IonButton>
          </IonCol>
          <IonCol size="5">
            <IonButton className="cus123" onClick={() => setShowAlert4(true)} id="tool-tip" color="light" expand="block">
            <img src="/assets/icon/Growth1.svg" className="ts13" alt=""></img></IonButton>
          </IonCol>
          <IonCol size="1"></IonCol>
        </IonRow>
        <IonRow>
        <IonCol size="1"></IonCol>
        
          <IonCol size="5">
            <IonButton className="cus123" onClick={() => setShowAlert5(true)} id="tool-tip" color="light" expand="block">
            <img src="/assets/icon/marketsenti.svg" className="ts13" alt=""></img></IonButton>
          </IonCol>
          <IonCol size="5">
            
          </IonCol>
          <IonCol size="1"></IonCol>
        </IonRow>
      </IonGrid>
                  <IonItem className="cus-input1 mb-12 mt-5">
        <IonRow className="w-100">
          <IonCol className="d-flex f-14" size="12">
            <h6>The algorithm</h6>
          </IonCol>
          <IonCol className="d-flex f-14" size="12">
            <p>Scans through historical valuation  (parameters such as market PE, PEG. PB) of asset classes.</p>

          </IonCol>
          <IonCol className="d-flex f-14" size="12">
            <p>Scans through over 60 fincial data pts. of each company every day.</p>
          </IonCol>
          <IonCol className="d-flex f-14" size="12">
            <p>Studies the volatility of each script and risk reward to datamine weightage.</p>
          </IonCol>
          <IonCol className="d-flex f-14" size="12">

            <p>Tracks your portfolio to mitigate any loss.</p>

          </IonCol>
                    <IonCol className="d-flex f-14" size="12">

            <p>Continuosly evolving</p>

          </IonCol>
                    <IonCol className="d-flex f-14" size="12">

            <p>No human intervention</p>
          </IonCol>
        </IonRow>
      </IonItem>
     
      <IonAlert
          isOpen={showAlert1}
          onDidDismiss={() => setShowAlert1(false)}
          header={'OPM  ROE  ROCE Quality of management'}
          subHeader={'Description for current page'}
          message={'This is an alert message.'}
          buttons={['OK']}
        />
              <IonAlert
          isOpen={showAlert2}
          onDidDismiss={() => setShowAlert2(false)}
          header={'Pledge search promoter holding'}
          subHeader={'Description for current page'}
          message={'This is an alert message.'}
          buttons={['OK']}
        />
              <IonAlert
          isOpen={showAlert3}
          onDidDismiss={() => setShowAlert3(false)}
          header={'Soundness of balance sheet '}
          subHeader={'Description for current page'}
          message={'This is an alert message.'}
          buttons={['OK']}
        />
              <IonAlert
          isOpen={showAlert4}
          onDidDismiss={() => setShowAlert4(false)}
          header={'Growth'}
          subHeader={'Description for current page'}
          message={'This is an alert message.'}
          buttons={['OK']}
        />
              <IonAlert
          isOpen={showAlert5}
          onDidDismiss={() => setShowAlert5(false)}
          header={'Market sentiment'}
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