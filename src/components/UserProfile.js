import React, { useEffect, useState } from "react";
import { getStudentData } from "../api";
import { useAuth } from "../contexts/AuthContext";
import LeftDrawer from "./LeftDrawer";
import { Container, Card } from "react-bootstrap";

export default function UserProfile() {
  const { currentUser, logout } = useAuth();
  const [studentData, setStudentData] = useState({});

  const getStudent = () => {
    getStudentData(currentUser.email)
      .then((data) => {
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
        <Card>
            <Card.Body>
                <Card.Title>Profile</Card.Title>
                <Card.Text>Name: {studentData.name}</Card.Text>
                <Card.Text>Email: {studentData.id}</Card.Text>
            </Card.Body>
        </Card>

      </Container>
    </div>
  );
}


