import React, { useState } from "react";

import CardProps from "./types/card-props.interface";

/**
 *
 * TODO add functionality for venueName editing within formData and handleOnChange
 */

export default function EditCard(props: CardProps) {
  const [formData, setFormData] = useState({
    date: props.date,
    description: props.description,
    name: props.name,
    id: props.id
  });

  /**
   * * This component employs several event listeners to handle input/change to shoot back up
   */

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;

    setFormData(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  const handleOnSubmit = () => {
    if (props.handleFlip) {
      props.handleFlip(
        formData.date,
        formData.description,
        formData.name,
        formData.id
      );
    }
  };

  const handleOnReturn = () => {
    if (props.handleReturn) props.handleReturn();
  };

  return (
    <div className="edit-form">
      <form>
        <label>
          Edit new card:
          <br />
          <input
            id="event-name"
            type="text"
            name="name"
            defaultValue={props.name}
            onChange={handleOnChange}
          />
          <br />
          Date:
          <br />
          <input
            id="event-date"
            type="text"
            name="date"
            defaultValue={props.date}
            onChange={handleOnChange}
          />
          <br />
          Description:
          <br />
          <input
            id="event-desc"
            type="text"
            name="description"
            defaultValue={props.description}
            onChange={handleOnChange}
          />
        </label>
        <br />
        <input
          id="edit-submit-button"
          type="submit"
          value="Back"
          onClick={handleOnReturn}
        />
        <input
          id="edit-submit-button"
          type="submit"
          value="Update"
          onClick={handleOnSubmit}
        />
      </form>
    </div>
  );
}
