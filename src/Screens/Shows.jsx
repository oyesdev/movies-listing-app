import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// Actions:
import { setShows } from "../redux/actions/seriesActions";

// Components:
import ShowCard from "../components/ShowCard";

const Shows = () => {
  const dispatch = useDispatch();
  useEffect(() => {
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
    fetchShows();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="movies">
        <ShowCard />
      </div>
    </div>
  );
};

export default Shows;
