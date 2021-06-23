import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// Actions:
import { setMovieAnimation } from "../../redux/actions/movieActions";

// Components:
import AnimationCard from "./AnimationCard";

const Animation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchAdventureMovies() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=16`
        );
        const data = await res.json();
        dispatch(setMovieAnimation(data.results));
      } catch (error) {
        console.log(error);
      }
    }
    fetchAdventureMovies();
  }, [dispatch]);
  return (
    <div>
      <div className="movies">
        <AnimationCard />
      </div>
    </div>
  );
};

export default Animation;
