import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";

export default function MoviesData() {
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("myList")) || [];
    setMyList(savedList);
  }, []);

  const toggleLike = (movie) => {
    let updatedList;
    if (myList.some((m) => m.id === movie.id)) {
      updatedList = myList.filter((m) => m.id !== movie.id);
    } else {
      updatedList = [...myList, movie];
    }
    setMyList(updatedList);
    localStorage.setItem("myList", JSON.stringify(updatedList));
  };

  const renderCards = (movieList) =>
    movieList.map((movie) => (
      <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <div className="card bg-dark text-white h-100 border-0">
          <iframe
            width="100%"
            height="200"
            src={movie.url}
            title={movie.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div className="card-body d-flex justify-content-between align-items-center">
            <h6 className="mb-0">{movie.title}</h6>
            <FaHeart
              size={20}
              style={{ cursor: "pointer" }}
              color={myList.some((m) => m.id === movie.id) ? "#E50914" : "white"}
              onClick={() => toggleLike(movie)}
            />
          </div>
        </div>
      </div>
    ));

  return (
    <div className="container-fluid bg-dark text-white min-vh-100 p-3 p-sm-4 p-md-5">
      <h2 className="mb-4" style={{ color: "#E50914" }}>All Movies</h2>
      <div className="row">{renderCards(movies)}</div>
    </div>
  );
}