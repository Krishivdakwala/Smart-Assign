//shows username and average marks

import React, { useEffect, useState } from "react";
import { getStudentData } from "../api";
import { useAuth } from "../contexts/AuthContext";
import LeftDrawer from "./LeftDrawer";
import { Container, Card } from "react-bootstrap";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function UserProfile() {
  const { currentUser, logout } = useAuth();
  const [studentData, setStudentData] = useState({});

  const value = 0.66;

  const [numAssi, setNumAssi] = useState(0);

  const getStudent = async () => {
    await getStudentData(currentUser.email)
      .then((data) => {
        console.log(data.assignments.length);
        setNumAssi(data.assignments.length);
        setStudentData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getStudent();
  }, []);

  return (
    <div>
      <div>
        <LeftDrawer />
      </div>
    
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "85vh" }}
      >

        <div style={{ width: 500, height: 500, marginBottom: "50px"}}>
        
          <CircularProgressbarWithChildren value={(studentData.points)/(numAssi)} maxValue={30} styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 1,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'round',

            // Text size
            textSize: '24px',

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 1,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `rgba(62, 152, 199, {value})`,
            textColor: '#f88',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
          })}>
            <img style={{ width: 250, marginTop: -5 }} src="https://bootdey.com/img/Content/avatar/avatar7.png"
              alt="Admin" class="rounded-circle" />
              <br/>
            <div style={{ fontSize: 24, marginTop: -5, color:"white", textAlign: "center"}}>
              {console.log("Here", studentData.assignments)}
              <strong>{studentData.name}</strong><br/>
              {!studentData.teacherCheck && <strong>Average score: {studentData.points/numAssi}</strong>}
            </div>
          </CircularProgressbarWithChildren>
        </div>

      </Container>
    </div>
  );
}
