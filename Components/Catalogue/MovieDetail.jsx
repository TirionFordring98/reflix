// MovieDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { moviesData } from "../../src/Constants";
import "./MovieDetail.css";
import { Link } from "react-router-dom";

const MovieDetail = () => {
  const { movieId } = useParams();
  const selectedMovie = moviesData.find(
    (movie) => movie.id === parseInt(movieId, 10)
  );

  return (
    <div className="movie-detail-container">
      <div className="movie-detail">
        <h2 className="movie-detail-title">{selectedMovie.title}</h2>
        <img src={selectedMovie.img} alt={selectedMovie.title} />
        <p className="movie-detail-description">{selectedMovie.descrShort}</p>
        <p className="movie-detail-status">
          {selectedMovie.isRented ? "Rented" : "Available"}
        </p>
        <div className="button-container">
          <Link to="/catalogue">
            <button className="return-button">Return to Catalogue</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
