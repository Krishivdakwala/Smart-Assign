import React from 'react'
import Button from '@material-ui/core/Button'
import Fab  from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

const buttonStyles = makeStyles({
  loginbut: {
        background: 'linear-gradient(45deg, #0A1931, #0A1931)',
        border: 0,
        borderRadius: "25px",
        color: 'White',
        padding: '15px 60px',
        margin: '20px',
    },

    signupbut:{
      background: 'transparent',
      border: 0,
      borderRadius: "25px",
      color: 'White',
      padding: '15px 60px',
      margin: '20px',
    },


    twobuttons: {
      position: "absolute",
      left: "6cm",
      top: "15cm",
    }
})

function LoginButton() {
  const classes = buttonStyles();
  return (
    <div className={classes.twobuttons}> 
    <Box display="flex">
      <Link to="/login" >
       <Fab className={classes.loginbut} size="large">
        Login
      </Fab>
      </Link>
      <Link to="/signup">
      <Fab className={classes.signupbut}>
        Signup
      </Fab>
      </Link> 
      </Box>
    </div>
  );
}

export default LoginButton;