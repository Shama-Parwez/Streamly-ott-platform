import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { FaUserCircle, FaMoon, FaSun } from "react-icons/fa";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("dark"); // default theme

  useEffect(() => {
    // LocalStorage se user data fetch
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    } else {
      // Agar user login nahi hai toh login page pe bhej do
      navigate("/login");
    }

    // Theme localStorage se load karo
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const isDark = theme === "dark";

  return (
    <div 
      className="d-flex justify-content-center align-items-center vh-100" 
      style={{ background: isDark ? "#121212" : "#f8f9fa" }}
    >
      <Card 
        className="p-4 text-center shadow-lg" 
        style={{ 
          maxWidth: "400px", 
          width: "100%", 
          background: isDark ? "#1e1e1e" : "#ffffff", 
          color: isDark ? "#fff" : "#000" 
        }}
      >
        <FaUserCircle size={70} color="#e50914" className="mb-3" />

        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="fw-bold m-0">Profile</h2>
          <Button 
            variant={isDark ? "outline-light" : "outline-dark"} 
            onClick={toggleTheme}
            className="d-flex align-items-center gap-2"
          >
            {isDark ? <FaSun /> : <FaMoon />} 
            {isDark ? "Light" : "Dark"}
          </Button>
        </div>

        {user ? (
          <>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </>
        ) : (
          <p className="text-muted">Loading profile...</p>
        )}

        <div className="d-flex justify-content-between mt-4">
          <Button variant={isDark ? "outline-light" : "outline-dark"}>Edit Profile</Button>
          <Button 
            style={{ backgroundColor: "#e50914", border: "none" }} 
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
