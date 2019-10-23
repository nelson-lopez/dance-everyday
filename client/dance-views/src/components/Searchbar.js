import React, { useState } from 'react';

const Searchbar = ({ handleOnSubmit }) => {
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

  return (
    <div>
      <button onClick={handleOnDisplay}>Search by type</button>
      {display ? (
        <div>
          <button> Dance </button>
          <button> Organizer </button>
          <button> Date </button>
        </div>
      ) : (
        <div> </div>
      )}

      <form>
        <label>
          Search Event:
          <input type="text" name="name" onChange={handleOnInput} />
        </label>
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default Searchbar;
