import { useEffect } from "react";
import { fetchMoviesDetails } from "../../movies_api";
// import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  useEffect(() => {
    async function getBestMovies() {
      try {
        const movies = await fetchMoviesDetails();
        console.log(movies);
      } catch (error) {
        console.log(error);
      }
    }
    getBestMovies();
  }, []);

  return <div></div>;
};

export default MovieDetailsPage;
