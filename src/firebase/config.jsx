// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1IDrJ0XiaEHvLZ-9UyIzY7wqZ8sA3xVU",
  authDomain: "menu-gustop.firebaseapp.com",
  projectId: "menu-gustop",
  storageBucket: "menu-gustop.firebasestorage.app",
  messagingSenderId: "54415640444",
  appId: "1:54415640444:web:c8632bc0e28bd73ace46f9",
  measurementId: "G-JGBKNN26WC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const analytics = getAnalytics(app);
export default db;