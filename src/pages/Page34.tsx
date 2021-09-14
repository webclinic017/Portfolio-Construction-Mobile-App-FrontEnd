import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonRow, IonCol, IonFooter,IonGrid } from '@ionic/react';
import React from 'react';

import './Page.css';

import { RouteComponentProps } from "react-router-dom";
import {Doughnut} from 'react-chartjs-2';
const state = {
labels: ['January', 'February'],
datasets: [
{
label: 'Rainfall',
backgroundColor: [
'#FFCB39',
'#344ADE'
],
hoverBackgroundColor: [
'#FFCB39',
'#344ADE'
],
data: [80, 20]
}
]
}
const Page: React.FC<RouteComponentProps> = (props) => {



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
        <img src="/assets/icon/performance.svg" className="" alt=""></img>


        <IonItem className="cus-input1 mb-12 mt-5">
          <IonRow className="w-100 text-center jc1">
            <IonCol className="d-flex f-14 jc1" size="12">
              <h6 className="text-center mb-0">No. of stocks that easyvest was bullish on</h6>
            </IonCol>
            <IonCol size="12" className="d-flex f-14 jc1 pt-0">
              <h1 className="text-center main-color mt-0">40,000</h1>
            </IonCol>


          </IonRow>
        </IonItem>
        <Doughnut data={state} options={{
            title:{
              display:true,
              text:'',
              fontSize:5
            },
            legend:{
              display:false,
              position:'right'
            }
          }} />
        <IonItem className="cus-input1 mb-12 mt-5">
          <IonRow className="w-100">
            <IonCol size="1">
              <img className="svg1" src="/assets/icon/yellow.svg" alt=""></img>
            </IonCol>
            <IonCol className=" f-14" size="5">
              <p className="">With positive return</p>
            </IonCol>
            <IonCol size="6" className="text-right">
              <h5 className="main-color">50%</h5>
            </IonCol>
          </IonRow>
        </IonItem>
        <IonItem className="cus-input1 mb-12 mt-5">
          <IonRow className="w-100">
            <IonCol size="1">
              <img className="svg1 svg2" src="/assets/icon/blue.png" alt=""></img>
            </IonCol>
            <IonCol className=" f-14" size="7">
              <p className="">With negative return</p>
            </IonCol>
            <IonCol size="4" className="text-right">
              <h5 className="main-color">25%</h5>
            </IonCol>
          </IonRow>
        </IonItem>
        <IonItem className="cus-input1 mb-12 mt-5">
          <IonRow className="w-100">
            <IonCol size="1">

            </IonCol>
            <IonCol className=" f-14" size="5">
              <p className="">Average return</p>
            </IonCol>
            <IonCol size="6" className="text-right">
              <h5 className="main-color">25%</h5>
            </IonCol>
          </IonRow>
        </IonItem>
        <h6 className="pl-22 mb-0">Historical</h6>
        <div className="d-flex text-center jc">
          <p className="f-14 select-timeline">1Y</p>
          <p className="f-14 not-select-timeline">3Y</p>
          <p className="f-14 not-select-timeline">5Y</p>
        </div>
        <IonItem className="cus-input1 mb-12 mt-5 ">
          <IonCol className="d-flex f-14" size="6">
            <p>Profit</p>
          </IonCol>
          <IonCol size="6" className="text-right">
            <h5 className="main-color">+ ₹32,000</h5>
          </IonCol>


        </IonItem>
        <IonItem className="cus-input1 mb-12 mt-5">

          <IonCol className="d-flex f-14" size="8">
            <p>Profit Percentage </p>
          </IonCol>
          <IonCol size="4" className="text-right">
            <h5 className="main-color">+ 12%</h5>
          </IonCol>
        </IonItem>
        <IonItem className="cus-input1 mb-12 mt-5">

          <IonCol className="d-flex f-14" size="12">
            <p><b>Note</b> : Backtested returns are not indicative or prefer live</p>
          </IonCol>

        </IonItem>

        <div className="d-flex text-center jc">
          <p className="f-14 select-timeline">1M</p>
          <p className="f-14 not-select-timeline">3M</p>
          <p className="f-14 not-select-timeline">Till Date</p>
        </div>
        
        <IonItem className="cus-input1 mb-12 mt-5 ">
          <IonCol className="d-flex f-14" size="6">
            <p>Live Profit</p>
          </IonCol>
          <IonCol size="6" className="text-right">
            <h5 className="main-color">+ ₹32,000</h5>
          </IonCol>


        </IonItem>
        <IonItem className="cus-input1 mb-12 mt-5">

          <IonCol className="d-flex f-14" size="8">
            <p>Live Profit in Percentage </p>
          </IonCol>
          <IonCol size="4" className="text-right">
            <h5 className="main-color">+ 12%</h5>
          </IonCol>
        </IonItem>

        <h6 className="pl-22 mb-0">Comparative</h6>

        <IonItem className="cus-input1 mb-12 mt-5 ">
          <IonCol className="d-flex f-14" size="6">
            <p>Easyvest</p>
          </IonCol>
          <IonCol size="6" className="text-right">
            <h5 className="main-color">+ ₹32,000</h5>
          </IonCol>


        </IonItem>
        <IonItem className="cus-input1 mb-12 mt-5">

          <IonCol className="d-flex f-14" size="8">
            <p>M.F. </p>
          </IonCol>
          <IonCol size="4" className="text-right">
            <h5 className="main-color">+ 12%</h5>
          </IonCol>
        </IonItem>
        <IonItem className="cus-input1 mb-12 mt-5">

          <IonCol className="d-flex f-14" size="8">
            <p>Index</p>
          </IonCol>
          <IonCol size="4" className="text-right">
            <h5 className="main-color">+ 12%</h5>
          </IonCol>
        </IonItem>
        <IonItem className="cus-input1 mb-12 mt-5">

          <IonCol className="d-flex f-14" size="8">
            <p>F.D.</p>
          </IonCol>
          <IonCol size="4" className="text-right">
            <h5 className="main-color">+ 12%</h5>
          </IonCol>
        </IonItem>

      </IonContent>
      <IonFooter className="ion-no-border">
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
              <p className=" mt-5px ft-13" onClick={()=> { console.log("OK"); props.history.push('/page7/Page7'); } }
                >My Portfolio</p>
            </IonRow>
          </IonCol>
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/res.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow className="jc-footer">
              <p className=" mt-5px ft-13" onClick={()=> { console.log("OK"); props.history.push('/page26/Page26'); } }
                >Restructure</p>
            </IonRow>
          </IonCol>
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/ale.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow className="jc-footer">
              <p className=" mt-5px ft-13" onClick={()=> { console.log("OK"); props.history.push('/page10/Page1'); } }
                >Alerts</p>
            </IonRow>
          </IonCol>

        </IonGrid>
      </IonFooter>

    </IonPage>
    );
    };

    export default Page;