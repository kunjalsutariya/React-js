// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCII9j1MGtOWfuJjW9bCdYflK6G88K9Qg",
  authDomain: "project-11-33db0.firebaseapp.com",
  databaseURL: "https://project-11-33db0-default-rtdb.firebaseio.com",
  projectId: "project-11-33db0",
  storageBucket: "project-11-33db0.firebasestorage.app",
  messagingSenderId: "929486827397",
  appId: "1:929486827397:web:3a51167b72b9b8c273deec",
  measurementId: "G-GJ280MGCE2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
