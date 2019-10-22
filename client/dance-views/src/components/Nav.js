import React from 'react';
import CreateEvent from './CreateEvents';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <ul>
        <Link to="/">Home</Link>
        <li>
          <CreateEvent />
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
