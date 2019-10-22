import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
        <div className="link-1">
          <Link to="/">Home</Link>
        </div>
        </li>
        <li>
          <div className="link-2">
            <Link to="/create-event">Create Event</Link>
          </div>
        </li>
        <li>
          <div className="link-3">
            <Link to="/about">About</Link>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
