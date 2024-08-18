import MovieList from "../../components/MovieList/MovieList";
import MovieSearchForm from "../../components/MovieSearchForm/MovieSearchForm";
import Loader from "../../components/Loader/Loader";

import { useEffect, useState } from "react";
import { fetchSearchMovie } from "../../movies_api";

// import css from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [moviesList, setBestMoviesList] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function getSearchMovies() {
      try {
        setError(null);
        const data = await fetchSearchMovie();
        setBestMoviesList(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    getSearchMovies();
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
      <MovieSearchForm />
      <MovieList movies={moviesList} />
    </>
  );
};

export default MoviesPage;
