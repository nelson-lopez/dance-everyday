import React, { useState, useCallback } from "react";
import apiPatch from "../api/events/events.apiPatch";
import EditCard from "./EditCard";
import CardPropsInterface from "../types/card-props.interface";

/**
 * * Chose to handle card flipping re-rendering logic inside of our Card component in order to
 * * decouple some of our logic and prevent it from getting out of hand in EventList component
 */
const EventCard = (props: CardPropsInterface) => {
  const [isClicked, setIsClicked] = useState(false);

  /**
   * * Here we pass down card state that we get from our API upon initial page load.
   * * Once rendered we have to listen to edits that our handled in EditCard if flipped
   */
  const [cardState, setCardState] = useState({
    date: props.date,
    description: props.description,
    name: props.name,
    id: props.id
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
  const handleFlip = (
    date: string,
    description: string,
    name: string,
    id: number
  ) => {
    setCardState(prevState => ({
      ...prevState,
      name: name,
      date: date,
      description: description
    }));
    setIsClicked(!isClicked);

    apiPatch(cardState);
  };

  const handleReturn = (): void => {
    setIsClicked(!isClicked);
  };

  const handleOnDelete = useCallback(() => {
    if (props.handleDelete) props.handleDelete(props.id);
  }, [props]);

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

export default EventCard;
