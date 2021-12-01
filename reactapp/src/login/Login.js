import google from "./Google.png";
import twitter from "./Twitter.jpg";
import linkedin from "./linkedin.webp";
import logo from "./logo.png";
import "./login.css";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Divider from "@mui/material/Divider";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

//run these npm install @mui/material @emotion/react @emotion/styled and @material-ui/core

const theme = createMuiTheme({
  typography: {
    fontFamily: "Open Sans",
  },

  palette: {
    primary: {
      main: "#3FC1BB",
    },
  },
});

const useStyles = makeStyles({
  field: {
    marginTop: 50,
    marginBottom: 10,
  },
  button: {
    marginTop: 30,
    marginBottom: 30,
    maxWidth: 300,
    minWidth: 300,
  },

  alternateLogin: {
    color: "#1976D2",
  },
});
export default function Login() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: "flex", height: "100vh", flex: 1 }}>
        <div style={{ display: "flex", flex: 0.3, backgroundColor: "#2B7A78" }}>
          <img class="logo" src={logo} alt="logo" />
        </div>
        <div class="leftSide">
          <div class="BigSignIn">
            <Typography variant="h2" gutterBottom>
              Log In
            </Typography>
          </div>
          <div class="LittleSignIn">
            <Typography variant="caption">Log In With</Typography>
          </div>

          <div class="loginImages">
            <img class="image" src={google} alt="google" />
            <img class="image" src={twitter} alt="twitter" />
            <img class="image" src={linkedin} alt="twitter" />
          </div>
          <Divider variant="middle">or</Divider>
          <form noValidate autoComplete="off">
            <TextField
              className={classes.field}
              label="Enter email"
              variant="outlined"
              fullWidth
            />

            <TextField
              className={classes.field}
              label="Enter Password"
              variant="outlined"
              fullWidth
            />

            <div>
              <Button
                type="submit"
                variant="contained"
                className={classes.button}
                color="primary"
                size="large"
              >
                Log In
              </Button>
            </div>
            {/* </div>  */}
          </form>
          <Grid container>
            <Grid item xs={3}>
              {" "}
            </Grid>
            <Grid item xs={3}>
              <Typography
                align="left"
                variant="subtitle2"
                className={classes.alternateLogin}
              >
                Create new account
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                variant="subtitle2"
                align="right"
                className={classes.alternateLogin}
              >
                Forgot you password?
              </Typography>
            </Grid>
            <Grid item xs={3}>
              {" "}
            </Grid>
          </Grid>
        </div>
      </div>
    </ThemeProvider>
  );
}
