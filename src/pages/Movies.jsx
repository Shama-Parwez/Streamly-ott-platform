import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";

export default function Movies() {
  const bollywoodMovies = [
    { id: 1, title: "Pathaan", url: "https://www.youtube.com/embed/vqu4z34wENw" },
    { id: 2, title: "Jawan", url: "https://www.youtube.com/embed/MWOlnZSnXJo" },
    { id: 3, title: "RRR", url: "https://www.youtube.com/embed/GY4BgdUSpbE" },
    { id: 4, title: "KGF Chapter 2", url: "https://www.youtube.com/embed/JKa05nyUmuQ" },
    { id: 5, title: "Brahmāstra", url: "https://www.youtube.com/embed/BUjXzrgntcY" },
    { id: 6, title: "Gadar 2", url: "https://www.youtube.com/embed/5P7TFvT3rI8" },
    { id: 7, title: "Drishyam 2", url: "https://www.youtube.com/embed/2LqzF5WauAw" },
    { id: 8, title: "Shershaah", url: "https://www.youtube.com/embed/Q0FTXnefVBA" },
    { id: 9, title: "Bhool Bhulaiyaa 2", url: "https://www.youtube.com/embed/PiwQxw4cXvM" },
    { id: 10, title: "War", url: "https://www.youtube.com/embed/tQ0mzXRk-oM" },
    { id: 11, title: "Tiger Zinda Hai", url: "https://www.youtube.com/embed/ePO5M5DE01I" },
    { id: 12, title: "Dangal", url: "https://www.youtube.com/embed/x_7YlGv9u1g" },
  ];

  const hollywoodMovies = [
    { id: 13, title: "Inception", url: "https://www.youtube.com/embed/YoHD9XEInc0" },
    { id: 14, title: "Avengers: Endgame", url: "https://www.youtube.com/embed/TcMBFSGVi1c" },
    { id: 15, title: "The Batman", url: "https://www.youtube.com/embed/mqqft2x_Aa4" },
    { id: 16, title: "Avatar: The Way of Water", url: "https://www.youtube.com/embed/d9MyW72ELq0" },
    { id: 17, title: "Spider-Man: No Way Home", url: "https://www.youtube.com/embed/JfVOs4VSpmA" },
    { id: 18, title: "Doctor Strange 2", url: "https://www.youtube.com/embed/aWzlQ2N6qqg" },
    { id: 19, title: "Black Panther: Wakanda Forever", url: "https://www.youtube.com/embed/_Z3QKkl1WyM" },
    { id: 20, title: "Thor: Love and Thunder", url: "https://www.youtube.com/embed/Go8nTmfrQd8" },
    { id: 21, title: "Guardians of the Galaxy 3", url: "https://www.youtube.com/embed/u3V5KDHRQvk" },
    { id: 22, title: "Iron Man", url: "https://www.youtube.com/embed/8ugaeA-nMTc" },
    { id: 23, title: "Captain America: Civil War", url: "https://www.youtube.com/embed/dKrVegVI0Us" },
    { id: 24, title: "The Avengers", url: "https://www.youtube.com/embed/eOrNdBpGMv8" },
  ];

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
      <h2 className="mb-4" style={{ color: "#E50914" }}>Bollywood Movies</h2>
      <div className="row">{renderCards(bollywoodMovies)}</div>

      <h2 className="mt-5 mb-4" style={{ color: "#E50914" }}>Hollywood Movies</h2>
      <div className="row">{renderCards(hollywoodMovies)}</div>
    </div>
  );
}
