import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

// https://codesandbox.io/s/y5b2j?file=/src/App.js:109-254
const StepOne = ({ nextStep, handleFormData, values }) => {
 
  const [error, setError] = useState(false);
  const submitFormData = (e) => {
    e.preventDefault();
    if (
      validator.isEmpty(values.firstName) ||
      validator.isEmpty(values.lastName)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control 
                style={{ border: error ? "2px solid red" : "" }}
                name="firstName"
                defaultValue={values.firstName}
                type="text"
                placeholder="First Name"
                onChange={handleFormData("firstName")}
                className="fname"
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="lastName"
                defaultValue={values.lastName}
                type="text"
                placeholder="Last Name"
                onChange={handleFormData("lastName")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Button variant="primary" type="submit">
              Continue
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StepOne;
