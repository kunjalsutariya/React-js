import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth } from "firebase/auth";

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

export const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export default app;