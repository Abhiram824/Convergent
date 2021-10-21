import google from "./Google.png";
import twitter from "./Twitter.jpg";
import linkedin from "./linkedin.webp";
import "./login.css";

export default function Login() {
  return (
    <div style={{ display: "flex", height: "100vh", flex: 1 }}>
      <div style={{ display: "flex", flex: 0.3, backgroundColor: "#2B7A78" }}>
        <h1 style={{ color: "white" }}>Logo</h1>
        {/* change style and replace with image */}
      </div>
      <div class="leftSide">
        <div class="BigSignIn">
          <h2>Sign In</h2>
        </div>
        <div class="LittleSignIn">
          <h4>Sign In With</h4>
        </div>

        <div class="loginImages">
          <img class="image" src={google} alt="google" />
          <img class="image" src={twitter} alt="twitter" />
          <img class="image" src={linkedin} alt="twitter" />
        </div>
        <div class="line">
          <hr class="rightLine"></hr>
          <h4>or</h4>
          <hr class="leftLine"></hr>
        </div>
        <form>
          <div class="loginInput">
            <label for="userName">Username:</label>
            <input type="text" id="userName" name="userName"></input>
            <label for="password">Password:</label>
            <input type="text" id="password" name="password"></input>
            <div class="submitDiv">
              <input class="submitButton" type="submit" value="Submit"></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
