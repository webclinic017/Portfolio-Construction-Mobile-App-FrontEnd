import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonItem,
    IonLabel,
    IonRow,
    IonCol,
    IonFooter,
    IonGrid,
    IonCheckbox,
    IonInput
} from '@ionic/react';
import React, {useState} from 'react';

import './Page.css';
import './Page50.css';

import {RouteComponentProps} from "react-router-dom";



const Page: React.FC<RouteComponentProps> = (props) => {

    // eslint-disable-next-line
    const [checked, setChecked] = useState(false);

    return (

        <IonPage className="z-999">
            <IonHeader>
                <IonToolbar>
                    <IonButtons className="ios-btn1" slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle className="header-bag ">

                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonGrid>
                    <IonRow className="ion-justify-content-center">
                        <IonRow className="w-100 light-green p-0">
                            <IonCol size='12' className="ion-align-self-start mx-2">
                                <p className="b-600 m-0">Family Sharing</p>
                            </IonCol>
                        </IonRow>

                        <IonRow className="w-100 mx-2">
                            <IonCol size='12' className="ion-align-self-start">
                                <IonRow className="w-100">
                                    <IonCol size='12'>
                                        <p className="b-600 m-0">Email Address</p>
                                    </IonCol>
                                </IonRow>
                                <IonRow className="w-100">
                                    <IonItem className='w-100 input-style mb-2'>
                                        <IonLabel>purvishah@gmail.com</IonLabel>
                                        <IonCheckbox onIonChange={e => setChecked(e.detail.checked)} />
                                    </IonItem>

                                    <IonItem className='w-100 input-style mb-2'>
                                        <IonLabel>purvishah@gmail.com</IonLabel>
                                        <IonCheckbox onIonChange={e => setChecked(e.detail.checked)} />
                                    </IonItem>

                                    <IonItem className='w-100 input-style mb-2'>
                                        <IonLabel>purvishah@gmail.com</IonLabel>
                                        <IonCheckbox onIonChange={e => setChecked(e.detail.checked)} />
                                    </IonItem>
                                </IonRow>
                            </IonCol>

                        </IonRow>

                        <IonRow className="w-100 mx-2">
                            <IonItem className="cus-input1 mb-12 ft-w p-2">
                                <IonInput placeholder="Enter your email" ></IonInput>
                            </IonItem>
                            <IonCol size='12' className="ion-align-self-center text-center">
                                <IonButton className='w-100'>Refer</IonButton>
                            </IonCol>
                        </IonRow>
                    </IonRow>


                </IonGrid>
            </IonContent>

            <IonFooter className="ion-no-border">
                <IonGrid className="text-center d-flex w-95 mt-10px">
                    <IonCol size="3">
                        <IonRow className="jc-footer">
                            <img src="/assets/icon/home.svg" className="w-30" alt=""></img>
                        </IonRow>
                        <IonRow className="jc-footer">
                            <p className=" mt-5px ft-13 b-500 ft-13" onClick={() => {
                                console.log("OK");
                                props.history.push('/page30/Page30');
                            }}>Home</p>
                        </IonRow>
                    </IonCol>
                    <IonCol size="3">
                        <IonRow className="jc-footer">
                            <img src="/assets/icon/news.svg" className="w-30" alt=""></img>
                        </IonRow>
                        <IonRow className="jc-footer">
                            <p className=" mt-5px ft-13  ft-13" onClick={() => {
                                console.log("OK");
                                props.history.push('/page7/Page7');
                            }}>My Portfolio</p>
                        </IonRow>
                    </IonCol>
                    <IonCol size="3">
                        <IonRow className="jc-footer">
                            <img src="/assets/icon/res.svg" className="w-30" alt=""></img>
                        </IonRow>
                        <IonRow className="jc-footer">
                            <p className=" mt-5px ft-13  ft-13" onClick={() => {
                                console.log("OK");
                                props.history.push('/page26/Page26');
                            }}>Restructure</p>
                        </IonRow>
                    </IonCol>
                    <IonCol size="3">
                        <IonRow className="jc-footer">
                            <img src="/assets/icon/ale.svg" className="w-30" alt=""></img>
                        </IonRow>
                        <IonRow className="jc-footer">
                            <p className=" mt-5px ft-13  ft-13" onClick={() => {
                                console.log("OK");
                                props.history.push('/page10/Page1');
                            }}>Alerts</p>
                        </IonRow>
                    </IonCol>
                </IonGrid>
            </IonFooter>
        </IonPage>
    );
};

export default Page;
