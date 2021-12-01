import "./App.css";
import RecPage from "./recommendations/RecPage.js";
import Login from "./login/Login.js";

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <RecPage></RecPage>
        {/* <Login></Login> */}
      </div>
    </div>
  );
}

export default App;
