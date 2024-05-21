import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js'

//CONSEGUE OS VALORES APOS CONECTAR UM APLICATIVO NO CONSOLE DO FIREBASE.
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
};

// Initialize Firebase
window.fbApp = initializeApp(firebaseConfig);
window.fbDb = getFirestore(fbApp);
