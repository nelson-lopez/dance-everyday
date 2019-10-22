import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <ul>
        <Link to="/">Home</Link>
        <li>
<<<<<<< HEAD
          <CreateEvent />
=======
          <Link to="/create-event">Create Event</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
>>>>>>> 29ec0cd24ed008c7d6120236b94dcf09d405553a
        </li>
      </ul>
    </div>
  );
};

export default Nav;
