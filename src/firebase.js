// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnxlGd4d6TNis3xgisoQmPhq3-fHymOjI",
  authDomain: "website-wb.firebaseapp.com",
  projectId: "website-wb",
  storageBucket: "website-wb.appspot.com",
  messagingSenderId: "1085125207662",
  appId: "1:1085125207662:web:f585f4aa7f59952bcea87f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);