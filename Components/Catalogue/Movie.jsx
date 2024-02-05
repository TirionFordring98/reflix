import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ movie, onToggleRent, isRented, onPlaySoundtrack }) => {
  const handleToggleRent = () => {
    onToggleRent(movie);
  };

  const handlePlaySoundtrack = () => {
    onPlaySoundtrack(movie.soundtrack);
  };

  return (
    <div className="movie">
      <Link key={movie.id} to={`/movies/${movie.id}`}>
        <img src={movie.img} alt={movie.title} />
      </Link>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
        <button onClick={handleToggleRent}>
          {isRented ? "Return Movie" : "Rent"}
        </button>
        <button onClick={handlePlaySoundtrack}>Play Soundtrack</button>
      </div>
    </div>
  );
};

export default Movie;
