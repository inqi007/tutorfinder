import "./Landing.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import whytf from "../images/whytf.png";
import Whytfdiv from "../components/landing/whytf";
import search from "../images/search.png";
import dollar from "../images/dollar.png";
import signup from "../images/signup.png";

export default function Landing() {
  return (
    <div className="landing_wrapper">
      <div className="landing">
        <div className="text">
          <h1>Learning Made Simple</h1>
          <h2>Connect with educators & learn with a single click</h2>
        </div>
      </div>
      <div className="second">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div className="whytf">
                <img src={whytf} width="350" height="300"></img>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="whytf_text">
                <h1>Why TutorFinder?</h1>
                <Whytfdiv
                  text="Choose an experienced tutor that fits your budget"
                  pic={search}
                />
                <Whytfdiv
                  text="All the money goes directly to the tutor's pocket"
                  pic={dollar}
                />
                <Whytfdiv
                  text="Sign up is quick, fun and completely free"
                  pic={signup}
                />
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}
