import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

// Actions:
import {
  selectedMovie,
  removeSelectedMovie,
} from "../redux/actions/movieActions";

const MovieDetails = () => {
  const movie = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const { movieId } = useParams();

  const {
    title,
    genres,
    overview,
    release_date,
    poster_path,
    spoken_languages,
    status,
  } = movie;

  const year = new Date(release_date).getFullYear().toString();
  useEffect(() => {
    const getMovieDetails = () => {
      return fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
        .then((res) => res.json())
        .then((data) => dispatch(selectedMovie(data)))
        .catch((error) => console.log(error));
    };

    if (movieId && movieId !== "") getMovieDetails();
    return () => {
      dispatch(removeSelectedMovie());
    };
  }, [movieId, dispatch]);

  return (
    <div className="movieDetails">
      {Object.keys(movie).length === 0 ? (
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
            <h2 className="detailCard__title">{title}</h2>
            <h4 className="detailCard__status">{status}</h4>
            <h3 className="detailCard__year">{year}</h3>
            <div className="detailCard__genres">
              {genres.map((genre, idx) => {
                return <h4 key={idx}>{genre.name}</h4>;
              })}
            </div>
            <p className="detailCard__overview">{overview}</p>
            <div className="detailCard__languages">
              <h4>Languages: </h4>
              {spoken_languages.map((lang, idx) => (
                <p key={idx}>{lang.name}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
