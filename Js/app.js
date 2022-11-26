// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-a4PfJB4SAAf5cFnKFLeyy4yb5_FoBSg",
    authDomain: "happybirthday-e7479.firebaseapp.com",
    projectId: "happybirthday-e7479",
    storageBucket: "happybirthday-e7479.appspot.com",
    messagingSenderId: "797054932458",
    appId: "1:797054932458:web:2723d2330271c01dc84e93",
    measurementId: "G-EVHKQCNLXH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); npm install -g firebase-tools