import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import TrendingCard from "./TrendingCard";
import { setTrendingMovies } from "../redux/actions/movieActions";

const Trending = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
        );
        const data = await res.json();
        dispatch(setTrendingMovies(data.results));
      } catch (error) {
        console.log(error);
      }
    }
    fetchTrendingMovies();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="movies">
        <TrendingCard />
      </div>
    </div>
  );
};

export default Trending;
