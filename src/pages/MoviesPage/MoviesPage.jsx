import MovieList from "../../components/MovieList/MovieList";
import MovieSearchForm from "../../components/MovieSearchForm/MovieSearchForm";
import Loader from "../../components/Loader/Loader";

import { useEffect, useState } from "react";
import { fetchSearchMovie } from "../../movies_api";
import { useSearchParams } from "react-router-dom";

// import css from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [moviesList, setBestMoviesList] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query");

  const onSearch = (searchTerm) => {
    setSearchParams({ query: searchTerm });
    setBestMoviesList([]);
  };

  useEffect(() => {
    if (!query) return;
    setLoading(true);

    async function getSearchMovies() {
      try {
        setError(null);
        const data = await fetchSearchMovie(query);
        setBestMoviesList(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    getSearchMovies();
  }, [query]);

  return (
    <>
      {loading && <Loader />}
      {error && (
        <p>
          Whoops, something went wrong! Please try reloading this page or try
          again later!
        </p>
      )}
      <MovieSearchForm onSearch={onSearch} defaultSearchValue={query} />
      <MovieList movies={moviesList} />
    </>
  );
};

export default MoviesPage;
