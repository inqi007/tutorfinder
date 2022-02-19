import * as React from "react";
import { useState } from "react";
import "./SignUp.scss";
import Auth from "../images/auth.svg";
import { Link } from "react-router-dom";
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

export default function SignUp() {
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
          <h1>Welcome to TutorFinder</h1>
          <p>
            Love teaching? Want to educate the next generation of innovators?
            <br></br>
            <br></br>
            Get noticed and paid for what you love doing. Sign up now!<br></br>
            <br></br>
          </p>
          <img src={Auth} width="100%" height="auto"></img>
        </div>
        <div className="right">
          <form onSubmit={formSubmission}>
            <h1>Sign up for an account</h1>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField //input for first name
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  onChange={firstNameInputChangeHandler}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField //input for last name
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  onChange={lastNameInputChangeHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField //input for email
                  id="outlined-basic"
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  onChange={emailInputChangeHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField //input for phone number
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  onChange={numberInputChangeHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField //input for institution name
                  id="outlined-basic"
                  label="Institution Name"
                  variant="outlined"
                  fullWidth
                  onChange={institutionInputChangeHandler}
                />
              </Grid>
              // list for subjects to choose
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-multiple-name-label">
                    Subjects
                  </InputLabel>
                  <Select
                    fullWidth
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={personSubject}
                    onChange={handleChange}
                    input={<OutlinedInput label="Subjects" />}
                    MenuProps={MenuProps}
                  >
                    {subjects.map((subject) => (
                      <MenuItem
                        key={subject}
                        value={subject}
                        style={getStyles(subject, personSubject, theme)}
                      >
                        {subject}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField //input for password
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  type="password"
                  fullWidth
                  onChange={passwordInputChangeHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Re-type Password"
                  variant="outlined"
                  type="password"
                  fullWidth
                />
              </Grid>
            </Grid>
            <div className="sign_up_button">
              <button className="button">Sign Up</button>
            </div>
          </form>
          <div className="login_option">
            <p>
              Already have an account? <Link to="/signin">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
