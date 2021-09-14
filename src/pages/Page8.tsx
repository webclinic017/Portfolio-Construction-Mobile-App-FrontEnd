import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonThumbnail, IonButton,
  IonItem, IonRow, IonCol, IonFooter, IonAlert, IonSelect, IonSelectOption,IonInput,
  IonGrid} from '@ionic/react';
  import React from 'react';
  import './Page.css';
  import { RouteComponentProps } from "react-router-dom";
  import axios from 'axios';
  
  export default class Page extends React.Component<RouteComponentProps<{}>,any> {
  
    constructor(props: any)
    {
      super(props);
      this.state = {
        Risk: "",
        NatureOfInvestment : "", 
        Deposite: "",
        Withdrawal: "",
        NextInvestmentAfter: "",
        transactPopUp : false,
        selectedFile: ""
      
      }
  
    } 
  
    onChange = (_event : any) => {
      console.log(_event.detail.value);
      this.setState({
        Risk : _event.detail.value
      });
    };
  
    onChange2 = (_event2 : any) => {
      console.log(_event2.detail.value);
      this.setState({
        NatureOfInvestment : _event2.detail.value
      });
    };
  
    onChange3 = (_event3 : any) => {
      console.log(_event3.detail.value);
      this.setState({
        Deposite : _event3.detail.value
      });
    };
  
    onChange4 = (_event4 : any) => {
      console.log(_event4.detail.value);
      this.setState({
        Withdrawal : _event4.detail.value
      });
    };
  
    onChange5 = (_event5 : any) => {
      console.log(_event5.detail.value);
      this.setState({
        NextInvestmentAfter : _event5.detail.value
      });
    };
  
    onFileChange = (event:any) => { 
      console.log("helloworld");
      // Update the state 
      this.setState({ selectedFile: event.target.files[0] }); 
     
    };
  
    // On file upload (click the upload button) 
    onFileUpload = () => { 
       
      // Create an object of formData 
      const formData = new FormData(); 
     
      // Update the formData object 
      formData.append( 
        "myFile", 
        this.state.selectedFile
        //this.state.selectedFile.name 
      ); 
     
      // Details of the uploaded file 
      console.log(this.state.selectedFile); 
     
      // Request made to the backend api 
      // Send formData object 
      
    
  }
  
  public dataPost() {
    const formData = new FormData();
    formData.append('risk', this.state.Risk);
    formData.append('nature_of_investment', this.state.NatureOfInvestment);
    formData.append('deposit', this.state.Deposite);
    formData.append('withdrawal', this.state.Withdrawal);
    formData.append('next_investment_after', this.state.NextInvestmentAfter);
    formData.append('portfolio_file', this.state.selectedFile);
  
    fetch(`http://127.0.0.1:8000/existingportfolioupload/`, {
        method: 'POST',
        headers: {
          'Authorization': `Token fee90488ee134b4f0596b998fc57c33ebd358f5a`,
          
        },
        body: formData
      })

      .catch( () => console.log("Error"));
  
  };

  public FinalDiversificationStructureDatabaseCreationForExistingPortfolio() {

    axios.get('http://127.0.0.1:8000/finaldiversificationdatabasecreateforexistingportfolio/',{
          headers: {
            'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`
          }
        }
      )
      .then(response =>{
        console.log(response)
  
      })
      .catch(error => {
        console.log(error)
      })
  
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
          
            <img src="/assets/icon/upload.svg" className="" alt=""></img>
      
            <IonRow className="px-7">
                  <IonCol size="10">
                    <p className="small-title asd">Download Excel file</p>
                  </IonCol>
                  <IonCol size="2">
                  <IonThumbnail>
                    <IonButton onClick={() => this.setState({transactPopUp : true})} id="tool-tip" color="light" expand="block"> <img src="/assets/icon/download.svg" className="" alt=""></img></IonButton>
                    </IonThumbnail>
                  </IonCol>
                </IonRow>
                <IonAlert
                isOpen={this.state.transactPopUp}
                onDidDismiss={() => this.setState({transactPopUp : false})}
                header={'File Downloaded'}
                subHeader={'Description for current page'}
                message={'This is an alert message.'}
                buttons={['OK']}
              />
  
            <IonItem className="cus-input1 mb-12 p-2">
                <IonSelect placeholder="Risk" value={this.state.Risk} onIonChange={_e => this.onChange(_e)} className="pl-0 IonSelect ft-w" interface="popover">
                  <IonSelectOption value="Conservative">Conservative</IonSelectOption>
                  <IonSelectOption value="Moderate">Moderate</IonSelectOption>
                  <IonSelectOption value="Aggresive">Aggressive</IonSelectOption>
                </IonSelect>
            </IonItem>
  
            
  
            <IonItem className="cus-input1 mb-12 p-2">
                <IonSelect placeholder="Nature of Investment" value={this.state.NatureOfInvestment} onIonChange={_e => this.onChange2(_e)} className="pl-0 IonSelect ft-w" interface="popover">
                  <IonSelectOption value="One time">One time</IonSelectOption>
                  <IonSelectOption value="Sip">Sip</IonSelectOption>
                </IonSelect>
            </IonItem>
  
            <IonItem className="cus-input1 mb-12 ft-w p-2">            
                <IonInput placeholder="Enter Deposite Amount" value={this.state.Deposite} onIonChange={e => this.onChange3(e)}></IonInput>
            </IonItem>
  
            <IonItem className="cus-input1 mb-12 ft-w p-2">            
                <IonInput placeholder="Enter Withdrawal Amount" value={this.state.Withdrawal} onIonChange={e => this.onChange4(e)}></IonInput>
            </IonItem>
  
            <IonItem className="cus-input1 mb-12 p-2">
                <IonSelect placeholder="Next investment after" value={this.state.NextInvestmentAfter} onIonChange={_e => this.onChange5(_e)} className="pl-0 IonSelect ft-w" interface="popover">
                  <IonSelectOption value="1 Months">1 Months</IonSelectOption>
                  <IonSelectOption value="3 Months">3 Months</IonSelectOption>
                  <IonSelectOption value="6 Months">6 Months</IonSelectOption>
                  <IonSelectOption value="1 Year">1 Year</IonSelectOption>
                </IonSelect>
            </IonItem>
  
            <IonItem className="cus-input1 mb-12 mt-5">
              {/* <IonCol className="d-flex f-14" size="1">
                <img src="/assets/icon/file.svg" className="" alt=""></img>
              </IonCol>
              <IonCol className="d-flex f-14" size="6">
                <p>File1.xlx</p>
                <p></p>
              </IonCol>
              <IonCol size="5" className="f-14 text-right danger-color">
                <p><span className="light">2.3mb </span><span className="danger-color">Delete</span></p>
              </IonCol> */}
              <input type="file" onChange={this.onFileChange} /> 
              
            </IonItem>
            <p className="text-center f-14">We've found total of 124 stocks</p>
  
            <IonRow className="mt-20">
              <IonCol size="1"></IonCol>
              <IonCol size="5">
                <IonButton className="cus-color mt-4 w-90 pi f-15 " fill="outline">Add Manually</IonButton>
              </IonCol>
              <IonCol size="5">
                <IonButton onClick={e => this.dataPost()} className="cus-color mt-4 w-90 pi f-15 ">Upload</IonButton>
              </IonCol>
              <IonCol size="1"></IonCol>
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
        
  
    }
    
  
  
  
  
  
  }
  
  