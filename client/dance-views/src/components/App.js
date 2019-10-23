import React, { useState, useEffect } from 'react';
import Home from './Home';
import About from './About';
import CreateEvent from './CreateEvents';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../App.css';

const App = () => {
  const [newEvent, setNewEvent] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const handleOnCreate = value => {
    setNewEvent(prevState => ({
      ...prevState,
      name: value.name,
      date: value.date,
      description: value.description
    }));
    setRedirect(!redirect);
  };
  useEffect(() => {
    setRedirect(false);
  }, [newEvent]);

  // useEffect(() => {
  //   if (newEvent !== null) {
  //     axios
  //       .post('http://localhost:9876/api/events', {
  //         name: newEvent.name,
  //         date: newEvent.date,
  //         description: newEvent.description
  //       })
  //       .then(res => console.log(res));
  //   }
  // }, [newEvent]);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Home newEvent={newEvent} />} />
        <Route exact path="/about" component={About} />
        <Route
          exact
          path="/create-event"
          component={() => (
            <CreateEvent handleOnCreate={handleOnCreate} redirect={redirect} />
          )}
        />
      </Switch>
    </div>
  );
};

export default () => (
  <Router>
    <App />
  </Router>
);
