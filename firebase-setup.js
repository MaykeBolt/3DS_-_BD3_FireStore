import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js'

//CONSEGUE OS VALORES APOS CONECTAR UM APLICATIVO NO CONSOLE DO FIREBASE.
const firebaseConfig = {
    apiKey: "AIzaSyDt4gW72cFJavY-WVRrd-Np7BXrBXNiZoE",
    authDomain: "catracasfirestore.firebaseapp.com",
    projectId: "catracasfirestore",
    storageBucket: "catracasfirestore.appspot.com",
    messagingSenderId: "501170029898",
    appId: "1:501170029898:web:4556bf777e30e509986db3"
  };

// Initialize Firebase
window.fbApp = initializeApp(firebaseConfig);
window.fbDb = getFirestore(fbApp);
