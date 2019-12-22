import React, { useState } from "react";
import { SearchProps } from "./types/event-methods.interface";

const Searchbar = (props: SearchProps) => {
  const [formInput, setInput] = useState("");

  const handleOnInput = (e: React.FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    props.handleOnSubmit(formInput);
  };
  return (
    <div className="search-bar">
      <form>
        <label>
          <input
            type="text"
            name="name"
            onChange={handleOnInput}
            id="form-input"
            placeholder="Search dance events"
          />
        </label>
        <input
          type="submit"
          value="Submit"
          onClick={handleSubmit}
          id="form-submit"
        />
      </form>
    </div>
  );
};

export default Searchbar;
