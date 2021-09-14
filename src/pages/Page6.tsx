import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
IonItem, IonLabel, IonRow, IonCol, IonFooter,
IonGrid,IonSegmentButton, IonSegment} from '@ionic/react';
import React from 'react';
//import { useParams } from 'react-router';
//import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Page: React.FC = () => {

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
      <img src="/assets/icon/Group 519.svg" className="" alt=""></img>

      <IonRow className="px-7">
          <IonCol size="12">
        <IonSegment className="bg-white">
          <IonSegmentButton value="call">
            <IonLabel>Diversification</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="">
            <IonLabel color="primary">Stocks</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="map" className="cus-segment">
            <IonLabel>Return</IonLabel>
          </IonSegmentButton>
        </IonSegment>
          </IonCol>
        </IonRow>

      <IonItem className="cus-input1 mb-12 mt-5">

        <IonCol className="d-flex f-14" size="6">
          <p>Return Amount</p>
        </IonCol>
        <IonCol size="6" className="text-right">
          <h5 className="main-color">+ ₹32,000</h5> 
        </IonCol>
      </IonItem>
      <IonItem className="cus-input1 mb-12 mt-5">

        <IonCol className="d-flex f-14" size="8">
          <p>Return Percentage</p>
        </IonCol>
        <IonCol size="4" className="text-right">
          <h5 className="main-color">+ 12%</h5> 
        </IonCol>
      </IonItem>

      <IonItem className="cus-input1 mb-12 mt-5">
        <IonGrid>
          <IonRow>
            <IonCol className="bb f-14" size="12">
              <p>Best Performing sector</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className=" f-14" size="8">
              <p>Sector Name</p>
            </IonCol>
            <IonCol size="4" className="text-right">
              <h5 className="main-color">+ 12%</h5> 
            </IonCol>
          </IonRow>

        </IonGrid>
      </IonItem>
      <IonItem className="cus-input1 mb-12 mt-5">
        <IonGrid>
          <IonRow>
            <IonCol className="bb f-14" size="12">
              <p>Worst Performing sector</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="f-14" size="8">
              <p>Sector Name</p>
            </IonCol>
            <IonCol size="4" className="text-right">
              <h5 className="danger-color">- 12%</h5> 
            </IonCol>
          </IonRow>

        </IonGrid>
      </IonItem>
      <IonItem className="cus-input1 mb-12 mt-5">
        <IonGrid>
          <IonRow>
            <IonCol className="bb f-14" size="12">
              <p>Compare</p>
            </IonCol>
          </IonRow>
          <IonRow className="mb--15">
            <IonCol className="f-14" size="8">
              <p>Easy West</p>
            </IonCol>
            <IonCol size="4" className="text-right">
              <h5 className="danger-color">- 12%</h5> 
            </IonCol>
          </IonRow>
          <IonRow className="mb--15">
            <IonCol className="f-14" size="8">
              <p>Index</p>
            </IonCol>
            <IonCol size="4" className="text-right">
              <h5 className="danger-color">- 12%</h5> 
            </IonCol>
          </IonRow>
          <IonRow className="mb--15">
            <IonCol className="f-14" size="8">
              <p>M.F.</p>
            </IonCol>
            <IonCol size="4" className="text-right">
              <h5 className="danger-color">- 12%</h5> 
            </IonCol>
          </IonRow>

        </IonGrid>
      </IonItem>
            





    </IonContent>
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
            <IonRow  className="jc-footer">
              <p className=" mt-5px ft-13">Restructure</p>
            </IonRow>
          </IonCol>
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/ale.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow  className="jc-footer">
              <p className=" mt-5px ft-13">Alerts</p>
            </IonRow>
          </IonCol>
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/news.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow  className="jc-footer">
            <p className=" mt-5px ft-13">My Portfolio</p>
            </IonRow>
          </IonCol>
        </IonGrid>
    </IonFooter>
    
    
  </IonPage>
  );
  };

  export default Page;