import { useEffect, useState } from "react";
import { fetchBestMovies } from "../../movies_api";
import css from "./MovieList.module.css";
import { Link } from "react-router-dom";

const MovieList = () => {
  const [bestMovies, setBestMovies] = useState(null);

  useEffect(() => {
    async function getBestMovies() {
      try {
        const data = await fetchBestMovies();
        setBestMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getBestMovies();
  }, []);

  return (
    <section className={css.section}>
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
    </section>
  );
};

export default MovieList;
