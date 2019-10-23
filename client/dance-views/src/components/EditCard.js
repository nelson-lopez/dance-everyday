import React, { useState, useCallback } from 'react';

export default function EditCard({ name, date, description, handleFlip, id }) {
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

  return (
    <div>
      <form>
        <label>
          Edit new card:
          <input
            type="text"
            name="name"
            placeholder={name}
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="date"
            placeholder={date}
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="description"
            placeholder={description}
            onChange={handleOnChange}
          />
        </label>
        <input type="submit" value="Submit" onClick={handleOnSubmit} />
      </form>
    </div>
  );
}
