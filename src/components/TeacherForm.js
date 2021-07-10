import React, { useEffect, useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import { createUser } from "../api";
import DiscreteSlider from "./Slider";
import { upDateStudentPoints, getAssignments, createAssignment } from "../api";

export default function TeacherForm(props) {

  const { currentUser, signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [studentName, setStudentName] = useState("");
  const [assiName, setAssiName] = useState("");

  const [points, setPoints] = useState({
    timePoints: 0,
    correctPoints: 0,
    neatPoints: 0,
  });

  useEffect(() => {
    const assigName = props.match.params.assignmentName;
    const studName = props.match.params.studentName;
    setStudentName(studName);
    setAssiName(assigName);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    upDateStudentPoints({
      email: currentUser.email,
      points: timePoints + correctPoints + neatPoints,
    });
  }

  const { timePoints, correctPoints, neatPoints } = points;

  const handleSliders = (sliderName) => {
    return (slidePoints) => {
      setPoints({ ...points, [sliderName]: slidePoints });
    };
  };

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
      
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Assignment Score</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="timePoints">
                  <DiscreteSlider
                    name="Time Score"
                    handleSlider={handleSliders("timePoints")}
                  />
                  <h2>{JSON.stringify(timePoints)}</h2>
                  <h2>{studentName}</h2>
                  <h2>{assiName}</h2>
                </Form.Group>

                <Form.Group id="neatnessPoints">
                  <DiscreteSlider
                    name="Neatness Score"
                    handleSlider={handleSliders("neatPoints")}
                  />
                  <h2>{JSON.stringify(neatPoints)}</h2>
                </Form.Group>

                <Form.Group id="correctnessPoints">
                  <DiscreteSlider
                    name="Correctness Points"
                    handleSlider={handleSliders("correctPoints")}
                  />
                  <h2>{JSON.stringify(correctPoints)}</h2>
                  <h2>{JSON.stringify(points)}</h2>
                </Form.Group>

                <Button
                  disabled={loading}
                  onClick={handleSubmit}
                  className="w-100"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}
