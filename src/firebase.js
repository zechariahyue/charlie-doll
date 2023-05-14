// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import './firebase';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdKTnsqOqRak36pQDOuAWIoR1iElZY93E",
  authDomain: "charlies-doll.firebaseapp.com",
  projectId: "charlies-doll",
  storageBucket: "charlies-doll.appspot.com",
  messagingSenderId: "55134181896",
  appId: "1:55134181896:web:1a1eac2964b6a59f958fbd",
  measurementId: "G-RFWSDTFJH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);