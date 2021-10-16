import './App.css';
import SoftwareCard from './recommendations/SoftwareCard.js';
import Login from './login/Login.js';

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <SoftwareCard/>
        {/* <Login></Login> */}
      </div>
    </div>
  );
}

export default App;
