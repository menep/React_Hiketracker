import * as firebase from "firebase/app";
import "firebase/firebase-database";

var config = {
  apiKey: "AIzaSyD9cM4GxresLN4G4vzb8rOMxpzP5FcnSCM",
  authDomain: "hiketracker-137fe.firebaseapp.com",
  databaseURL: "https://hiketracker-137fe.firebaseio.com",
  projectId: "hiketracker-137fe",
  storageBucket: "hiketracker-137fe.appspot.com",
  messagingSenderId: "642683725121",
  appId: "1:642683725121:web:78117ae962050a8d"
};
const fire = firebase.initializeApp(config);

export default fire;
