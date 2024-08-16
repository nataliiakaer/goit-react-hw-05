import axios from "axios";

const urlBestMovies =
  "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

const options = {
  headers: {
    // Замість api_read_access_token вставте свій токен
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzIyZjFjMmY1ODhlZmFiMzMyOWYzZTQ0NzFmMTFmYiIsIm5iZiI6MTcyMzYyNTU4MS4yMDI4MDksInN1YiI6IjY2YmM2OWFlZDhjN2YwODYxMmQwNTI2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jheoq177_CAMo__BUzZKI9ugZOl9XdxwDLkb84ils4k",
  },
};

export const fetchBestMovies = async () => {
  const { data } = await axios.get(urlBestMovies, options);
  return data;
};

export const fetchMoviesDetails = async (movieId) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );
  return data;
};

export const fetchMovieReview = async (movieId) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );
  return data;
};

export const fetchMovieCasts = async (movieId) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    options
  );
  return data;
};

export const fetchMovieImage = async () => {
  const { data } = await axios.get(
    `https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg`,
    options
  );
  return data;
};
