import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card, Container } from "react-bootstrap";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (name && email && password) {
      const user = { name, email, password };
      localStorage.setItem("user", JSON.stringify(user));

      alert("Account Created Successfully 🎉");
      navigate("/login");
    } else {
      alert("Please fill all fields ❌");
    }
  };

  return (
    <div style={{ background: "#121212", minHeight: "100vh" }} className="d-flex justify-content-center align-items-center">
      <Card style={{ width: "400px", background: "#1e1e1e", color: "#fff" }} className="p-4 shadow-lg border-0">
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#e50914" }}>Sign Up</h2>
        <Form onSubmit={handleSignup}>
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ background: "#333", color: "#fff", border: "none" }}
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ background: "#333", color: "#fff", border: "none" }}
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ background: "#333", color: "#fff", border: "none" }}
            />
          </Form.Group>

          <Button type="submit" className="w-100 fw-bold" style={{ backgroundColor: "#e50914", border: "none" }}>
            Sign Up </Button>
        </Form>
        <p className="mt-3 text-center">
          Already have an account?{" "}
          <span
            className="fw-bold"
            style={{ color: "#e50914", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          > Login </span>
        </p>
      </Card>
    </div>
  );
};

export default Signup;
