import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AnimationCard = () => {
  const movies = useSelector((state) => state.animationMovie.movies);
  return movies.map((movie) => {
    const { id, title, release_date, poster_path } = movie;
    const IMAGE_URL = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    const releaseYear = new Date(release_date).getFullYear().toString();

    return (
      <div className="card" key={id}>
        <Link to={`/movie/${id}`} className="card__link">
          <div className="card__image">
            <img src={IMAGE_URL} alt="poster" />
          </div>
          <div className="card__content">
            <h2 className="card__title">{title}</h2>
            <h3 className="card__year">{releaseYear}</h3>
          </div>
        </Link>
      </div>
    );
  });
};

export default AnimationCard;
