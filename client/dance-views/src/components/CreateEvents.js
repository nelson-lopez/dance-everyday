import React from 'react';

const CreateEvents = () => {
  return (
    <div>
      <form>
        <label>
          Create new event:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CreateEvents;
