import "./Landing.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import whytf from "../images/whytf.png";
import Whytfdiv from "../components/landing/whytf"

export default function Landing() {
  return (
    <div>
      <div className="landing">
        <div className="text">
          <h1>Learning Made Simple</h1>
          <h2>Connect with educators & learn with a single click</h2>
        </div>
      </div>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div className="whytf">
                <img src={whytf} width="450" height="400"></img>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="whytf_text">
                <h1>Why TutorFinder?</h1>
                <Whytfdiv />
                <Whytfdiv />
                <Whytfdiv />
                
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}
