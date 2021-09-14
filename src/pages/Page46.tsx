import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonRow, IonCol, IonFooter, IonGrid,
IonProgressBar } from '@ionic/react';
import React from 'react';
import './Page.css';
import { RouteComponentProps } from "react-router-dom";
import axios from 'axios';
import { CreateAnimation } from '@ionic/react';
  
export default class Page extends React.Component<RouteComponentProps<{}>,any> {

  constructor(props: any)
  {
    super(props);
    this.state = {
      EQUITY_WEIGHTAGE : 0,
      FIXEDINCOME_WEIGHTAGE : 0,
      NUMBER_OF_STOCKS : 0,
      SMALL_CAP : 0,
      MID_CAP : 0,
      LARGE_CAP : 0,

      TOKEN_NAME: localStorage.getItem("MR_Token") 
    
    }
  }

  componentDidMount() {
  
      axios.get('http://127.0.0.1:8000/finaldiversification/',{
          headers: {
            'Authorization': `Token ${this.state.TOKEN_NAME}`,
          }
        }
      )
      .then(response =>{
        console.log(response)
        this.setState({EQUITY_WEIGHTAGE : response.data['Equity_weightage_clientchoice_final']})
        this.setState({FIXEDINCOME_WEIGHTAGE : response.data['Debt_weightage_clientchoice_final']})
        this.setState({NUMBER_OF_STOCKS : response.data['No_of_stock_final']})
        this.setState({SMALL_CAP : response.data['Smallcap_weightage_clientchoice_final']})
        this.setState({MID_CAP : response.data['Midcap_weightage_clientchoice_final']})
        this.setState({LARGE_CAP : response.data['Largecap_weightage_clientchoice_final']})

        
      })
      .catch(error => {
        console.log(error)
      })
    
  }
  
  render() {

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
        
        <img src="/assets/icon/Constructing.svg" className="" alt=""></img>
        <IonProgressBar color="primary" value={0.5}></IonProgressBar>
  
          
    
        <IonRow className="px-7">
              <IonCol size="12">
                <p className="small-title asd">1. Stock distribution </p>
              </IonCol>
        
            </IonRow>
            <IonRow>
              <IonCol size="2"></IonCol>
              <IonCol size="4" className="cuscorner">
              <CreateAnimation
                duration={1500}
                //iterations={Infinity}
                fromTo={[
                  { property: 'transform', fromValue: 'translateX(0px)', toValue: 'translateX(100px)' },
                  { property: 'opacity', fromValue: '0.2', toValue: '1' }
                ]}
              >
              <svg xmlns="http://www.w3.org/2000/svg" className="ts-8" width="114" height="90" viewBox="0 0 137 130">
                <g id="equity-count" transform="translate(-6245 -4136)">
                  <rect id="Rectangle_606" data-name="Rectangle 606" width="127" height="127" rx="10" transform="translate(6245 4136)" fill="#fff"/>
                  <g id="Group_840" data-name="Group 840" transform="translate(1 -13)">
                    <text id="Equity" transform="translate(6326 4273)" fill="#262626" font-size="20" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="-27.827" y="0">Equity</tspan></text>
                    <text id="_50_" data-name="50%" transform="translate(6326 4238)" fill="#4fcaae" font-size="58" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="-54.687" y="0">{this.state.EQUITY_WEIGHTAGE}%</tspan></text>
                  </g>
                </g>
              </svg>
                {/*<img src="/assets/icon/equity-count.svg" className="" alt=""></img>*/}
              </CreateAnimation>  
              </IonCol>
              <IonCol size="4" className="cuscorner ml-1010">
              <svg xmlns="http://www.w3.org/2000/svg" className="ts-8" width="114" height="90" viewBox="0 0 137 130">
                <g id="fixed-count" transform="translate(-6245 -4136)">
                  <rect id="Rectangle_606" data-name="Rectangle 606" width="127" height="127" rx="10" transform="translate(6245 4136)" fill="#fff"/>
                  <g id="Group_840" data-name="Group 840" transform="translate(1 -13)">
                    <text id="Fixed_Income" data-name="Fixed Income" transform="translate(6326 4273)" fill="#262626" font-size="20" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="-60.098" y="0">Fixed Income</tspan></text>
                    <text id="_50_" data-name="50%" transform="translate(6326 4238)" fill="#4fcaae" font-size="58" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="-54.687" y="0">{this.state.FIXEDINCOME_WEIGHTAGE}%</tspan></text>
                  </g>
                </g>
              </svg>
                {/*<img src="/assets/icon/fixed-count.svg" className="" alt=""></img>*/}
              </IonCol>
              <IonCol size="2"></IonCol>
            </IonRow>
            <IonRow className="px-7">
              <IonCol size="12">
                <p className="small-title asd">2. Number of stocks</p>
              </IonCol>
        
            </IonRow>
            <IonRow>
              <IonCol size="4"></IonCol>
              <IonCol size="4" className="cuscorner">
              <svg xmlns="http://www.w3.org/2000/svg" className="ts-8" width="114" height="90" viewBox="0 0 137 130">
                <g id="stocks" transform="translate(-6245 -4136)">
                  <rect id="Rectangle_606" data-name="Rectangle 606" width="127" height="127" rx="10" transform="translate(6245 4136)" fill="#fff"/>
                  <g id="Group_840" data-name="Group 840" transform="translate(1 -13)">
                    <text id="Total_Stocks" data-name="Total Stocks" transform="translate(6326 4273)" fill="#262626" font-size="20" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="-55.439" y="0">Total Stocks</tspan></text>
                    <text id="_50" data-name="50" transform="translate(6326 4238)" fill="#4fcaae" font-size="58" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="-33.276" y="0">{this.state.NUMBER_OF_STOCKS}</tspan></text>
                  </g>
                </g>
              </svg>
                {/*<<img src="/assets/icon/stocks.svg" className="" alt=""></img>*/}
              </IonCol>
              <IonCol size="4"></IonCol>
            </IonRow>
  
            <IonRow className="px-7">
              <IonCol size="12">
                <p className="small-title asd">3. Market cap allocation</p>
              </IonCol>
        
            </IonRow>
            <IonRow className="pl-30">
              
              <IonCol size="3" className="cuscorner">
              <svg xmlns="http://www.w3.org/2000/svg" className="ts-8" width="74" height="80" viewBox="0 0 137 130">
                <g id="small_cap" data-name="small cap" transform="translate(-6245 -4136)">
                  <rect id="Rectangle_606" data-name="Rectangle 606" width="127" height="127" rx="10" transform="translate(6245 4136)" fill="#fff"/>
                  <g id="Group_840" data-name="Group 840" transform="translate(1 -13)">
                    <text id="Small_Cap-2" data-name="Small Cap" transform="translate(6326 4273)" fill="#262626" font-size="20" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="-45.493" y="0">Small Cap</tspan></text>
                    <text id="_50_" data-name="50%" transform="translate(6326 4238)" fill="#4fcaae" font-size="58" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="-54.687" y="0">{this.state.SMALL_CAP}%</tspan></text>
                  </g>
                </g>
              </svg>
                {/*<<img src="/assets/icon/small cap.svg" className="" alt=""></img>*/}
              </IonCol>
              <IonCol size="1"></IonCol>
              <IonCol size="3" className="cuscorner">
              <svg xmlns="http://www.w3.org/2000/svg" className="ts-8" width="74" height="80" viewBox="0 0 137 130">
                <g id="mid_cap" data-name="mid cap" transform="translate(-6245 -4136)">
                  <rect id="Rectangle_606" data-name="Rectangle 606" width="127" height="127" rx="10" transform="translate(6245 4136)" fill="#fff"/>
                  <g id="Group_840" data-name="Group 840" transform="translate(1 -13)">
                    <text id="Mid_Cap-2" data-name="Mid Cap" transform="translate(6326 4273)" fill="#262626" font-size="20" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="-37.07" y="0">Mid Cap</tspan></text>
                    <text id="_50_" data-name="50%" transform="translate(6326 4238)" fill="#4fcaae" font-size="58" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="-54.687" y="0">{this.state.MID_CAP}%</tspan></text>
                  </g>
                </g>
              </svg>
                {/*<img src="/assets/icon/mid cap.svg" className="" alt=""></img>*/}
              </IonCol>
              <IonCol size="1"></IonCol>
              <IonCol size="3" className="cuscorner">
              <svg xmlns="http://www.w3.org/2000/svg" className="ts-8" width="74" height="80" viewBox="0 0 137 130">
                <g id="large_cap" data-name="large cap" transform="translate(-6245 -4136)">
                  <rect id="Rectangle_606" data-name="Rectangle 606" width="127" height="127" rx="10" transform="translate(6245 4136)" fill="#fff"/>
                  <g id="Group_840" data-name="Group 840" transform="translate(1 -13)">
                    <text id="Large_Cap-2" data-name="Large Cap" transform="translate(6326 4273)" fill="#262626" font-size="20" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="-45.469" y="0">Large Cap</tspan></text>
                    <text id="_50_" data-name="50%" transform="translate(6326 4238)" fill="#4fcaae" font-size="58" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="-54.687" y="0">{this.state.LARGE_CAP}%</tspan></text>
                  </g>
                </g>
              </svg>
  
                {/*<img src="/assets/icon/large cap.svg" className="" alt=""></img>*/}
              </IonCol>
            </IonRow>
  
            <IonRow className="px-7">
              <IonCol size="12">
                <p className="small-title asd">4. Selecting Best Businesses  </p>
              </IonCol>
        
            </IonRow>
            <IonRow>
          <IonCol size="1"></IonCol>
          <IonCol size="5">
            <IonButton className="cus-color mt-4 w-90 pi f-15 " fill="outline" onClick={() => { console.log("OK"); this.props.history.push(''); } } >Edit</IonButton>
          </IonCol>
          <IonCol size="5">
            <IonButton className="cus-color mt-4 w-90 pi f-15 "  onClick={() => { console.log("OK"); this.props.history.push(''); } } >Next</IonButton>
          </IonCol>
          <IonCol size="1"></IonCol>
        </IonRow>
            
            {/* <IonItem className="cus-input1 mb-12 ">
            <IonCol className="f-14" size="6">
              <p>Small Cap</p>
            </IonCol>
            <IonCol size="6" className="text-right">
              <h5 className="main-color">53</h5> 
            </IonCol>
          </IonItem>
          <IonItem className="cus-input1 mb-12 ">
            <IonCol className="f-14" size="6">
              <p>Mid Cap</p>
            </IonCol>
            <IonCol size="6" className="text-right">
              <h5 className="main-color">53</h5> 
            </IonCol>
          </IonItem>
          <IonItem className="cus-input1 mb-12 ">
            <IonCol className="f-14" size="6">
              <p>Large Cap</p>
            </IonCol>
            <IonCol size="6" className="text-right">
              <h5 className="main-color">53</h5> 
            </IonCol>
          </IonItem> */}
        </IonContent>
        <IonFooter className="ion-no-border">
        
        
        <IonGrid className="text-center d-flex w-95 mt-10px">
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/home.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow className="jc-footer">
              <p className=" mt-5px ft-13 b-500 ft-13" onClick={() => { console.log("OK"); this.props.history.push('/page30/Page30'); } } >Home</p>
            </IonRow>
          </IonCol>
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/news.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow className="jc-footer">
              <p className=" mt-5px ft-13" onClick={() => { console.log("OK"); this.props.history.push('/page7/Page7'); } }  >My Portfolio</p>
            </IonRow>
          </IonCol>
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/res.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow className="jc-footer">
              <p className=" mt-5px ft-13"onClick={() => { console.log("OK"); this.props.history.push('/page26/Page26'); } }  >Restructure</p>
            </IonRow>
          </IonCol>
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/ale.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow className="jc-footer">
              <p className=" mt-5px ft-13"onClick={() => { console.log("OK"); this.props.history.push('/page10/Page1'); } }  >Alerts</p>
            </IonRow>
          </IonCol>
  
        </IonGrid>
      </IonFooter>
  
      </IonPage>
      );

  }



};

