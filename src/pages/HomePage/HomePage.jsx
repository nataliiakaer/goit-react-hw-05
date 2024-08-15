import MovieList from "../../components/MovieList/MovieList";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <h1 className={css.title}>Trending today</h1>
      <MovieList />
    </div>
  );
};

export default HomePage;
