import React from 'react';
import SearchBar from './Searchbar';
import EventList from './EventList';
import Footer from './Footer';
import Header from './Header';

const Home = ({ newEvent }) => {
  return (
    <div>
      <Header />
      <SearchBar />
      <EventList newEvent={newEvent} />
      <Footer />
    </div>
  );
};

export default Home;
