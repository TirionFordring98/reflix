import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-link">
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;
