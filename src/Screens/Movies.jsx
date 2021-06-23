import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// Actions:
import { setMovies } from "../redux/actions/movieActions";

// Components:
import MovieCard from "../components/MovieCard";

const Movies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      )
        .then((res) => res.json())
        .then((data) => {
          dispatch(setMovies(data.results));
        })
        .catch((error) => console.log(error));
    };

    fetchMovies();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="movies">
        <MovieCard />
      </div>
    </div>
  );
};

export default Movies;
