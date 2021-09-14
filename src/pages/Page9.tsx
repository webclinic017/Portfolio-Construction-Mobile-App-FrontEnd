import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton,
  IonItem, IonRow, IonCol, IonFooter, IonGrid} from '@ionic/react';
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
      <img src="/assets/icon/review.svg" className="" alt=""></img>
  
        <IonItem className="cus-input1 mb-12 mt-22">
          <IonCol className=" f-14" size="6">
            <p>Stock amount</p>
          </IonCol>
          <IonCol size="6" className="text-right">
            <h5 className="main-color">₹ 1,00,000</h5> 
          </IonCol>
        </IonItem>
        <IonItem className="cus-input1 mb-12">
          <IonCol className=" f-14" size="6">
            <p>Qty to be sold</p>
          </IonCol>
          <IonCol size="6" className="text-right">
            <h5 className="main-color">53</h5> 
          </IonCol>
        </IonItem>
        
        <IonItem className="cus-input1 mb-12">
          <IonGrid>
            <IonRow className="">
              <IonCol className=" f-14" size="10">
                <p className="b-500">Complete exit</p>
              </IonCol>
              <IonCol size="2" className="text-right">
                <h5 className="main-color">6</h5> 
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonItem>

        <IonItem className="cus-input1 mb-12">
          <IonGrid>
            <IonRow className="">
              <IonCol className=" f-14" size="10">
                <p className="b-500">Rebalancing Stocks</p>
              </IonCol>
              <IonCol size="2" className="text-right">
                <h5 className="main-color">12</h5> 
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonItem>
        <IonItem className="cus-input1 mb-12">
          <IonGrid>
            <IonRow className="bb">
              <IonCol className=" f-14" size="10">
                <p className="b-500">Fresh buy</p>
              </IonCol>
              <IonCol size="2" className="text-right pt-7">
                <img className="r-90" src="https://i.postimg.cc/wBxFgPLD/Path-225.png" alt=""></img>
              </IonCol>
            </IonRow>
            <IonRow className="bb">
              <IonCol className="company-logo1" size="1">
                <img src="/assets/icon/sbi.png" alt=""></img>
              </IonCol>
              <IonCol className=" f-14" size="5">
                <p className=""> Stock Name</p>
              </IonCol>
              <IonCol size="6" className="text-right">
                <h5 className="main-color">53</h5> 
              </IonCol>
            </IonRow>
            <IonRow className="bb">
              <IonCol className="company-logo1" size="1">
                <img src="/assets/icon/sbi.png" alt=""></img>
              </IonCol>
              <IonCol className=" f-14" size="5">
                <p className=""> Stock Name1</p>
              </IonCol>
              <IonCol size="6" className="text-right">
                <h5 className="main-color">27</h5> 
              </IonCol>
            </IonRow>
            <IonRow className="">
              <IonCol className="company-logo1" size="1">
                <img src="/assets/icon/sbi.png" alt=""></img>
              </IonCol>
              <IonCol className=" f-14" size="6">
                <p className=""> Stock Name2</p>
              </IonCol>
              <IonCol size="5" className="text-right">
                <h5 className="main-color">12</h5> 
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonItem>
        <IonRow>
        <IonCol size="6">
          <IonButton className="cus-color mt-4 w-100" fill="outline">Decline</IonButton>
        </IonCol>
        <IonCol size="6">
        <IonButton className="cus-color mt-4 w-100">Approve</IonButton>
        </IonCol>
      </IonRow>       
  
  
  
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