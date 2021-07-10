import React, { useRef } from "react";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { createAssignment } from "../api";

export default function CreateAssignmentScreen() {
  const nameRef = useRef();
  const subjectRef = useRef();
  const questionsRef = useRef();
  const dateRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    createAssignment({
      name: nameRef.current.value,
      subject: subjectRef.current.value,
      due_date: dateRef.current.value,
      questions: questionsRef.current.value,
    });
  }

  return (
    <div>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Assignment Name</Form.Label>
              <Form.Control type="text" placeholder="Name" ref={nameRef} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Subject"
                ref={subjectRef}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Questions</Form.Label>
              <Form.Control as="textarea" rows={5} ref={questionsRef} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
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
