import React, { useState, useCallback } from 'react';

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

  const handleOnChange = e => {
    const element = e.target;
    const { name, value } = element;
    ///Grab current element values on change and feed them to current state while spreading previous state
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    console.log(formData);
  };

  const handleOnSubmit = useCallback(() => {
    /// Lift up state through submit
    /// Apply usecallback hook to avoid rerenders
    handleFlip(formData.date, formData.description, formData.name, formData.id);
  }, [
    formData.date,
    formData.description,
    formData.id,
    formData.name,
    handleFlip
  ]);

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
