import React, { useState } from "react";

/**
 *
 * TODO add functionality for venue editing within formData and handleOnChange
 */

export default function EditCard({
  name,
  date,
  description,
  handleFlip,
  id,
  handleReturn
}) {
  const [formData, setFormData] = useState({
    date: date,
    description: description,
    name: name,
    id: id
  });

  /**
   * * This component employs several event listeners to handle input/change to shoot back up
   */

  const handleOnChange = e => {
    const element = e.target;
    const { name, value } = element;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleOnSubmit = () => {
    handleFlip(formData.date, formData.description, formData.name, formData.id);
  };

  const handleOnReturn = () => {
    handleReturn();
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
            defaultValue={name}
            onChange={handleOnChange}
          />
          <br />
          Date:
          <br />
          <input
            id="event-date"
            type="text"
            name="date"
            defaultValue={date}
            onChange={handleOnChange}
          />
          <br />
          Description:
          <br />
          <input
            id="event-desc"
            type="text"
            name="description"
            defaultValue={description}
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
