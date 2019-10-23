import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './Searchbar';
import EventList from './EventList';
import Footer from './Footer';
import Header from './Header';

const Home = ({ newEvent }) => {
  const [searchInput, setSearch] = useState(null);
  const [searchValue, setValue] = useState(null);

  const handleOnSubmit = value => {
    setSearch(value);
  };

  useEffect(() => {
    if (searchInput)
      axios
        .get('http://localhost:9876/api/events')
        .then(res => setValue(res.data.events));
  }, [searchInput]);

  console.log(searchInput);

  console.log(searchValue);

  return (
    <div>
      <Header />
      <SearchBar handleOnSubmit={handleOnSubmit} />
      <EventList newEvent={newEvent} />
      <Footer />
    </div>
  );
};

export default Home;
