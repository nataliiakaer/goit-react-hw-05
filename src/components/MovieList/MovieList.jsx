import { useEffect, useState } from "react";
import { fetchBestMovies } from "../../movies_api";
import css from "./MovieList.module.css";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

const MovieList = () => {
  const [bestMovies, setBestMovies] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getBestMovies() {
      try {
        setLoading(true);
        const data = await fetchBestMovies();
        setBestMovies(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    getBestMovies();
  }, []);

  return (
    <>
      {loading && <Loader />}
      {error && (
        <p>
          Whoops, something went wrong! Please try reloading this page or try
          again later!
        </p>
      )}
      <ul className={css.list}>
        {Array.isArray(bestMovies) &&
          bestMovies.map((movie) => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} className={css.linkMovvie}>
                  {movie.original_title}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default MovieList;
