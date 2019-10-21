import React from 'react';
import CreateEvent from './CreateEvents';

const Nav = () => {
  return (
    <div>
      <ul>
        <li>Events</li>
        <li>
          {' '}
          <CreateEvent />
        </li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default Nav;
