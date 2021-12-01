import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecPage from "./recommendations/RecPage.js";
import Login from "./login/Login.js";
import Navbar from "./Navbar/Navbar.js";
import Header from "./LandingPage/Header.js";
import MainPage from "./LandingPage/MainPage.js";
import Signup from "./signup/signup.js";
import Dashboard from "./Dashboard/Dashboard.js";
import ReviewForm from "./ReviewForm/ReviewForm.js";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const rootElement = document.getElementById("root");

const noNavbar = () => (
  <div className="container">
  < Route path="/" element={<App />} />
    <Route path="/landing" element={<MainPage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
  </div>
)

const needNavbar = () => (
  <div>
    <Navbar />
    <Route path="/Dashboard" element={<Dashboard />} />
    <Route path="/ReviewForm" element={<ReviewForm />} />
    <Route path="/Recommendations" element={<RecPage />} />
  </div>
)

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/landing" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/ReviewForm" element={<ReviewForm />} />
      <Route path="/Recommendations" element={<RecPage />} />
      
    </Routes>
  </BrowserRouter>,
  rootElement

  
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();