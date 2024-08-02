// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1Q2ZRv0itcypMpYgs-nGvi96wzuqQZ34",
  authDomain: "login-5ba5e.firebaseapp.com",
  projectId: "login-5ba5e",
  storageBucket: "login-5ba5e.appspot.com",
  messagingSenderId: "908364787702",
  appId: "1:908364787702:web:80116bf060113ce1dd61d7"
};

// Initialize Firebase
if(!firebase.apps.length)
{
   firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();

export {auth};