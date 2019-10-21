import React from 'react';

export default function EditCard() {
  return (
    <div>
      <form>
        <label>
          Edit new card:
          <input type="text" name="name" placeholder="Event date" />
          <input type="text" name="location" placeholder="Event detail" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
