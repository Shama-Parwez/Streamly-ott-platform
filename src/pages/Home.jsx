import React, { useEffect, useState } from "react";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getPopularSeries,
  getTopRatedSeries,
} from "../Service/api";

export default function Home() {
  const [categories, setCategories] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const [
          popularMoviesRes,
          topRatedMoviesRes,
          upcomingMoviesRes,
          popularSeriesRes,
          topRatedSeriesRes,
        ] = await Promise.all([
          getPopularMovies("hi-IN", 1),
          getTopRatedMovies("hi-IN", 1),
          getUpcomingMovies("hi-IN", 1),
          getPopularSeries("en-US", 1),
          getTopRatedSeries("en-US", 1),
        ]);

        setCategories({
          "Popular Movies": popularMoviesRes.data.results,
          "Top Rated Movies": topRatedMoviesRes.data.results,
          "Upcoming Movies": upcomingMoviesRes.data.results,
          "Popular Series": popularSeriesRes.data.results,
          "Top Rated Series": topRatedSeriesRes.data.results,
        });

        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="container-fluid bg-dark text-white min-vh-100 d-flex justify-content-center align-items-center">
        <h3 style={{ color: "#E50914" }}>Loading...</h3>
      </div>
    );
  }

  return (
    <div className="container-fluid bg-dark text-white min-vh-100 p-3 p-sm-4 p-md-5">
      {Object.entries(categories).map(([categoryName, items]) => (
        <div key={categoryName} className="mb-5">
          <h2 className="mb-3" style={{ color: "#E50914" }}>{categoryName}</h2>
          <div className="scroll-row">
            {items.map(item => (
              <div key={item.id} className="scroll-card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title || item.name}
                  className="card-img-top"
                />
                <h5 className="card-title">{item.title || item.name}</h5>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
