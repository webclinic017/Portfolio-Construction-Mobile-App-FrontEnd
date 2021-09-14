import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonRow,
    IonCol,
    IonFooter,
    IonGrid
    
} from '@ionic/react';
import React from 'react';

import './Page.css';
import './Page50.css';

import {RouteComponentProps} from "react-router-dom";



const Page: React.FC<RouteComponentProps> = (props) => {

    

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
                        <IonRow className="w-100 light-green p-0 mb-2">
                            <IonCol size='12' className="ion-align-self-start mx-2">
                                <p className="b-600 m-0">References</p>
                            </IonCol>
                        </IonRow>

                        <IonRow className="w-100 mx-2 mb-2 p-2 border-style">
                            <IonCol size="2" className="company-logo text-center">
                                <img className="w-50" src="/assets/icon/Canera.png" alt=""></img>
                            </IonCol>
                            <IonCol size="9">
                                <button className="f-14 long-text b-500" id="tool-tip" color="light">Canera Bank</button><br />
                                <p className="ft-12 mb-0">Buy At : ₹2000 | Add Quantity : 150</p>
                            </IonCol>
                            <IonCol size="1" className="text-right">
                                <img className="logo-13" src="/assets/icon/navigate.svg" alt=""></img>
                            </IonCol>
                        </IonRow>

                        <IonRow className="w-100 mx-2 mb-2 p-2 border-style">
                            <IonCol size="2" className="company-logo text-center">
                                <img className="w-50" src="/assets/icon/Canera.png" alt=""></img>
                            </IonCol>
                            <IonCol size="9">
                                <button className="f-14 long-text b-500" id="tool-tip" color="light">Canera Bank</button><br />
                                <p className="ft-12 mb-0">Buy At : ₹2000 | Add Quantity : 150</p>
                            </IonCol>
                            <IonCol size="1" className="text-right">
                                <img className="logo-13" src="/assets/icon/navigate.svg" alt=""></img>
                            </IonCol>
                        </IonRow>

                        <IonRow className="w-100 mx-2 mb-2 p-2 border-style">
                            <IonCol size="2" className="company-logo text-center">
                                <img className="w-50" src="/assets/icon/Canera.png" alt=""></img>
                            </IonCol>
                            <IonCol size="9">
                                <button className="f-14 long-text b-500" id="tool-tip" color="light">Canera Bank</button><br />
                                <p className="ft-12 mb-0">Buy At : ₹2000 | Add Quantity : 150</p>
                            </IonCol>
                            <IonCol size="1" className="text-right">
                                <img className="logo-13" src="/assets/icon/navigate.svg" alt=""></img>
                            </IonCol>
                        </IonRow>

                        <IonRow className="w-100 mx-2 mb-2 p-2 border-style">
                            <IonCol size="2" className="company-logo text-center">
                                <img className="w-50" src="/assets/icon/Canera.png" alt=""></img>
                            </IonCol>
                            <IonCol size="9">
                                <button className="f-14 long-text b-500" id="tool-tip" color="light">Canera Bank</button><br />
                                <p className="ft-12 mb-0">Buy At : ₹2000 | Add Quantity : 150</p>
                            </IonCol>
                            <IonCol size="1" className="text-right">
                                <img className="logo-13" src="/assets/icon/navigate.svg" alt=""></img>
                            </IonCol>
                        </IonRow>

                        <IonCol size='9' className="ion-align-self-center">
                            <IonRow className='ion-justify-content-between'>
                                <IonCol size='6'>
                                    <IonButton className="w-100 mr-3">Cancel</IonButton>
                                </IonCol>
                                <IonCol size='6'>
                                    <IonButton className="w-100 ">Confirm</IonButton>
                                </IonCol>
                            </IonRow>


                        </IonCol>

                       {/* <IonButton className="cus-color mt-4" expand="full" >Login</IonButton>*/}

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
