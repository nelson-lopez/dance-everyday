import React, { useState, useCallback } from "react";
import apiPatch from "./api/apiPatch";
import EditCard from "./EditCard";

/**
 * * Chose to handle card flipping re-rendering logic inside of our Card component in order to
 * * decouple some of our logic and prevent it from getting out of hand in EventList component
 */
const DisplayCard = ({ date, description, handleDelete, id, name }) => {
  const [isClicked, setIsClicked] = useState(false);

  /**
   * * Here we pass down card state that we get from our API upon initial page load.
   * * Once rendered we have to listen to edits that our handled in EditCard if flipped
   */
  const [cardState, setCardState] = useState({
    date: date,
    description: description,
    name: name,
    id: id
  });

  const handleOnEdit = () => {
    setIsClicked(!isClicked);
  };

  /**
   *
   * * handleFlip deals with triggering edit/un-edit interactions
   * * Each toggle calls a PATCH to our API once flipped over
   * *
   */
  const handleFlip = (date, description, name, id) => {
    setCardState(prevState => ({
      ...prevState,
      name: name,
      date: date,
      description: description
    }));
    setIsClicked(!isClicked);

    apiPatch(id, name, date, description);
  };

  const handleReturn = () => {
    setIsClicked(!isClicked);
  };

  const handleOnDelete = useCallback(() => {
    handleDelete(id);
  }, [handleDelete, id]);

  if (!isClicked)
    return (
      <div className="card">
        <img
          src={
            "https://images.pexels.com/photos/270837/pexels-photo-270837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }
          alt="test"
        />
        <button className="front-buttons" onClick={handleOnEdit}>
          Edit
        </button>
        <button className="front-buttons" onClick={handleOnDelete}>
          Delete
        </button>

        <h2>{cardState.name}</h2>
        <h2>{cardState.date}</h2>
        <p>{cardState.description}</p>
      </div>
    );
  else
    return (
      <EditCard
        date={cardState.date}
        name={cardState.name}
        description={cardState.description}
        id={cardState.id}
        handleFlip={handleFlip}
        handleReturn={handleReturn}
      />
    );
};

export default DisplayCard;
