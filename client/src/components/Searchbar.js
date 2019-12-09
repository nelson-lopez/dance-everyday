import React, { useState } from 'react';

const Searchbar = ({ handleOnSubmit, handleOnSelect }) => {
  const [formInput, setInput] = useState('');
  const [display, setDisplay] = useState(false);

  const handleOnInput = e => {
    setInput(e.target.value);
  };

  const handleOnDisplay = () => {
    setDisplay(!display);
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleOnSubmit(formInput);
  };

  const handleSelect = e => {
    const element = e.target;
    const { name } = element;
    handleOnSelect(name);
  };

  return (
    <div className="search-bar">
      <button onClick={handleOnDisplay} className="filter-button" name="Filter by">Filter by</button>
      {display ? (
        <div>
          <button className="filter-by-options" name="organizers" onClick={handleSelect}>Organizers</button>
          <button className="filter-by-options" name="venues" onClick={handleSelect}>Venue</button>
        </div>
      ) : (
          <div/>
        )}
      <form>
        <label>
          <input
            type="text"
            name="name"
            onChange={handleOnInput}
            id="form-input"
            placeholder="Search dance events"
          />
        </label>
        <input
          type="submit"
          value="Submit"
          onClick={handleSubmit}
          id="form-submit"
        />
      </form>
    </div>
  );
};

export default Searchbar;
