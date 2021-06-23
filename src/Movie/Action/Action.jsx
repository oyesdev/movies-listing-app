import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// Actions:
import { setMovieAction } from "../../redux/actions/movieActions";

// Components:
import ActionCard from "./ActionCard";

const Action = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchActionMovies() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=28`
        );
        const data = await res.json();
        dispatch(setMovieAction(data.results));
      } catch (error) {
        console.log(error);
      }
    }
    fetchActionMovies();
  }, [dispatch]);
  return (
    <div>
      <div className="movies">
        <ActionCard />
      </div>
    </div>
  );
};

export default Action;
