import React, { useState, useEffect } from "react";
import axios from "axios";
import filterByName from "./helperfunctions/filterByName";
import getFilteredObj from "./helperfunctions/getFilteredObj";
import SearchBar from "./Searchbar";
import EventList from "./EventList";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

/**
 *
 * TODO Refactor search filter / No longer need a helper function to filter through Events
 */
const Home = ({ newEvent }) => {
  const [searchInput, setSearch] = useState(null);
  const [searchValue, setValue] = useState(null);
  const [selected, setSelected] = useState(null);

  const handleOnSubmit = value => {
    setSearch(value);
  };
  const handleOnSelect = value => {
    setSelected(value);
  };

  useEffect(() => {
    if (searchInput)
      axios
        .get("http://localhost:9876/api/events")
        .then(res => {
          const response = res.data.data;
          const filter = filterByName(response, searchInput);
          const sanitzedData = getFilteredObj(response, filter);
          setValue(sanitzedData);
        })
        .catch(err => console.log(err));
  }, [searchInput]);

  useEffect(() => {
    if (searchInput && selected) {
      if (selected === "venues") {
        axios
          .get(`http://localhost:9876/api/${selected}`)
          .then(res => {
            const result = res.data.data.filter(
              obj => obj.name.toLowerCase() === searchInput.toLowerCase()
            );
            const { events } = result[0];
            setValue(events);
          })
          .catch(err => console.log(err));
      }
      if (selected === "organizers") {
        axios
          .get(`http://localhost:9876/api/${selected}`)
          .then(res => {
            const result = res.data.data.filter(
              obj => obj.name.toLowerCase() === searchInput.toLowerCase()
            );
            const { events } = result[0];
            setValue(events);
          })
          .catch(err => console.log(err));
      }
    }
  }, [searchInput, selected]);

  console.log(searchValue);

  return (
    <div>
      <Header />
      <Nav />
      <SearchBar
        handleOnSubmit={handleOnSubmit}
        handleOnSelect={handleOnSelect}
      />
      <EventList newEvent={newEvent} newSearchList={searchValue} />
      <Footer />
    </div>
  );
};

export default Home;
