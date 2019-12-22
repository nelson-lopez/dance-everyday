import React, { useState } from "react";
import SearchBar from "./Searchbar";
import EventList from "./EventList";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import { useFilterSearch } from "./api/useFilterSearch";
import { HomeProps } from "./types/event-methods.interface";

/**
 *
 * TODO Refactor search filter / No longer need a helper function to filter through Events
 */
const Home = (props: HomeProps) => {
  const [searchInput, setSearch] = useState("");

  const handleOnSubmit = (value: string): void => {
    setSearch(value);
  };

  const data = useFilterSearch(searchInput);

  return (
    <div>
      <Header />
      <Nav />
      <SearchBar handleOnSubmit={handleOnSubmit} />
      {data ? (
        <EventList newSearchList={data} newList={props.newList} />
      ) : (
        <EventList newSearchList={null} newList={props.newList} />
      )}
      <Footer />
    </div>
  );
};

export default Home;
