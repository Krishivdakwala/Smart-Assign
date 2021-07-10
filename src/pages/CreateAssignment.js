import React, { useRef } from "react";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { createAssignment } from "../api";
import { Link, useHistory } from "react-router-dom";

export default function CreateAssignmentScreen() {
  const nameRef = useRef();
  const subjectRef = useRef();
  const questionsRef = useRef();
  const dateRef = useRef();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    createAssignment({
      name: nameRef.current.value,
      subject: subjectRef.current.value,
      due_date: dateRef.current.value,
      questions: questionsRef.current.value,
    });
    history.push("/TeacherAssignments");
  }

  return (
    <div>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Assignment Name</Form.Label>
              <Form.Control type="text" placeholder="Name" ref={nameRef} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Subject"
                ref={subjectRef}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Questions</Form.Label>
              <Form.Control as="textarea" rows={5} ref={questionsRef} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Due Date</Form.Label>
              <Form.Control type="date" placeholder="Due Date" ref={dateRef} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
}
