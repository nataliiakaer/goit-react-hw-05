import { useEffect, useState } from "react";
import { fetchMovieReview } from "../../movies_api";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    setLoading(true);

    async function getMoviesReviews() {
      try {
        setError(null);
        const moviesCast = await fetchMovieReview(movieId);
        setReviews(moviesCast.results);
        if (moviesCast.results.length === 0) {
          setMessage("We don't have any reviews for this movie.");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    getMoviesReviews();
  }, [movieId]);

  return (
    <>
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
        <p className={css.textNoReviews}>{message}</p>
      )}
      {loading && <Loader />}
      {error !== null && (
        <p>
          Whoops, something went wrong! Please try reloading this page or try
          again later!
        </p>
      )}
    </>
  );
};

export default MovieReviews;
