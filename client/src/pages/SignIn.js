import * as React from "react";
import { useState } from "react";
import "./SignUp.scss";
import Auth from "../images/signin.svg";
import MenuItem from "@mui/material/MenuItem";
import { Grid } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

// do password salt and stuff
// dropdown
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 60 * 4.5 + 8,
      width: 250,
    },
  },
};

const subjects = ["English", "Bangla", "Mathematics"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SignIn() {
  const theme = useTheme();
  const [personSubject, setPersonSubject] = React.useState([]);

  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");
  const [enteredInstitution, setEnteredInstitution] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const firstNameInputChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };
  const lastNameInputChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const numberInputChangeHandler = (event) => {
    setEnteredNumber(event.target.value);
  };
  const institutionInputChangeHandler = (event) => {
    setEnteredInstitution(event.target.value);
  };
  const passwordInputChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const formSubmission = (event) => {
    event.preventDefault();
    console.log(
      enteredEmail,
      enteredPassword,
      enteredFirstName,
      enteredLastName,
      enteredNumber,
      enteredInstitution,
      personSubject
    );
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonSubject(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
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
            By logging into TutorFinder, you agree to our Terms of use and Privacy Policy.<br></br>
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
              Don't have an account? <a>Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
