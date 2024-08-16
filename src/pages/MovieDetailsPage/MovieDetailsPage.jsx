import { useEffect, useState } from "react";
import { fetchMoviesDetails } from "../../movies_api";
import { Link, Outlet, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getBestMovies() {
      try {
        const movies = await fetchMoviesDetails(movieId);
        setMovieDetail(movies);
        console.log(movies);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      }
    }
    getBestMovies();
  }, [movieId]);

  return (
    <>
      <button className={css.btnGoBack} type="button">
        <FaArrowLeftLong />
        Go back
      </button>
      {movieDetail !== null && (
        <div className={css.sectionMovie}>
          <img src={movieDetail.poster_path}></img>
          <h2 className={css.titleMovie}>{movieDetail.title}</h2>
          <p>User Score: </p>
          <h3>Overview</h3>
          <p>{movieDetail.overview}</p>
          <h3>Genres</h3>
          <ul className={css.listGenres}>
            {movieDetail.genres.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>

          {/* <ul className={css.listDetails}>
            <li className={css.itemDetails}> 
              <h2 className={css.titleMovie}>{movieDetail.title}</h2>
              <p>User Score: </p>
            </li>
            <li className={css.itemDetails}>
              <h3>Overview</h3>
              <p>{movieDetail.overview}</p>
            </li>
            <li className={css.itemDetails}>
              <h3>Genres</h3>
              <ul className={css.listDetails}>
                {movieDetail.genres.map((item) => {
                  return <li key={item.id}>{item.name}</li>;
                })}
              </ul>
            </li>
          </ul> */}
        </div>
      )}

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
      {error && <p>{error}</p>}
    </>
  );
};

export default MovieDetailsPage;
