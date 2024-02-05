// Components/Catalogue/RentedCatalogue.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./RentedCatalogue.css";

const RentedCatalogue = ({ rentedMovies, onToggleRent }) => {
  const handleUnrent = (movie) => {
    if (movie.isRented) {
      const updatedRentedMovies = rentedMovies.filter(
        (rentedMovie) => rentedMovie.id !== movie.id
      );

      onToggleRent(updatedRentedMovies);
    }
  };

  return (
    <div>
      <h2>Rented Movies</h2>
      <Link to="/catalogue">
        <button>Go Back to Catalogue</button>
      </Link>
      <div className="movie-list">
        {rentedMovies.map((movie) => (
          <div key={movie.id} className="movie">
            <img src={movie.img} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <button
              onClick={() => handleUnrent(movie)}
              disabled={!movie.isRented}
              className={movie.isRented ? "" : "disabled-button"}
            >
              {movie.isRented ? "Unrent Movie" : "Already Unrented"}
              {!movie.isRented && (
                <span className="disabled-message">
                  (Movie Return only available in Catalogue Page)
                </span>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RentedCatalogue;
