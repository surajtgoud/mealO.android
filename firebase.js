// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwln9Aiaj5kyZIBIoBPE7ZxLu4cnrZRn0",
  authDomain: "mealo-android.firebaseapp.com",
  projectId: "mealo-android",
  storageBucket: "mealo-android.appspot.com",
  messagingSenderId: "781833918122",
  appId: "1:781833918122:web:0451d2fb2dd11acd74e2d3",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth;
export { auth };
