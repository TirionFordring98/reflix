import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Movie from "./Movie";
import "./Catalogue.css";

const Catalogue = ({ movies, onToggleRent, budget, handleToggleRent }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [audioPlaying, setAudioPlaying] = useState(null);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    console.log(audioPlaying);
    if (audioPlaying) {
      audioPlaying.audio.play();
    }
  }, [audioPlaying]);

  const handlePlaySoundtrack = (movie) => {
    if (audioPlaying) {
      audioPlaying.audio.pause();
    }

    if (audioPlaying && audioPlaying.id === movie.id) {
      setAudioPlaying(null);
    } else {
      const audio = new Audio(movie.soundtrack);
      setAudioPlaying({ audio, id: movie.id });
    }
  };

  return (
    <div>
      <h2>Catalogue</h2>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <span>Budget: ${budget}</span>
        <Link to="/catalogue/rented">
          <button>View Rented Movies</button>
        </Link>
      </div>
      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <div className="movie-container">
            <Movie
              movie={movie}
              onToggleRent={() => handleToggleRent(movie)}
              isRented={movie.isRented}
              onPlaySoundtrack={() => handlePlaySoundtrack(movie)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
