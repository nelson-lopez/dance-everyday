import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <div>
            <Link to="/">Home</Link>
          </div>
        </li>
        <li>
          <div>
            <Link to="/create-event">Create Event</Link>
          </div>
        </li>
        <li>
          <div>
            <Link to="/venues">Venues</Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
