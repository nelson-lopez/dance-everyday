import React, { useState } from 'react';

const Searchbar = () => {
  const [formInput, setInput] = useState('');

  const handleOnInput = e => {
    setInput(e.target.value);
    console.log(formInput);
  };
  return (
    <div>
      <form>
        <label>
          Search Event:
          <input type="text" name="name" onChange={handleOnInput} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Searchbar;
