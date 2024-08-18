// import { useEffect, useState } from "react";
// import { fetchBestMovies } from "../../movies_api";
// import css from "./MovieList.module.css";
// import { Link, useLocation } from "react-router-dom";
// import Loader from "../Loader/Loader";

// const MovieList = () => {
//   const [movies, setMovies] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const location = useLocation();
//   const [searchValue, setSearchValue] = useState(null);


//   const onSearch = (event) => {
//     setSearchValue(event);
//     setMovies([]);
//   };

//   useEffect(() => {
//     if (!searchValue) return;
//     setLoading(true);

//     async function getBestMovies() {
//       if (!searchValue) return;
      
//       try {
//         setError(null);
//         const data = await fetchBestMovies(searchValue);
//         setMovies(data.results);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     getBestMovies();
//   }, [searchValue]);

//   return (
//     <>
//       {loading && <Loader />}
//       {error && (
//         <p>
//           Whoops, something went wrong! Please try reloading this page or try
//           again later!
//         </p>
//       )}
//       <ul className={css.list}>
//         {Array.isArray(movies) &&
//           movies.map((movie) => {
//             return (
//               <li key={movie.id}>
//                 <Link state={{ from: location }} to={`/movies/${movie.id}`} className={css.linkMovvie}>
//                   {movie.original_title}
//                 </Link>
//               </li>
//             );
//           })}
//       </ul>
//     </>
//   );
// };

// export default MovieList;
