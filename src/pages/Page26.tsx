import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonThumbnail, IonButton, IonInput, IonItem, IonSelect, IonSelectOption, IonRow, IonCol, IonFooter, IonAlert, IonGrid  } from '@ionic/react';
import React from 'react';
import './Page.css';
import axios from 'axios';
import { RouteComponentProps } from "react-router-dom";
export default class Page extends React.Component<RouteComponentProps<{}>,any> {

 

  constructor(props: RouteComponentProps<{}>)
    {
      super(props);
      this.state = {     
        risk_get: '',
        investment_get: 0,
        transactPopUp : false,

        RISK : '',
        INVESTMENT_AMOUNT : 0
      }
    }

    onChange = (_event : any) => {
      console.log(_event.detail.value);
      this.setState({
        RISK : _event.detail.value
      });
    };

    onChange2 = (_event2 : any) => {
      console.log(_event2.detail.value);
      this.setState({
        INVESTMENT_AMOUNT : _event2.detail.value
      });
    };




    datafetch() {

      axios.get('http://127.0.0.1:8000/restructure/',{
                        headers: {
                          'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`
                        }
                      }
                    )
                    .then(response =>{
                      console.log(response)
                      this.setState({risk_get : response.data['Risk']})
                      this.setState({investment_get : response.data['Investment_Amount']})

                      
                    })
                    .catch(error => {
                      console.log(error)
                  })

    }



    public dataRestructureUpdate() {

      fetch(`http://127.0.0.1:8000/restructure/`, {
          method: 'PUT',
          headers: {
            'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({risk_profile: this.state.RISK, investment_amount: this.state.INVESTMENT_AMOUNT})
        })
        .then( res => res.json())
        .then( res => {
          
          console.log("Restructure Update Successfully Sent");
        })
        .catch( () => console.log("Error"));
    
    };


    checkUser() {

      axios.get('http://127.0.0.1:8000/checkingnewuserexistinguser/',{
            headers: {
              'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`
            }
          }
        )
        .then(response =>{
          console.log(response)
          this.setState({CHECKUSER : response.data['Whether_NewUSer_Or_ExistingPortfolioUser']})
  
  

          if (this.state.CHECKUSER === 'user_without_portfolio_already_existing') {
  
  
            axios.get('http://127.0.0.1:8000/everydayfirsttimeuserportfolioreconstruction/',{
                  headers: {
                    'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`
                  }
                }
              )
              .then(response =>{
                console.log("Restructure done for user without portfolio already existing")
            
              })
              .catch(error => {
                console.log(error)
              })
  
            
  
          }
  

          else if (this.state.CHECKUSER === 'user_with_portfolio_already_existing') {
  
  
  
            axios.get('http://127.0.0.1:8000/everydayexistinguserportfolioreconstruction/',{
              headers: {
                'Authorization': `Token fee90488ee134b4f0596b998fc57c33ebd358f5a`
              }
            }
          )
          .then(response =>{
            console.log("Restructure done for user with portfolio already existing")
          
          })
          .catch(error => {
            console.log(error)
          })
  
          }
  
  
  
      })
    .catch(error => {
      console.log(error)
    })
  
  
} // checkUser() end
       
    componentDidMount() {
      
      this.datafetch();
      
    }

  render() {

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
  
           
         
            <img src="/assets/icon/chngep.svg" className="" alt=""></img>
            <IonRow className="px-7">
              <IonCol size="10">
                <p className="small-title asd"onClick={() => { console.log("OK"); this.props.history.push('/page/Page1'); } }  >Restructure</p>
              </IonCol>
              <IonCol size="2">
              <IonThumbnail>
                <IonButton onClick={() => this.setState({transactPopUp : true})} id="tool-tip" color="light" expand="block">?</IonButton>
                </IonThumbnail>
              </IonCol>
            </IonRow>
            <IonAlert
            isOpen={this.state.transactPopUp}
            onDidDismiss={() => this.setState({transactPopUp : false})}
            header={'Portfolio Details'}
            subHeader={'Description for current page'}
            message={'This is an alert message.'}
            buttons={['OK']}
          />
            <IonItem className="cus-input1 mb-12 p-2">
              <IonSelect placeholder="Risk" value={this.state.RISK} onIonChange={_e => this.onChange(_e)} className="pl-0 IonSelect ft-w" interface="popover">
                <IonSelectOption value="Conservative">Conservative</IonSelectOption>
                <IonSelectOption value="Moderate">Moderate</IonSelectOption>
                <IonSelectOption value="Aggressive">Aggressive</IonSelectOption>
              </IonSelect>
          </IonItem>
          <IonItem className="cus-input1 mb-12 ft-w p-2">            
              <IonInput placeholder="Enter Capital Amount" value={this.state.INVESTMENT_AMOUNT} onIonChange={_e => this.onChange2(_e)} type="number"></IonInput>
          </IonItem>
        

          <IonRow>
            <IonCol>
            <IonButton className="cus-color mt-4" onClick={() => { this.dataRestructureUpdate(); console.log("OK"); this.props.history.push('/page7/Page7'); } } >Update</IonButton>
            </IonCol>
            <IonCol>
            <IonButton className="cus-color mt-4" onClick={() => { this.checkUser(); console.log("OK"); this.props.history.push('/page7/Page7'); } } >Restructure</IonButton>
            </IonCol>
          </IonRow>


          <IonItem className="mb-12 mt-5">
              <IonRow className="w-100">
                <IonCol className="d-flex f-14 " size="12">
                  
                  <h6>Till now your risk profile is "{this.state.risk_get}" and investment amount is "{this.state.investment_get}"</h6>
                </IonCol>
              </IonRow>
            </IonItem>
            
          
          
       
          </IonContent>
  
      <IonFooter className="ion-no-border">
        <IonGrid className="text-center d-flex w-95 mt-10px">
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/home.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow  className="jc-footer">
              <p className=" mt-5px ft-13 b-500 ft-13"onClick={() => { console.log("OK"); this.props.history.push('/page30/Page30'); } } >Home</p>
            </IonRow>
          </IonCol>
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/news.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow  className="jc-footer">
              <p className=" mt-5px ft-13  ft-13" onClick={() => { console.log("OK"); this.props.history.push('/page7/Page7'); } }  >My Portfolio</p>
            </IonRow>
          </IonCol>
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/res.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow  className="jc-footer">
              <p className=" mt-5px ft-13  ft-13"onClick={() => { console.log("OK"); this.props.history.push('/page/Page1'); } }  >Restructure</p>
            </IonRow>
          </IonCol>
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/ale.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow  className="jc-footer">
              <p className=" mt-5px ft-13  ft-13"onClick={() => { console.log("OK"); this.props.history.push('/page10/Page1'); } }  >Alerts</p>
            </IonRow>
          </IonCol>
  
        </IonGrid>
    </IonFooter>
        </IonPage>
    );

  }


}


