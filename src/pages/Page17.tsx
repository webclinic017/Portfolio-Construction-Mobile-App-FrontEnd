  import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonThumbnail, IonButton,
IonInput, IonItem, IonRow, IonCol, IonFooter, IonAlert,
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
      stock_details : this.props.location.state,
      Price: "",
      transactPopUp : false,
      TRADEDETAILS : [],
      
      displayAddStock: false
    }

  }


  
  onChange3 = (_event3 : any) => {
    console.log(_event3.detail.value);
    this.setState({
      Price : _event3.detail.value
    });
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




        if (this.state.CHECKUSER === 'new_user_with_portfolio' || this.state.CHECKUSER === 'user_with_portfolio_already_existing') {
            this.setState({displayAddStock : true})
        }


        })
      .catch(error => {
        console.log(error)
      })


}

  datafetch() {
     
    axios.get('http://127.0.0.1:8000/traderegister/',{
                      headers: {
                        'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`
                      }
                    }
                  )
                  .then(response =>{
                    console.log(this.state.stock_details)
                    this.setState({TRADEDETAILS : response.data['TradeDetails']})
                  })
                  .catch(error => {
                    console.log(error)
                  })
  
  }
     
  componentDidMount() {
  
    this.datafetch();
    this.checkUser();
    
  }

  public dataPUTMyHoldingOrWatchlist() {


    fetch(`http://127.0.0.1:8000/traderegister/`, {
        method: 'PUT',
        headers: {
          'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({stock_name: (this.state.stock_details).split("$$")[0], 
        stock_quantity: (this.state.stock_details).split("$$")[1], price: this.state.Price })
      })
      .then( res => res.json())
      .then( res => {
        
        console.log("MyHolding Model Successfully Updated");
      })
      .catch( () => console.log("Error"));
  
  };


  render() {

    let {displayAddStock} = this.state
    

    const displayAdd = () => {
      if(displayAddStock) {
        return <IonButton className="cus-color mt-4" fill="outline"  expand="full">+ Add another Stock</IonButton>  
      }
    }
    


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
        
          <img src="/assets/icon/man.svg" className="" alt=""></img>
    
          <IonRow className="px-7">
                <IonCol size="10">
                  <p className="small-title asd">Stock Details</p>
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
                <IonInput placeholder="Select Company" value={(this.state.stock_details).split("$$")[0]} type="text"></IonInput>
                {/*<IonSelect placeholder="Select Company" value={this.state.Stocks} onIonChange={_e => this.onChange(_e)} className="pl-0 IonSelect ft-w" interface="action-sheet">
                  <IonSelectOption value="enable">Company 1</IonSelectOption>
                  <IonSelectOption value="mute">Company 2</IonSelectOption>
                  <IonSelectOption value="mute_week">Company 3</IonSelectOption>
                  {this.state.TRADEDETAILS.map((art: any) => (<IonSelectOption value={art.stock_name}>{art.stock_name}</IonSelectOption>) )}
                </IonSelect>*/}
            </IonItem>
            <IonItem className="cus-input1 mb-12 ft-w p-2">            
                <IonInput placeholder="Enter Quantity" value={(this.state.stock_details).split("$$")[1]} type="number"></IonInput>
            </IonItem>
            <IonItem className="cus-input1 mb-12 ft-w p-2">            
                <IonInput placeholder="Enter Price" value={this.state.Price} onIonChange={e => this.onChange3(e)} type="number"></IonInput>
            </IonItem>
              
              {
                displayAdd()
              }    
         
            <IonButton onClick={e => this.dataPUTMyHoldingOrWatchlist()} className="cus-color mt-4"   expand="full">Submit</IonButton>

              <p className="small-title asd">Recommended Price : {(this.state.stock_details).split("$$")[2]}</p>    
    
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

