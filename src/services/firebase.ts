import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD-DaPM_nABxUcT9AERHRPQqorQ465DIIs",
    authDomain: "letmeask-8a4f4.firebaseapp.com",
    databaseURL: "https://letmeask-8a4f4-default-rtdb.firebaseio.com",
    projectId: "letmeask-8a4f4",
    storageBucket: "letmeask-8a4f4.appspot.com",
    messagingSenderId: "810345324758",
    appId: "1:810345324758:web:250f7fdc8844b4c6092977"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();
