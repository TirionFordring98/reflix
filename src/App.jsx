import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import Landing from "../Components/Landing";
import Catalogue from "../Components/Catalogue/Catalogue";
import MovieDetail from "../Components/Catalogue/MovieDetail";
import RentedCatalogue from "../Components/Catalogue/RentedCatalogue";
import { moviesData } from "./Constants";
import "./App.css";

const App = () => {
  const [budget, setBudget] = useState(100);
  const [movies, setMovies] = useState(moviesData);
  const [rentedMovies, setRentedMovies] = useState([]);

  const toggleRent = (selectedMovie) => {
    const updatedMovies = movies.map((movie) =>
      movie.id === selectedMovie.id
        ? { ...movie, isRented: !movie.isRented }
        : movie
    );

    setMovies(updatedMovies);

    if (selectedMovie.isRented) {
      setRentedMovies((prevRentedMovies) =>
        prevRentedMovies.filter((movie) => movie.id !== selectedMovie.id)
      );
    } else {
      setRentedMovies((prevRentedMovies) => [
        ...prevRentedMovies,
        selectedMovie,
      ]);
    }

    const rentalCost = 10;
    setBudget((prevBudget) =>
      selectedMovie.isRented ? prevBudget + rentalCost : prevBudget - rentalCost
    );
  };

  return (
    <Router>
      <div>
        <div className="App">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Landing />} />{" "}
          <Route path="/movies/:movieId" element={<MovieDetail />} />
          <Route
            path="/catalogue"
            element={
              <Catalogue
                movies={movies}
                onToggleRent={toggleRent}
                budget={budget}
                handleToggleRent={toggleRent}
              />
            }
          />
          <Route
            path="/catalogue/rented"
            element={
              <RentedCatalogue
                rentedMovies={rentedMovies}
                onToggleRent={toggleRent}
                budget={budget}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
