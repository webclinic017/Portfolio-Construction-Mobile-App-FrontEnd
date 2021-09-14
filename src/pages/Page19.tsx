import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
  IonRow, IonCol, IonFooter, 
  IonGrid} from '@ionic/react';
  import React/*, { useState }*/  from 'react';
  //import { useParams } from 'react-router';
  //import ExploreContainer from '../components/ExploreContainer';
  import './Page.css';
  
  const Page: React.FC = () => {
  
  //const { name } = useParams<{ name: string; }>();
  //const [showAlert1, setShowAlert1] = useState(false);
  
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
      
        <img src="/assets/icon/upload-selection.svg" className="" alt=""></img>
  
        <img src="/assets/icon/excel-up.svg" className="h-10 mt-44" alt=""></img>
        <img src="/assets/icon/keyboard-up.svg" className="h-10" alt=""></img>
  
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