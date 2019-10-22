import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
        <div className="nav-link">
          <Link to="/">Home</Link>
        </div>
        </li>
        <li>
          <div className="nav-link">
            <Link to="/create-event">Create Event</Link>
          </div>
        </li>
        <li>
          <div className="nav-link">
            <Link to="/about">About</Link>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
