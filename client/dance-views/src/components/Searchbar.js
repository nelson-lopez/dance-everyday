import React from 'react';

const Searchbar = () => {
  return (
    <div>
      <form>
        <label>
          Search Event:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Searchbar;
