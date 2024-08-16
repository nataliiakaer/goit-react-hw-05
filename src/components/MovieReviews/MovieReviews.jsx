import { useEffect, useState } from "react";
import { fetchMovieReview } from "../../movies_api";
import { useParams } from "react-router-dom";
// import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getBestMovies() {
      try {
        const moviesCast = await fetchMovieReview(movieId);

        console.log(moviesCast);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      }
    }
    getBestMovies();
  }, [movieId]);

  return (
    <div>
      MovieReviews
      {error && <p>{error}</p>}
    </div>
  );
};

export default MovieReviews;
