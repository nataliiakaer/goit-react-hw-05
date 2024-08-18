import { useEffect, useState } from "react";
import { fetchBestMovies } from "../../movies_api";

import css from "./HomePage.module.css";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [bestMovies, setBestMovies] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function getBestMovies() {
      try {
        setError(null);
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
    <div>
      <h1 className={css.title}>Trending today</h1>
      {loading && <Loader />}
      {error && (
        <p>
          Whoops, something went wrong! Please try reloading this page or try
          again later!
        </p>
      )}
      <MovieList movies={bestMovies} />
    </div>
  );
};

export default HomePage;
