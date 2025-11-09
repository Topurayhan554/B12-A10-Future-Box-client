// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe4YB4LHEfBevflkz1rVWEzc0sB-eUQjY",
  authDomain: "pawmart-petshop.firebaseapp.com",
  projectId: "pawmart-petshop",
  storageBucket: "pawmart-petshop.firebasestorage.app",
  messagingSenderId: "937012106797",
  appId: "1:937012106797:web:da86b0edd8e2b234ab0aa4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
