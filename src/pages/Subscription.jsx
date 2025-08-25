import React from "react";

export default function Subscription() {
  return (
    <div style={{ background: "#121212", minHeight: "100vh", padding: "40px 0" }}>
      <div className="container py-5 text-center text-white">
        <h2 className="fw-bold mb-4" style={{ color: "#e50914" }}>
          Choose Your Plan
        </h2>
        <div className="row justify-content-center">

          {/* Basic Plan */}
          <div className="col-md-4">
            <div className="card bg-dark text-white shadow-lg mb-4 border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold">Basic</h5>
                <p className="card-text text-danger">₹199 / month</p>
                <button className="btn btn-danger w-100">Subscribe</button>
              </div>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="col-md-4">
            <div className="card bg-dark text-white shadow-lg mb-4 border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold">Standard</h5>
                <p className="card-text text-danger">₹499 / month</p>
                <button className="btn btn-danger w-100">Subscribe</button>
              </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="col-md-4">
            <div className="card bg-dark text-white shadow-lg mb-4 border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold">Premium</h5>
                <p className="card-text text-danger">₹799 / month</p>
                <button className="btn btn-danger w-100">Subscribe</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
