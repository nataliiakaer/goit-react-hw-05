import { useEffect, useRef, useState } from "react";
import { fetchMoviesDetails } from "../../movies_api";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import css from "./MovieDetailsPage.module.css";
import Loader from "../../components/Loader/Loader";

const defaultImg =
  "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const backLink = useRef(location.state?.from ?? "/movies");

  useEffect(() => {
    if (!movieId) return;
    setLoading(true);

    async function getMoviesDetails() {
      try {
        setError(null);
        const movies = await fetchMoviesDetails(movieId);
        setMovieDetail(movies);
      } catch (error) {
        setError(
          "Whoops, something went wrong! Please try reloading this page or try again later!"
        );
        return error;
      } finally {
        setLoading(false);
      }
    }

    getMoviesDetails();
  }, [movieId]);

  return (
    <>
      <Link to={backLink.current} className={css.linkGoBack}>
        <FaArrowLeftLong />
        Go back
      </Link>
      {loading && <Loader />}
      {error ? (
        <p>{error}</p>
      ) : (
        movieDetail !== null && (
          <>
            <div className={css.sectionMovie}>
              <img
                src={
                  movieDetail.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`
                    : defaultImg
                }
                width={250}
                alt="poster"
              />
              <div className={css.detailContainer}>
                <h2 className={css.titleMovie}>{movieDetail.title}</h2>
                <p>User Score: {Math.floor(movieDetail.popularity)}%</p>
                <h3>Overview</h3>
                <p>{movieDetail.overview}</p>
                <h3>Genres</h3>
                <ul className={css.listGenres}>
                  {movieDetail.genres.map((item) => {
                    return <li key={item.id}>{item.name}</li>;
                  })}
                </ul>
              </div>
            </div>

            <div className={css.containerAddInfo}>
              <p className={css.titleAddInfo}>Additional information</p>

              <ul className={css.listAddInfo}>
                <li>
                  <Link to="cast" className={css.linkAddInfo} href="">
                    Cast
                  </Link>
                </li>
                <li>
                  <Link to="reviews" className={css.linkAddInfo}>
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>
            <Outlet />
          </>
        )
      )}
    </>
  );
};

export default MovieDetailsPage;
