// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrNVABUIDm4-3SPnW9tmW39EEgyL45lO0",
  authDomain: "coffee-shop-491a0.firebaseapp.com",
  projectId: "coffee-shop-491a0",
  storageBucket: "coffee-shop-491a0.firebasestorage.app",
  messagingSenderId: "634815183566",
  appId: "1:634815183566:web:0c868a5be2c8f46cfc2e9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
