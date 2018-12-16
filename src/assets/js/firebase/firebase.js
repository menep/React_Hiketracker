import firebase from "firebase/app";
import "firebase/firebase-database";

var config = {
  apiKey: "AIzaSyB1XDH_k7APcD0ohReKnpiKGC65T2xEczQ",
  authDomain: "hiketracker-9f581.firebaseapp.com",
  databaseURL: "https://hiketracker-9f581.firebaseio.com",
  projectId: "hiketracker-9f581",
  storageBucket: "hiketracker-9f581.appspot.com",
  messagingSenderId: "244899251322"
};
const fire = firebase.initializeApp(config);

export default fire;
