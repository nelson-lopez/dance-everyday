import React, { useState } from "react";
import SearchBar from "./Searchbar";
import EventList from "./EventList";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import { useFilterSearch } from "./api/events/useFilterSearch";
import { HomeProps, SearchValue } from "./types/event-methods.interface";

const Home = (props: HomeProps) => {
  const [searchInput, setSearch] = useState("");

  const handleOnSubmit = (value: SearchValue): void => {
    setSearch(value.search);
  };

  const data = useFilterSearch(searchInput);

  return (
    <div>
      <Header />
      <Nav />
      <SearchBar handleOnSubmit={handleOnSubmit} />
      {data ? (
        <EventList
          newSearchList={data}
          newList={props.newList}
          searchInput={searchInput}
        />
      ) : (
        <EventList
          newSearchList={null}
          newList={props.newList}
          searchInput={searchInput}
        />
      )}
      <Footer />
    </div>
  );
};

export default Home;
