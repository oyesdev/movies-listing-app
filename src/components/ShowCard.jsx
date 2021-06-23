import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MovieCard = () => {
  const shows = useSelector((state) => state.allShows.shows);

  return shows.map((show) => {
    const { id, name, first_air_date, poster_path } = show;
    const IMAGE_URL = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    const releaseYear = new Date(first_air_date).getFullYear();

    return (
      <div className="card" key={id}>
        <Link to={`/series/${id}`} className="card__link">
          <div className="card__image">
            <img src={IMAGE_URL} alt="poster" />
          </div>
          <div className="card__content">
            <h2 className="card__title">{name}</h2>
            <h3 className="card__year">{releaseYear}</h3>
          </div>
        </Link>
      </div>
    );
  });
};

export default MovieCard;
