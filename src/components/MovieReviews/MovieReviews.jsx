import { useEffect, useState } from "react";
import { fetchMovieReview } from "../../movies_api";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    async function getBestMovies() {
      try {
        setLoading(true);
        const moviesCast = await fetchMovieReview(movieId);
        setReviews(moviesCast.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    getBestMovies();
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
      {Array.isArray(reviews) && reviews.length > 0 ? (
        <section className={css.section}>
          <ul className={css.list}>
            {Array.isArray(reviews) &&
              reviews.map((review) => {
                return (
                  <li className={css.item} key={review.id}>
                    <p className={css.author}>
                      Author:{" "}
                      <span className={css.authorName}>{review.author}</span>
                    </p>
                    <p>{review.content}</p>
                  </li>
                );
              })}
          </ul>
        </section>
      ) : (
        <p className={css.textNoReviews}>
          We don&apos;t have any reviews for this film.
        </p>
      )}
    </>
  );
};

export default MovieReviews;
