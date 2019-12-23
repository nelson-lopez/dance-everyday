import React, { useState } from "react";
import SearchBar from "./Searchbar";
import EventList from "./EventList";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import { useFilterSearch } from "./api/useFilterSearch";
import { HomeProps, SearchValue } from "./types/event-methods.interface";

/**
 *
 * TODO Refactor search filter / No longer need a helper function to filter through Events
 */
const Home = (props: HomeProps) => {
  const [searchInput, setSearch] = useState("");

  const handleOnSubmit = (value: SearchValue): void => {
    console.log(value);
    setSearch(value.search);
  };

  const data = useFilterSearch(searchInput);

  return (
    <div>
      <Header />
      <Nav />
      <SearchBar handleOnSubmit={handleOnSubmit} />
      {data ? (
        <EventList newSearchList={data} searchInput={searchInput} />
      ) : (
        <EventList newSearchList={null} searchInput={searchInput} />
      )}
      <Footer />
    </div>
  );
};

export default Home;
