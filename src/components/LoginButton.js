import React from 'react'
import Button from '@material-ui/core/Button'
import Fab  from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

const buttonStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
        border: 0,
        borderRadius: 15,
        color: 'White',
        padding: '15px 60px',
        margin: '20px'
    }
})

function LoginButton() {
    const classes = buttonStyles();
    return (
      <div> 
      <Box display="flex" justifyContent="space-between">
        <Link to="/login" >
         <Fab className={classes.root} size="large">
          Login
        </Fab>
        </Link>
        <Link to="/signup">
        <Fab className={classes.root}>
          Signup
        </Fab>
        </Link>
        </Box>
      </div>
    );
  }

export default LoginButton;