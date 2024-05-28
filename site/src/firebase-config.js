// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEJYbdU8cAUTriZG_1kwj7MPAAcziCXtM",
  authDomain: "darshil-127fd.firebaseapp.com",
  databaseURL: "https://darshil-127fd-default-rtdb.firebaseio.com",
  projectId: "darshil-127fd",
  storageBucket: "darshil-127fd.appspot.com",
  messagingSenderId: "217068281988",
  appId: "1:217068281988:web:3bc3e666cde298cdc9e2d1",
  measurementId: "G-J793ZWNFLX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();