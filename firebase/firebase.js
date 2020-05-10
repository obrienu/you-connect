import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/functions'

const firebaseConfig = {
  apiKey: "AIzaSyAQjk08nYZHxTKYMejq4xiOPk-8UKGvzkI",
  authDomain: "x-app-bef0a.firebaseapp.com",
  databaseURL: "https://x-app-bef0a.firebaseio.com",
  projectId: "x-app-bef0a",
  storageBucket: "x-app-bef0a.appspot.com",
  messagingSenderId: "1081463654898",
  appId: "1:1081463654898:web:6616d12f52c6a53c48836b",
  measurementId: "G-SQ3NE1NYHV"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.functions();

export default firebase;


