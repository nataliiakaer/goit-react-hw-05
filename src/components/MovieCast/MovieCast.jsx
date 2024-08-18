import { useEffect, useState } from "react";
import { fetchMovieCasts } from "../../movies_api";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import css from "./MovieCast.module.css";

const defaultImg =
  "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

const MovieCast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  setLoading(true);

  useEffect(() => {
    if (!movieId) return;
    setLoading(true);

    async function getMoviesCasts() {
      try {
        setError(null)
        const moviesCast = await fetchMovieCasts(movieId);
        setCasts(moviesCast.cast);

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

      getMoviesCasts();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && (
        <p>
          Whoops, something went wrong! Please try reloading this page or try
          again later!
        </p>
      )}
      {Array.isArray(casts) && casts.length > 0 && (
        <section className={css.section}>
          <ul className={css.list}>
            {casts.map((cast) => {
              return (
                <li className={css.item} key={cast.cast_id}>
                  <img
                    className={css.img}
                    src={
                      cast.profile_path
                        ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                        : defaultImg
                    }
                    width={100}
                    alt="poster"
                  />
                  <p className={css.name}>{cast.original_name}</p>
                  <p className={css.text}>Character: {cast.character}</p>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </>
  );
};

export default MovieCast;
