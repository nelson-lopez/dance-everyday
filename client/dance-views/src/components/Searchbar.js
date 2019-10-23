import React, { useState } from 'react';

const Searchbar = () => {
  const [formInput, setInput] = useState('');

  const handleOnInput = e => {
    setInput(e.target.value);
    console.log(formInput);
  };
  return (
    <div className="search-bar">
      <form>
        <label>
          <input type="text" name="name" onChange={handleOnInput} id="form-input" placeholder="Search dance events" />
        </label>
        <input type="submit" value="Submit" id="form-submit"/>
      </form>
    </div>
  );
};

export default Searchbar;
