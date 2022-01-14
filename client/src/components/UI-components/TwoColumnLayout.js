import "./TwoColumnLayout.scss";
import Grid from "@mui/material/Grid";
import Auth from "../../images/auth.svg";

function TwoColumnLayout(prop) {
  return (
    <div className="two_column_layout">
      <Grid container>
        <Grid item xs={12} lg={6}>
          <div className="left">
            <h1>Welcome to TutorFinder</h1>
            <p>
              Love teaching? Want to educate the next generation of innovators?
              Get noticed and paid for what you love doing. Sign up now!
            </p>
            <img src={Auth}></img>
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <div className="right">
            <h1>bye</h1>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default TwoColumnLayout;
