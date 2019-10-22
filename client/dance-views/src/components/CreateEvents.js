import React, { useState } from 'react';
import Nav from './Nav';

const CreateEvents = ({ handleOnCreate }) => {
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

  const onSubmit = e => {
    e.preventDefault();
    handleOnCreate(currentInfo);
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
        <input type="submit" value="Submit" onClick={onSubmit} />
      </form>
    </div>
  );
};

export default CreateEvents;
