// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrVa7z_Cj8OdqqrwDnHsT0QrScb3hJweQ",
  authDomain: "finance-tracker-7f5fb.firebaseapp.com",
  projectId: "finance-tracker-7f5fb",
  storageBucket: "finance-tracker-7f5fb.appspot.com",
  messagingSenderId: "612603069216",
  appId: "1:612603069216:web:ea53748443f901315c8d45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)

export {app, db, auth}