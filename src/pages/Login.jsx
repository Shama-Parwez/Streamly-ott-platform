import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card, Container } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser && savedUser.email === email && savedUser.password === password) {
      alert(`Welcome back, ${savedUser.name}! ✅`);
      navigate("/home");
    } else {
      alert("Sorry, we can't find an account with this email address. Please try again or create a new account.");
    }
  };

  return (
    <div style={{ background: "#121212", minHeight: "100vh" }} className="d-flex justify-content-center align-items-center">
      <Card style={{ width: "400px", background: "#1e1e1e", color: "#fff" }} className="p-4 shadow-lg border-0">
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#e50914" }}>Login</h2>
        <Form onSubmit={handleLogin}>
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
            Login
          </Button>
        </Form>
        <p className="mt-3 text-center">
          Don’t have an account?{" "}
          <span
            className="fw-bold"
            style={{ color: "#e50914", cursor: "pointer" }}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>
      </Card>
    </div>
  );
};

export default Login;
