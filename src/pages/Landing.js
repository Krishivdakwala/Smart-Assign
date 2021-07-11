//Landing.js is the landing page or the intro page for the website
//It has login and signup options

import React from 'react'
import Logo from '../components/Logo';
import LoginButton from '../components/LoginButton';
import './Landing.css';
import Slide from 'react-reveal/Slide';
import { Card } from "react-bootstrap";

function Landing() {
  return (
    <div className="bgheader">
    <div className="mainDiv">
      <div>
        <Logo />
      </div>  

      <div>
          <LoginButton />
      </div>
      
    </div>
    </div>

    
  );
}

export default Landing;