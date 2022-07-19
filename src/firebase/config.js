import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA5M1dmVd6wUDyniOMlL7wVeoCDcHFnoyU",
    authDomain: "mr-hollowman.firebaseapp.com",
    projectId: "mr-hollowman",
    storageBucket: "mr-hollowman.appspot.com",
    messagingSenderId: "891477456790",
    appId: "1:891477456790:web:47964fcf9eb6caaee0cfb7"
  };

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth=firebase.auth();
const projectStorage=firebase.storage();

//timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp}