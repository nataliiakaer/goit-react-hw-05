import { useEffect, useState } from "react";
import { fetchMovieCasts } from "../../movies_api";
import { useParams } from "react-router-dom";
// import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();

  const [error, setError] = useState(null);

  useEffect(() => {
    async function getBestMovies() {
      try {
        const moviesCast = await fetchMovieCasts(movieId);

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
      MovieCast
      {error && <p>{error}</p>}
    </div>
  );
};

export default MovieCast;
