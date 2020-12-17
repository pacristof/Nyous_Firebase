import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDemJIe4a_rxWevdpmCwB_zfe1VIINqg_4",
    authDomain: "nyous-1fa3e.firebaseapp.com",
    projectId: "nyous-1fa3e",
    storageBucket: "nyous-1fa3e.appspot.com",
    messagingSenderId: "488364451937",
    appId: "1:488364451937:web:b246a76a6c70b0eda8e220",
    measurementId: "G-4M1WV6STC5"
};

const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore()

export default firebaseConfig