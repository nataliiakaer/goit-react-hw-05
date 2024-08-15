import { useEffect, useState } from "react";
import { fetchBestMovies, fetchMoviesDetails } from "../../movies_api";
import css from "./MovieList.module.css";

const MovieList = () => {
  const [bestMovies, setBestMovies] = useState(null);

  useEffect(() => {
    async function getBestMovies() {
      try {
        const data = await fetchBestMovies();
        setBestMovies(data.results);
        const movies = await fetchMoviesDetails();
        console.log(movies);
      } catch (error) {
        console.log(error);
      }
    }
    getBestMovies();
  }, []);

  return (
    <ul className={css.list}>
      {Array.isArray(bestMovies) &&
        bestMovies.map((movie) => {
          return (
            <li key={movie.id}>
              {console.log(movie.id)}
              <a className={css.linkMovvie} href="">
                {movie.original_title}
              </a>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieList;
