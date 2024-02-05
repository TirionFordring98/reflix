import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

const usersData = [
  { id: 1, name: "CringeLord9000", backgroundColor: "lightblue" },
  { id: 2, name: "psTheGreat", backgroundColor: "lightgreen" },
  { id: 3, name: "Gilbert", backgroundColor: "lightcoral" },
];

const Landing = () => {
  const [users] = useState(usersData);

  return (
    <div>
      <div>
        <h2>Choose User</h2>
      </div>
      <div className="user-boxes">
        {users.map((user) => (
          <Link key={user.id} to="/catalogue">
            <div
              className="user-box"
              style={{ backgroundColor: user.backgroundColor }}
            >
              {user.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Landing;
