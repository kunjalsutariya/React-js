// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVALXaKNgktIFptdDsrzQp3FvhC9JJwJE",
  authDomain: "fir-realtime-db-45701.firebaseapp.com",
  databaseURL: "https://fir-realtime-db-45701-default-rtdb.firebaseio.com",
  projectId: "fir-realtime-db-45701",
  storageBucket: "fir-realtime-db-45701.firebasestorage.app",
  messagingSenderId: "184225030967",
  appId: "1:184225030967:web:9946706ae73b2c472630b2",
  measurementId: "G-7GCQXHWMBD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
