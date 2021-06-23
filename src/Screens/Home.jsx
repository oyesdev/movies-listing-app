import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// Actions:
import { setMovies } from "../redux/actions/movieActions";
import { setShows } from "../redux/actions/seriesActions";

// Components:
import MovieCard from "../components/MovieCard";
import ShowCard from "../components/ShowCard";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      )
        .then((res) => res.json())
        .then((data) => {
          dispatch(setMovies(data.results));
        })
        .catch((error) => console.log(error));
    };
    const fetchShows = () => {
      fetch(
        `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      )
        .then((res) => res.json())
        .then((data) => {
          dispatch(setShows(data.results));
        })
        .catch((error) => console.log(error));
    };

    fetchMovies();
    fetchShows();
  }, [dispatch]);

  return (
    <div className="home">
      <h2 className="home__heading">Movies</h2>
      <div className="movies">
        <MovieCard />
      </div>
      <h2 className="home__heading">Series</h2>
      <div className="movies">
        <ShowCard />
      </div>
    </div>
  );
};

export default Home;
