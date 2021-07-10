import React from 'react'
import { Box, makeStyles, withStyles, Typography } from "@material-ui/core";
import "./Logo.css"

function Logo() {
  const classes = useStyles();
  return (
    <div>
    <CustomColor>
    <h1 className="wow">SMART <br/> &ensp; ASSIGN</h1><hr/>
    <p className="describe"><span style={{color: "#24a7ff"}}> Learn</span> with Intent,<span style={{color: "#24a7ff"}}> Strive</span> for Success</p>
      </CustomColor>
    </div>
  );
}
  
const useStyles = makeStyles((theme) => ({}));
const CustomColor = withStyles({
  root: {
    fontSize: 20,
    background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    WebkitBackgroundClip: "text",
  }
})(Typography);

export default Logo;