import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonRow, IonCol, IonAlert, IonGrid } from '@ionic/react';
import React, { useState } from 'react';
import './Page.css';
import { RouteComponentProps } from "react-router-dom";
const Page: React.FC<RouteComponentProps> = (props) => {

  
    const [showAlert1, setShowAlert1] = useState(false);

    return (

    <IonPage className="z-999">
      <IonHeader>
        <IonToolbar>
          <IonButtons className="ios-btn1" slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className="header-bag ">

          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>


        <IonRow className="px-7 my-20">
          <IonCol size="2"></IonCol>
          <IonCol size="10">
            <img src="/assets/icon/Logo1.png" className="" alt=""></img>
          </IonCol>

        </IonRow>
        <IonAlert isOpen={showAlert1} onDidDismiss={()=> setShowAlert1(false)}
          header={'Portfolio Details'}
          subHeader={'Description for current page'}
          message={'This is an alert message.'}
          buttons={['OK']}
          />

          <IonItem className="cus-input1 mb-12">


            <IonCol className="d-flex f-14" size="8">
              <p>Already have an Account ?</p>
            </IonCol>
            <IonCol size="3" className="text-right">

              <h5 className="main-color" onClick={() => { console.log("OK"); props.history.push('/page37/page37'); } } >Login</h5>
            </IonCol>
            <IonCol size="1" className="pt-4">
              <img src="https://i.postimg.cc/wBxFgPLD/Path-225.png" alt=""></img>
            </IonCol>

          </IonItem>

          <IonItem className="cus-input1 mb-12">


            <IonCol className="d-flex f-14" size="8">
              <p>Don't have an account ?</p>
            </IonCol>
            <IonCol size="3" className="text-right">

              <h5 className="main-color" onClick={() => { console.log("OK"); props.history.push('/page38/page38'); } } >Signup</h5>
            </IonCol>
            <IonCol size="1" className="pt-4">
              <img src="https://i.postimg.cc/wBxFgPLD/Path-225.png" alt=""></img>
            </IonCol>

          </IonItem>

          <div>
            <p className="small-title asd main-color1 text-center">or signup with </p>
            <IonGrid className="text-center d-flex w-95 mt-10px">
              <IonCol size="3">
              </IonCol>
              <IonCol size="3">
                <IonRow className="jc-footer">
                  <img src="/assets/icon/facebook.svg" className="w-50" alt=""></img>
                </IonRow>

              </IonCol>
              <IonCol size="3">
                <IonRow className="jc-footer">
                  <img src="/assets/icon/gmail.svg" className="w-50" alt=""></img>
                </IonRow>
              </IonCol>
              <IonCol size="3">
              </IonCol>

            </IonGrid>
          </div>
          
      </IonContent>



      {/* <IonFooter className="ion-no-border">
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
              <p className=" mt-5px ft-13  ft-13" onClick={()=> { console.log("OK"); props.history.push('/page7/Page7');
                } } >My Portfolio</p>
            </IonRow>
          </IonCol>
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/res.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow className="jc-footer">
              <p className=" mt-5px ft-13  ft-13" onClick={()=> { console.log("OK");
                props.history.push('/page26/Page26'); } } >Restructure</p>
            </IonRow>
          </IonCol>
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/ale.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow className="jc-footer">
              <p className=" mt-5px ft-13  ft-13" onClick={()=> { console.log("OK");
                props.history.push('/page10/Page1'); } } >Alerts</p>
            </IonRow>
          </IonCol>

        </IonGrid>
      </IonFooter> */}
    </IonPage>
    );
    };

    export default Page;
