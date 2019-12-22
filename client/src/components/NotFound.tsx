import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Oops! Something is wrong.</p>
      <i className="icon-home"></i> Go back in <Link to="/">initial page</Link>,
      is better.
      <div>
        <img
          src="https://media.giphy.com/media/QyWA2VYq5Fqb9eNFv7/giphy.gif"
          alt="woops"
        />
      </div>
    </div>
  );
};

export default NotFound;
