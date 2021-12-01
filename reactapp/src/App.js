import "./App.css";
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import RecPage from "./recommendations/RecPage.js";
import Login from "./login/Login.js";
import Navbar from "./Navbar/Navbar.js";
import Header from "./LandingPage/Header.js";
import MainPage from "./LandingPage/MainPage.js";
import Signup from "./signup/signup.js";
import Dashboard from "./Dashboard/Dashboard.js";
import ReviewForm from "./ReviewForm/ReviewForm.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMC6Eh-cAkndFN_W23MC9yA3aTl7yRa4k",
  authDomain: "greenlit-be9a8.firebaseapp.com",
  projectId: "greenlit-be9a8",
  storageBucket: "greenlit-be9a8.appspot.com",
  messagingSenderId: "875696660269",
  appId: "1:875696660269:web:fa8e970aa5ab2e25087da4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Header />
      <div className="App-body">
        {/* <SoftwareCard/> */}
        <MainPage / >
        {/* <Login></Login> */}
      </div>
    </div>
  );
}

export default App;