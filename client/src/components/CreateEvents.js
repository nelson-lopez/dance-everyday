import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Nav from "./Nav";
import CreateEventHeader from "./CreateEventHeader";
import Footer from "./Footer";

const CreateEvents = ({ handleOnCreate, redirect }) => {
  const [currentInfo, setCurrentInfo] = useState({
    name: "Event name",
    description: "Describe your event",
    date: "1/1/2019",
    venueName: "Venue Name"
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

      <form className="create-event-form">
        <label>
          <h2>Create new event </h2>
          <input
            type="text"
            name="name"
            placeholder={currentInfo.name}
            onChange={handleOnInput}
          />
          <br />
          <h2>Date </h2>
          <input
            type="text"
            name="date"
            placeholder={currentInfo.date}
            onChange={handleOnInput}
          />
          <h2>Venue Name </h2>
          <input
            type="text"
            name="venueName"
            placeholder={currentInfo.venueName}
            onChange={handleOnInput}
          />
          <br />
          <h2>Description </h2>
          <textarea
            rows="10"
            cols="60"
            id="create-event-desc"
            name="description"
            placeholder={currentInfo.description}
            onChange={handleOnInput}
          />
        </label>
        <br />
        <input
          id="create-event-button"
          type="submit"
          value="Create Event"
          onClick={onSubmit}
        />
      </form>
      <div id="create-event-footer">
        <Footer />
      </div>
    </div>
  );
};

export default CreateEvents;
