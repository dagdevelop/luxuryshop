// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB6h_j0jDJtKlNlzVr3qPDuzv7VDFZNuA",
  authDomain: "luxury-shop-8f856.firebaseapp.com",
  projectId: "luxury-shop-8f856",
  storageBucket: "luxury-shop-8f856.appspot.com",
  messagingSenderId: "269153308481",
  appId: "1:269153308481:web:c66fa912c15a621134dbc0",
  measurementId: "G-DNS51P3RN1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
