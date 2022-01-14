import "./SignUp.scss";
import Auth from "../images/auth.svg";
import * as React from "react";
export default function SignUp() {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
          <h1>Sign up for an account</h1>
        </div>
      </div>
    </div>
  );
}
