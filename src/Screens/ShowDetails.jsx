import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

// Actions:
import {
  selectedShow,
  removeSelectedShow,
} from "../redux/actions/seriesActions";

const ShowDetails = () => {
  const show = useSelector((state) => state.show);
  const dispatch = useDispatch();
  const { showId } = useParams();

  const { name, overview, first_air_date, poster_path } = show;

  const year = new Date(first_air_date).getFullYear().toString();
  useEffect(() => {
    const getMovieDetails = () => {
      return fetch(
        `https://api.themoviedb.org/3/tv/${showId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
        .then((res) => res.json())
        .then((data) => dispatch(selectedShow(data)))
        .catch((error) => console.log(error));
    };

    if (showId && showId !== "") getMovieDetails();
    return () => {
      dispatch(removeSelectedShow());
    };
  }, [showId, dispatch]);

  return (
    <div className="movieDetails">
      {Object.keys(show).length === 0 ? (
        <div className="loader">Loading . . .</div>
      ) : (
        <div className="detailCard">
          <div className="detailCard__image">
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt="poster"
            />
          </div>
          <div className="detailCard__content">
            <h2 className="detailCard__title">{name}</h2>
            <h3 className="detailCard__year">{year}</h3>
            <p className="detailCard__overview">{overview}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowDetails;
