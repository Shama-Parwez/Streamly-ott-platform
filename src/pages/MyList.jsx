import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

const MyList = () => {
  const [myList, setMyList] = useState([]);

  // ✅ Load My List from localStorage once
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("myList")) || [];
    setMyList(saved);
  }, []);

  // ✅ Remove item from My List
  const removeFromMyList = (item) => {
    const updated = myList.filter(
      (m) => !(m.id === item.id && m.title === item.title)
    );
    setMyList(updated);
    localStorage.setItem("myList", JSON.stringify(updated)); // storage update
  };

  return (
    <div style={{ background: "#121212", minHeight: "100vh", padding: "40px 0" }}>
      <Container className="text-white">
        <h2 className="mb-4 fw-bold" style={{ color: "#e50914" }}>
          My List ❤️
        </h2>

        {myList.length === 0 ? (
          <p style={{ color: "rgba(255,255,255,0.7)" }}>No items in My List yet.</p>
        ) : (
          <Row xs={1} sm={2} md={3} lg={3} className="g-4">
            {myList.map((item, index) => (
              <Col key={index}>
                <Card className="bg-dark text-white h-100 p-2 shadow-lg border-0">
                  <div className="ratio ratio-16x9">
                    <iframe
                      src={item.trailer}
                      title={item.title}
                      allowFullScreen
                    ></iframe>
                  </div>
                  <Card.Body className="text-center">
                    <Card.Title className="fw-bold">{item.title}</Card.Title>
                    <Card.Text className="text-muted">{item.genre}</Card.Text>
                    <Button
                      variant="outline-danger"
                      onClick={() => removeFromMyList(item)}
                    >
                      <FaTrash /> Remove
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default MyList;
