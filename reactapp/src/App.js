import "./App.css";
import RecPage from "./recommendations/RecPage.js";
import Login from "./login/Login.js";
import Navbar from "./Navbar/Navbar.js";
import Header from "./LandingPage/Header.js";
import MainPage from "./LandingPage/MainPage.js";
import Signup from "./signup/signup.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Header />
      <div className="App-body">
<<<<<<< HEAD
        <RecPage></RecPage>
        {/* <Login></Login> */}
=======
        {/* <SoftwareCard/> */}
        <MainPage />
        {/* <Login></Login>*/}
>>>>>>> 12d916d8778cd236f42b81c09828930196c9d981
      </div>
    </div>
  );
}

export default App;
