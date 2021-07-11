//SubmitAssignment.js page is for the students to submit their work for a particular assignment


import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from "../contexts/AuthContext";
import { uploadFile, getAssignmentData } from "../api";
import LeftDrawer from "../components/LeftDrawer";
import { Container, Card, Button } from "react-bootstrap";
import './SubmitAssignment.css';

export default function SubmitAssignment(props) {
    const { currentUser, logout } = useAuth();
    const [data, setData] = useState({subject:"",name:"",due_date:"",questions:""});
    

    const[assignmentName, setAssignmentName] = useState("");

    const getAssignment = (assigName) => {
        getAssignmentData(assigName)
          .then((data) => {
            setData(data);
            console.log("Sub", data);
          })
          .catch((err) => {
            console.log(err);
          });
      };

    useEffect(() => {
        const assigName = props.match.params.assignmentName;
        setAssignmentName(assigName);
        getAssignment(assigName);
      }, []);

      const handleFile = (event) => {
        let value;
        value = event.target.files[0];
    
        uploadFile({ file: value, email: currentUser.email, assignment: assignmentName });
      };

    return (
        <div>
          <div>
            <LeftDrawer />
          </div>

          <Container
            className="d-flex flex-wrap text-wrap align-items-center justify-content-center"
            style={{ minHeight: "85vh"}}
          >
            <Card className="styles.assn2" bsPrefix="assn2">
              <Card.Body>
                <Card.Text className="styles.assn2text" bsPrefix="assn2text">
                  Subject: {data.subject}
                </Card.Text>
                <Card.Text className="styles.assn2text" bsPrefix="assn2text">
                  Assignment: {assignmentName}
                </Card.Text>
                <Card.Text className="styles.assn2text" bsPrefix="assn2text">
                  Due Date: {data.due_date}
                </Card.Text>
                <Card.Text className="styles.assn2text" bsPrefix="assn2text">
                  Question: {data.questions}
                </Card.Text>
                <div>
                  <label className="btn btn-secondary">
                    <input
                      type="file"
                      onChange={handleFile}
                      name="photo1"
                      accept=".pdf,image/*"
                    ></input>
                  </label>
                </div> 
                <Button href="/studentassignments">Submit Assignment</Button>
                </Card.Body>
              </Card>
          </Container>
        </div>
    )
}
