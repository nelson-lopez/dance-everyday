import React, { useState } from 'react';

const CreateEvents = () => {
  const [currentInfo, setCurrentInfo] = useState('');

  const handleOnInput = e => {
    setCurrentInfo(e.target.input);
  };

  return (
    <div>
      <form>
        <label>
          Create new event:
          <input type="text" name="name" onChange={handleOnInput} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CreateEvents;
