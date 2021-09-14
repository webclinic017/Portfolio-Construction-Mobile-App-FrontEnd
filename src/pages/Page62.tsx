import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonThumbnail, IonButton,
    IonInput, IonItem, IonSelect, IonSelectOption, IonRow, IonCol, IonFooter, IonAlert,
    IonGrid} from '@ionic/react';
    import React from 'react';
    import axios from 'axios';
    import './Page.css';
    import { RouteComponentProps } from "react-router-dom";
    
    export default class Page extends React.Component<RouteComponentProps<{}>,any> {
    
      constructor(props: RouteComponentProps<{}>)
      {
        super(props);
        this.state = {
          transactPopUp : false,
          Stocks: "",
          Quantity: "",
          Price: "",
          TRADEDETAILS : [],
        }
    
      }
    
      onChange = (_event : any) => {
        console.log(_event.detail.value);
        this.setState({
          Stocks : _event.detail.value
        });
      };
    
      onChange2 = (_event2 : any) => {
        console.log(_event2.detail.value);
        this.setState({
          Quantity : _event2.detail.value
        });
      };
      
      onChange3 = (_event3 : any) => {
        console.log(_event3.detail.value);
        this.setState({
          Price : _event3.detail.value
        });
      };
    
      datafetch() {
         
        axios.get('http://127.0.0.1:8000/traderegisterfi/',{
                          headers: {
                            'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`
                          }
                        }
                      )
                      .then(response =>{
                        console.log(response)
                        this.setState({TRADEDETAILS : response.data['TradeDetails']})
                      })
                      .catch(error => {
                        console.log(error)
                      })
      
      }
         
      componentDidMount() {
      
        this.datafetch()
        
      }
    
      public dataPUTMyHoldingOrWatchlist() {
    
        fetch(`http://127.0.0.1:8000/traderegisterfi/`, {
            method: 'PUT',
            headers: {
              'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({stock_name: this.state.Stocks, stock_quantity: this.state.Quantity, price: this.state.Price })
          })
          .then( res => res.json())
          .then( res => {
            
            console.log("Fixed Income MyHolding Model Successfully Updated");
          })
          .catch( () => console.log("Error"));
      
      };

      public dataPOSTMyHoldingOrWatchlist() {
    
        fetch(`http://127.0.0.1:8000/traderegisterfi/`, {
            method: 'POST',
            headers: {
              'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({fixed_income_name: this.state.Stocks, fixed_income_price: this.state.Price , fixed_income_quantity: this.state.Quantity })
          })
          .then( res => res.json())
          .then( res => {
            
            console.log("Fixed Income Successfully Created");
          })
          .catch( () => console.log("Error"));
      
      };
    
    
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
            
              <img src="/assets/icon/manfi.svg" className="" alt=""></img>
        
              <IonRow className="px-7">
                    <IonCol size="10">
                      <p className="small-title asd">FI Details</p>
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
                  header={'Stock Details'}
                  subHeader={'Description for current page'}
                  message={'This is an alert message.'}
                  buttons={['OK']}
                />
                  <IonItem className="cus-input1 mb-12 p-2">
                    <IonSelect placeholder="Select Company" value={this.state.Stocks} onIonChange={_e => this.onChange(_e)} className="pl-0 IonSelect ft-w" interface="action-sheet">
                      {/*<IonSelectOption value="enable">Company 1</IonSelectOption>
                      <IonSelectOption value="mute">Company 2</IonSelectOption>
                      <IonSelectOption value="mute_week">Company 3</IonSelectOption>*/}
                      {this.state.TRADEDETAILS.map((art: any) => (<IonSelectOption value={art.stock_name}>{art.stock_name}</IonSelectOption>) )}
                    </IonSelect>
                </IonItem>
                <IonItem className="cus-input1 mb-12 ft-w p-2">            
                    <IonInput placeholder="Enter Quantity" value={this.state.Quantity} onIonChange={_e => this.onChange2(_e)} type="number"></IonInput>
                </IonItem>
                <IonItem className="cus-input1 mb-12 ft-w p-2">            
                    <IonInput placeholder="Enter Price" value={this.state.Price} onIonChange={e => this.onChange3(e)} type="number"></IonInput>
                </IonItem>
                  
                <IonButton onClick={e => this.dataPOSTMyHoldingOrWatchlist()} className="cus-color mt-4" fill="outline"  expand="full">+ Add another FI</IonButton>     
             
                <IonButton onClick={e => this.dataPUTMyHoldingOrWatchlist()} className="cus-color mt-4"   expand="full">Submit</IonButton>     
        
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
      }
      
      
    
    
    }
    
    