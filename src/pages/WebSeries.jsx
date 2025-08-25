import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";

export default function WebSeries() {
  const bollywoodSeries = [
    { id: 101, title: "Sacred Games", url: "https://www.youtube.com/embed/28j8h0RRov4" },
    { id: 102, title: "Mirzapur", url: "https://www.youtube.com/embed/ZNeGF-PvRHY" },
    { id: 103, title: "The Family Man", url: "https://www.youtube.com/embed/XatRGut65VI" },
    { id: 104, title: "Paatal Lok", url: "https://www.youtube.com/embed/9NDxUbDk_6w" },
    { id: 105, title: "Made in Heaven", url: "https://www.youtube.com/embed/Ol0Y2mxTflQ" },
    { id: 106, title: "Scam 1992", url: "https://www.youtube.com/embed/ISORfez27og" },
    { id: 107, title: "Aashram", url: "https://www.youtube.com/embed/fA8vVdvODhA" },
    { id: 108, title: "Delhi Crime", url: "https://www.youtube.com/embed/m2gT7v5jFjQ" },
    { id: 109, title: "Criminal Justice", url: "https://www.youtube.com/embed/3Ec2_4fO9V4" },
    { id: 110, title: "Breathe", url: "https://www.youtube.com/embed/h3xO46ZQXKs" },
    { id: 111, title: "Inside Edge", url: "https://www.youtube.com/embed/UYzcm2dFX4k" },
    { id: 112, title: "Hostel Daze", url: "https://www.youtube.com/embed/wdEoOVWEaAw" },
  ];

  const hollywoodSeries = [
    { id: 201, title: "Stranger Things", url: "https://www.youtube.com/embed/b9EkMc79ZSU" },
    { id: 202, title: "Game of Thrones", url: "https://www.youtube.com/embed/rlR4PJn8b8I" },
    { id: 203, title: "Breaking Bad", url: "https://www.youtube.com/embed/HhesaQXLuRY" },
    { id: 204, title: "The Witcher", url: "https://www.youtube.com/embed/ndl1W4ltcmg" },
    { id: 205, title: "Money Heist", url: "https://www.youtube.com/embed/_InqQJRqGW4" },
    { id: 206, title: "The Crown", url: "https://www.youtube.com/embed/JWtnJjn6ng0" },
    { id: 207, title: "Dark", url: "https://www.youtube.com/embed/rrwycJ08PSA" },
    { id: 208, title: "Loki", url: "https://www.youtube.com/embed/nW948Va-l10" },
    { id: 209, title: "WandaVision", url: "https://www.youtube.com/embed/sj9J2ecsSpo" },
    { id: 210, title: "Peaky Blinders", url: "https://www.youtube.com/embed/oVzVdvGIC7U" },
    { id: 211, title: "The Boys", url: "https://www.youtube.com/embed/M1bhOaLV4FU" },
    { id: 212, title: "House of the Dragon", url: "https://www.youtube.com/embed/DotnJ7tTA34" },
  ];

  const [myList, setMyList] = useState([]);

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("myList")) || [];
    setMyList(savedList);
  }, []);

  const toggleLike = (series) => {
    let updatedList;
    if (myList.some((s) => s.id === series.id)) {
      updatedList = myList.filter((s) => s.id !== series.id);
    } else {
      updatedList = [...myList, series];
    }
    setMyList(updatedList);
    localStorage.setItem("myList", JSON.stringify(updatedList));
  };

  const renderCards = (seriesList) =>
    seriesList.map((series) => (
      <div key={series.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <div className="card bg-dark text-white h-100 border-0">
          <iframe
            width="100%"
            height="200"
            src={series.url}
            title={series.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div className="card-body d-flex justify-content-between align-items-center">
            <h6 className="mb-0">{series.title}</h6>
            <FaHeart
              size={20}
              style={{ cursor: "pointer" }}
              color={myList.some((s) => s.id === series.id) ? "#E50914" : "white"}
              onClick={() => toggleLike(series)}
            />
          </div>
        </div>
      </div>
    ));

  return (
    <div className="container-fluid bg-dark text-white min-vh-100 p-3 p-sm-4 p-md-5">
      <h2 className="mb-4" style={{ color: "#E50914" }}>Bollywood Web Series</h2>
      <div className="row">{renderCards(bollywoodSeries)}</div>

      <h2 className="mt-5 mb-4" style={{ color: "#E50914" }}>Hollywood Web Series</h2>
      <div className="row">{renderCards(hollywoodSeries)}</div>
    </div>
  );
}
