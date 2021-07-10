import React from 'react'
import Logo from '../components/Logo';
import Fade from 'react-reveal/Fade';
import LoginButton from '../components/LoginButton';
import NavComponent from '../components/NavComponent';
import './Landing.css';
import Slide from 'react-reveal/Slide';
import { Card } from "react-bootstrap";

function Landing() {
    return (
      <div>
      <div className = "Header">
      <Card className = "styles.logo_frame" bsPrefix="logo_frame" >


        <Fade top>
          <Logo />
        </Fade>
    

        <br/>
        <br/>


        <Fade bottom>
          <LoginButton />
        </Fade>
        </Card>


        
      </div>
      <div className="AboutUsPara">
      <Slide left>
        <h2>About Us</h2>
        <p>Smart assign akakamkdaskdmakdkadmakdmakdmamdakmdakd
        adalkdadadmadamdmakdmakdmad
        adkadmakdmakdmakdmakdmad
        adkadakdmakdmadkmakdmakdamdakdmakda
        adkamdkamdkamdk</p>
    </Slide>
      </div>

      </div>
    );
  }

export default Landing;