import { useEffect, useState } from "react";
import { fetchMoviesDetails } from "../../movies_api";
import { useParams } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getBestMovies() {
      try {
        const movies = await fetchMoviesDetails(movieId);
        console.log(movies);
        setMovieDetail(movies);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      }
    }
    getBestMovies();
  }, [movieId]);

  return (
    <section className={css.section}>
      {movieDetail !== null && (
        <div>
          <h3>
            {movieDetail.title} and his ID = {movieDetail.id}
          </h3>
        </div>
      )}
      {error && <p>{error}</p>}
    </section>
  );
};

export default MovieDetailsPage;
