import css from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";

const MovieList = (movies) => {
  const location = useLocation();
  const moviesList = movies.movies;

  return (
    <ul className={css.list}>
      {Array.isArray(moviesList) &&
        moviesList.map((movie) => {
          return (
            <li key={movie.id}>
              <Link
                state={{ from: location }}
                to={`/movies/${movie.id}`}
                className={css.linkMovvie}
              >
                {movie.original_title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieList;
