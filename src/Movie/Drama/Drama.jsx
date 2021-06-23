import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// Actions:
import { setMovieDrama } from "../../redux/actions/movieActions";

// Components:
import DramaCard from "./DramaCard";

const Animation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchDramaMovies() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=18`
        );
        const data = await res.json();
        dispatch(setMovieDrama(data.results));
      } catch (error) {
        console.log(error);
      }
    }
    fetchDramaMovies();
  }, [dispatch]);
  return (
    <div>
      <div className="movies">
        <DramaCard />
      </div>
    </div>
  );
};

export default Animation;
