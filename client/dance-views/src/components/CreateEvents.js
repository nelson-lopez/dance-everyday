import React, { useState } from 'react';

const CreateEvents = () => {
  const [currentInfo, setCurrentInfo] = useState({
    name: 'Event name',
    description: 'Describe your event'
  });

  const handleOnInput = e => {
<<<<<<< HEAD
    setCurrentInfo(e.target.value);
    console.log(currentInfo);
=======
    const element = e.target;
    const { name, value } = element;
    setCurrentInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
>>>>>>> 29ec0cd24ed008c7d6120236b94dcf09d405553a
  };

  return (
    <div>
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
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CreateEvents;
