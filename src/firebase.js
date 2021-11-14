import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    
    apiKey: "AIzaSyDO3FebsMIGV1EgD-W4Q03uHMGFe9X8T5M",
    authDomain: "react-messenger-5b1c7.firebaseapp.com",
    projectId: "react-messenger-5b1c7",
    storageBucket: "react-messenger-5b1c7.appspot.com",
    messagingSenderId: "562107621956",
    appId: "1:562107621956:web:94d567beceb2f61101d211",
    measurementId: "G-0V0NB9KGK6"
  

});

const db = firebaseApp.firestore();
 
export default db;