import React from "react";
import { Form, Button } from "react-bootstrap";

export default function Book() {
  return (
    <Form className="booking-form">
      <Form.Group className="book-label" controlId="formBasicEmail">
        <p>Name</p>
        <p>Address</p>
        <p>Email</p>
      </Form.Group>
      <Form.Group className="book-input" controlId="">
        <Form.Control
          className="form-input"
          type="text"
          placeholder="Enter Name"
        />
        <Form.Control
          className="form-input"
          type="text"
          placeholder="Enter Addresss"
        />
        <Form.Control
          className="form-input"
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Button className="book-btn" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
