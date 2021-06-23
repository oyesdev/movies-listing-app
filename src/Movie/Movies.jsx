import React from "react";
import Action from "./Action/Action";
import Adventure from "./Adventure/Adventure";
import Animation from "./Animation/Animation";
import Drama from "./Drama/Drama";

const Movies = () => {
  return (
    <div className="movie-screen">
      <div className="movie-card">
        <h2>Action</h2>
        <Action />
      </div>
      <div className="movie-card">
        <h2>Adventure</h2>
        <Adventure />
      </div>
      <div className="movie-card">
        <h2>Animation</h2>
        <Animation />
      </div>
      <div className="movie-card">
        <h2>Drama</h2>
        <Drama />
      </div>
    </div>
  );
};

export default Movies;
