import React from 'react'
import { Box, makeStyles, withStyles, Typography } from "@material-ui/core";


function Logo() {
    const classes = useStyles();
    return (
      <div>
      <CustomColor>
      <h1 style={{fontSize: "50px"}}>SMART ASSIGN</h1>   
      <h5>Where students enjoy assignments</h5>
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
    WebkitTextFillColor: "transparent"
  }
})(Typography);

export default Logo;