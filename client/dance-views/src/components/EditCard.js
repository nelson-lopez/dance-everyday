import React, { useState } from 'react';

export default function EditCard({ date, description, handleFlip }) {
  const [formData, setFormData] = useState({
    date: date,
    description: description
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

  const handleOnSubmit = () => {
    /// Lift up state through submit
    handleFlip(formData.date, formData.description);
  };

  return (
    <div>
      <form>
        <label>
          Edit new card:
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
