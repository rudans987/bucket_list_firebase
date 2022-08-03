// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvWgFvevdEY5B-1wqM_gwo8yI7eQZtfy4",
  authDomain: "sparta-react-basic-1c7d5.firebaseapp.com",
  projectId: "sparta-react-basic-1c7d5",
  storageBucket: "sparta-react-basic-1c7d5.appspot.com",
  messagingSenderId: "764285767747",
  appId: "1:764285767747:web:9f8f22412d2f13351484f6",
  measurementId: "G-LTKEEC299N"
};

initializeApp(firebaseConfig);

// Initialize Firebase
// const app = initializeApp(firebaseConfig);


export const db = getFirestore();