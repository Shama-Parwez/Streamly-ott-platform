import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-banner d-flex align-items-center justify-content-center text-center text-white">
  <div className="overlay">
    <h1 className="display-4 fw-bold">Welcome to StreamLy</h1>
    <p className="lead">
      Watch Movies, Shows and more – Anytime, Anywhere.
    </p>
    <div className="d-flex justify-content-center gap-3 mt-3">
      <button
        className="btn btn-danger btn-lg"
        onClick={() => navigate("/login")}
      >Login</button>
      <button
        className="btn btn-danger btn-lg"
        onClick={() => navigate("/signup")}
      >Sign Up</button>
    </div>
  </div>
</section>

  );
};

export default LandingPage;
