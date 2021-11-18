import "./App.css";
import SoftwareCard from "./recommendations/SoftwareCard.js";
import Login from "./login/Login.js";
import Navbar from "./Navbar/Navbar.js";
import ReviewForm from "./ReviewForm/ReviewForm.js"
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
  appId: "1:875696660269:web:fa8e970aa5ab2e25087da4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-body">
        {/* <SoftwareCard/> */}
        <ReviewForm></ReviewForm>

      </div>
    </div>
  );
}

export default App;
