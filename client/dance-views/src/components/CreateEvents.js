import React, { useState } from 'react';
import Nav from './Nav';

const CreateEvents = () => {
  const [currentInfo, setCurrentInfo] = useState({
    name: 'Event name',
    description: 'Describe your event'
  });

  const handleOnInput = e => {
    const element = e.target;
    const { name, value } = element;
    setCurrentInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <Nav />
      <form>
        <label>
          Create new event:
          <input
            type="text"
            name="name"
            placeholder={currentInfo.name}
            onChange={handleOnInput}
          />
          <input
            type="text"
            name="description"
            placeholder={currentInfo.description}
            onChange={handleOnInput}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CreateEvents;
