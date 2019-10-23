import React, { useState } from 'react';

const Searchbar = ({ handleOnSubmit, handleOnSelect }) => {
  const [formInput, setInput] = useState('');
  const [display, setDisplay] = useState(false);

  const handleOnInput = e => {
    setInput(e.target.value);
    console.log(formInput);
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
    console.log(name);
  };

  return (
    <div className="search-bar">
      <button onClick={handleOnDisplay}>Search by type</button>
      {display ? (
        <div>
          <button name="organizers" onClick={handleSelect}>
            {' '}
            Organizers{' '}
          </button>
          <button name="venues" onClick={handleSelect}>
            {' '}
            Venue{' '}
          </button>
          <button name="date" onClick={handleSelect}>
            {' '}
            Date{' '}
          </button>
        </div>
      ) : (
        <div> </div>
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
