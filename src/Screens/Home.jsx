import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    async function fetchGenre() {
      const res = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      const data = await res.json();

      const genreId = data.genres.map((genre) => {
        return genre.id;
      });

      console.log(genreId);
    }
    fetchGenre();
  }, []);

  return (
    <div className="home-screen">
      <div className="home-card">
        <h2>Horror</h2>
      </div>
      <div className="home-card">
        <h2>Adventure</h2>
      </div>
      <div className="home-card">
        <h2>Action</h2>
      </div>
      <div className="home-card">
        <h2>Drama</h2>
      </div>
      <div className="home-card">
        <h2>Comedy</h2>
      </div>
    </div>
  );
};

export default Home;
