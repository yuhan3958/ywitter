import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBWCvAm8t-imtgY5eQp5ed7yALfP484zM0",
    authDomain: "ywitter-yuhan8954.firebaseapp.com",
    projectId: "ywitter-yuhan8954",
    storageBucket: "ywitter-yuhan8954.appspot.com",
    messagingSenderId: "4213241372",
    appId: "1:4213241372:web:b2e37e2769b809fcb991d9"
  };

const app = initializeApp(firebaseConfig);
export const authService = getAuth();