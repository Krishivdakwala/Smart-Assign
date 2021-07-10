import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBBCPox4vOPF5WHVYrMnTLwyADn8qd74ZM",
  authDomain: "auth-double-slash.firebaseapp.com",
  projectId: "auth-double-slash",
  storageBucket: "auth-double-slash.appspot.com",
  messagingSenderId: "390409199122",
  appId: "1:390409199122:web:cdad01994e990e40aac2cb",
});

export const auth = app.auth();
export const firestoreInstance = app.firestore();
export const fireStorage = app.storage();
export default app;
