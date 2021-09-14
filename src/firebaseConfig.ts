import * as firebase from 'firebase'



const config={
    apiKey: "AIzaSyAYW89yelwgxFhj0jqnb8XaQARcK8NB6jY",
    authDomain: "easyvest-b21d2.firebaseapp.com",
    databaseURL: "https://easyvest-b21d2.firebaseio.com",
    projectId: "easyvest-b21d2",
    storageBucket: "easyvest-b21d2.appspot.com",
    messagingSenderId: "824344829325",
    appId: "1:824344829325:web:b72262ac64a401706ab1c4",
    measurementId: "G-YCBXGC4EQS"
  };
  
  
  
  firebase.initializeApp(config);
  //firebase.analytics();

  export default firebase