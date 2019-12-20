import React, { useState } from "react";
import SearchBar from "./Searchbar";
import EventList from "./EventList";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import { useFilterSearch } from "./api/useFilterSearch";

/**
 *
 * TODO Refactor search filter / No longer need a helper function to filter through Events
 */
const Home = ({ newEvent }) => {
  const [searchInput, setSearch] = useState(null);

  const handleOnSubmit = value => {
    setSearch(value);
  };

  const data = useFilterSearch(searchInput);

  console.log(data);
  return (
    <div>
      <Header />
      <Nav />
      <SearchBar handleOnSubmit={handleOnSubmit} />
      {data ? (
        <EventList newEvent={newEvent} newSearchList={data} />
      ) : (
        <EventList newEvent={newEvent} newSearchList={null} />
      )}
      <Footer />
    </div>
  );
};

export default Home;
