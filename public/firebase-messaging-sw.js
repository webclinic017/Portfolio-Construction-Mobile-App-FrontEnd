
importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js');

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
      .then(function(registration) {
        console.log('Registration successful, scope is:', registration.scope);
      }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
      });
    }
firebase.initializeApp({
    apiKey: "AIzaSyAYW89yelwgxFhj0jqnb8XaQARcK8NB6jY",
    authDomain: "easyvest-b21d2.firebaseapp.com",
    databaseURL: "https://easyvest-b21d2.firebaseio.com",
    projectId: "easyvest-b21d2",
    storageBucket: "easyvest-b21d2.appspot.com",
    messagingSenderId: "824344829325",
    appId: "1:824344829325:web:b72262ac64a401706ab1c4",

})

const initMessaging = firebase.messaging()