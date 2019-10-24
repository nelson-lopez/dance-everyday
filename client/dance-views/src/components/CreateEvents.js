import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Nav from './Nav';
import CreateEventHeader from './CreateEventHeader'

const CreateEvents = ({ handleOnCreate, redirect }) => {
  const [currentInfo, setCurrentInfo] = useState({
    name: 'Event name',
    description: 'Describe your event',
    date: '1/1/2019'
  });

  const onSubmit = e => {
    e.preventDefault();
    handleOnCreate(currentInfo);
  };

  const handleOnInput = e => {
    const element = e.target;
    const { name, value } = element;
    setCurrentInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  if (redirect) return <Redirect to="/" />;
  return (
    <div>
      <CreateEventHeader />
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
            name="date"
            placeholder={currentInfo.date}
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
