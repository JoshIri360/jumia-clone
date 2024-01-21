import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2-Zrq5J8mifXTQav9PsTDxAJdoJaYBow",
  authDomain: "jumia-clone-devjosh.firebaseapp.com",
  projectId: "jumia-clone-devjosh",
  storageBucket: "jumia-clone-devjosh.appspot.com",
  messagingSenderId: "94858365446",
  appId: "1:94858365446:web:1637b722311268c20f9187",
  measurementId: "G-0LFY7TPYCV",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export const db = app.firestore();

export default db;
