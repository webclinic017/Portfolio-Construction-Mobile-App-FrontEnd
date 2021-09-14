import { IonGrid, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonThumbnail, IonButton, IonInput, IonItem, IonRow, IonCol, IonAlert, IonIcon } from '@ionic/react';
import React from 'react';
import './Page.css';
import './Page37.css';
import { RouteComponentProps, Redirect } from "react-router-dom";
import { logoFacebook, logoGoogle} from 'ionicons/icons';
import firebase from '../firebaseConfig';
//import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

export default class Page extends React.Component<RouteComponentProps<{}>,any> {

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  constructor(props: RouteComponentProps<{}>)
  {
    super(props);
    this.state = {
      transactPopUp : false,
    
      USERNAME: "",
      PASSWORD: "",
      isSignedIn: false,
      isSignedInGoogle: false,


      flafForLogin: false
    
    };


  }

  // componentDidMount = () => {
  //   firebase.auth().onAuthStateChanged(user => {
  //     this.setState({ isSignedIn: !!user })
  //     console.log("user", user)
  //   })
  // }

  onChange = (_event : any) => {
    console.log(_event.detail.value);
    this.setState({
      USERNAME : _event.detail.value
    });
  };
  
  onChange2 = (_event2 : any) => {
    console.log(_event2.detail.value);
    this.setState({
      PASSWORD : _event2.detail.value
    });
  };

  public dataPostforLogin() {

    fetch(`http://127.0.0.1:8000/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: this.state.USERNAME, password: this.state.PASSWORD})
      })
      .then( res => res.json())
      .then( res => {
        console.log(res['message'])
        if(res['message'] === "successfully logged In"){
          console.log("successloggin")
          
        
          localStorage.setItem("MR_Token", res["token"]);
          this.setState({flafForLogin : true})
          
        }
        
        console.log("Login Succesfull");
      })
      .catch( () => console.log("Error"));
  
  };


  public LoginFacebook() {

          var provider = new firebase.auth.FacebookAuthProvider();

          firebase.auth().signInWithPopup(provider)
          .then((result) => {
              //var token = result.credential.accessToken;
              var user = result.user;
              this.setState({isSignedIn : true})
              //console.log(token)
              console.log(user)
              this.props.history.push('/page/Page1');
          }).catch((error) => {
              console.log(error.code);
              console.log(error.message);
          });
    
  };

  public facebookSignout() {
    firebase.auth().signOut()
    
    .then(function() {
       console.log('Signout successful!')
    }, function(error) {
       console.log('Signout failed')
    });
 }


 public LoginGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth()
   
   .signInWithPopup(provider).then((result) => {
      //let token = result.credential.accessToken;
      //var user = result.credential;
      var credential = result.credential as firebase.auth.OAuthCredential;
      var token = credential.accessToken
      console.log(token)
      this.props.history.push('/page/Page1');
   }).catch((error)=>{
      
		
      console.log(error.code)
      console.log(error.message)
   });
 }

 public googleSignout() {
  firebase.auth().signOut()
 
  .then(function() {
     console.log('Signout Succesfull')
  }, function(error) {
     console.log('Signout Failed')  
  });
}

  render() {


    let {isSignedIn} = this.state
    let {isSignedInGoogle} = this.state
    let {flafForLogin} = this.state

    const LogIN = ()=>{
    if(flafForLogin){
      return <Redirect to="/page/Page1"></Redirect>
    }

  }





    const renderAuthButton = ()=>{
      if(isSignedIn){
        return <Redirect to="/page/Page1"></Redirect>
      } 
    }

    const renderSignOut = ()=>{
      if(isSignedIn){
        return <IonButton className="cus-color mt-4" expand="full" onClick={() => { this.facebookSignout()  } } >SignOut</IonButton>
      } 
    }


    const renderAuthButtonGoogle = ()=>{
      if(isSignedInGoogle){
        return <Redirect to="/page/Page1"></Redirect>
      } 
    }

    const renderSignOutGoogle = ()=>{
      if(isSignedInGoogle){
        return <IonButton className="cus-color mt-4" expand="full" onClick={() => { this.googleSignout()  } } >SignOut</IonButton>
      } 
    }

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
  
           
         
            <img src="/assets/icon/login.svg" className="" alt=""></img>
            <IonRow className="px-7">
              <IonCol size="10">
                <p className="small-title asd">Login </p>
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
            header={'Login'}
            subHeader={'Description for current page'}
            message={'This is an alert message.'}
            buttons={['OK']}
          />
            
          <IonItem className="cus-input1 mb-12 ft-w p-2">            
              <IonInput placeholder="Enter username" value={this.state.USERNAME} onIonChange={_e => this.onChange(_e)}></IonInput>
            </IonItem>
            <IonItem className="cus-input1 mb-12 ft-w p-2">            
              <IonInput placeholder="Enter your password" type="password" value={this.state.PASSWORD} onIonChange={_e => this.onChange2(_e)}></IonInput>
            </IonItem>
            
            
          <IonButton className="cus-color mt-4" expand="full" onClick={() => { console.log("OK"); this.dataPostforLogin() } } >Login</IonButton>
          <p className="small-title asd main-color text-center">Forget password ? </p>

          <div>
          <p className="small-title asd main-color1 text-center">or login with </p>
            <IonGrid className="text-center d-flex w-95 mt-10px">
              <IonCol size="3">
              </IonCol>
              <IonCol size="3">
                <IonRow >
                  <IonButton class="google" onClick={()=>{this.LoginGoogle(); }}> 
                    <IonIcon  icon={logoGoogle} slot="icon-only"></IonIcon>
                  </IonButton>
                </IonRow>
              </IonCol>
              <IonCol size="3">
                <IonRow >
                  <IonButton class="facebook" onClick={()=>{console.log("facebook"); this.LoginFacebook();}}> 
                    <IonIcon icon={logoFacebook} slot="icon-only"></IonIcon>
                  </IonButton>
                </IonRow>
              </IonCol>
              <IonCol size="3">
              
              
              </IonCol>
              
            </IonGrid>
              {
                LogIN()
              }

              {
                renderAuthButton()
              }
              
              {
                renderSignOut()
              }

              {
                renderAuthButtonGoogle()
              }
              
              {
                renderSignOutGoogle()
              }
         
               
      
          </div>
          </IonContent>
  
    
        </IonPage>
    );

  }
  



};


