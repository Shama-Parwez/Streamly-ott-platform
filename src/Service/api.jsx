import axios from "axios";

const API_KEY = "ae82116359957bb1b6db99826776d4fb";
const BASE_URL = "https://api.themoviedb.org/3";

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});

export const getPopularMovies = () => api.get("/movie/popular");
export const getTopRatedMovies = () => api.get("/movie/top_rated");
export const getUpcomingMovies = () => api.get("/movie/upcoming");
export const getPopularSeries = () => api.get("/tv/popular");
export const getTopRatedSeries = () => api.get("/tv/top_rated");

export default api;
