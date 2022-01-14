import * as React from "react";
import { useState } from "react";
import "./SignUp.scss";
import Auth from "../images/signin.svg";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";

export default function SignIn() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordInputChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const formSubmission = (event) => {
    event.preventDefault();
    console.log(enteredEmail, enteredPassword);
  };

  return (
    <div className="sign_up">
      <div className="box">
        <div className="left">
          <h1>Login</h1>
          <p>
            Good to see you again!
            <br></br>
            <br></br>
            By logging into TutorFinder, you agree to our Terms of use and
            Privacy Policy.<br></br>
          </p>
          <img src={Auth} width="100%" height="auto"></img>
        </div>
        <div className="right">
          <form onSubmit={formSubmission}>
            <h1>Sign up for an account</h1>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  onChange={emailInputChangeHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  onChange={passwordInputChangeHandler}
                />
              </Grid>
            </Grid>
            <div className="sign_up_button">
              <button className="button">Log In</button>
            </div>
          </form>
          <div className="login_option">
            <p>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
