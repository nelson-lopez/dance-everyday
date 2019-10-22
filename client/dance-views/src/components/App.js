import React, { useState } from 'react';
import Home from './Home';
import About from './About';
import CreateEvent from './CreateEvents';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../App.css';

const App = () => {
  const [newEvent, setNewEvent] = useState(null);
  React.createContext(newEvent);

  const handleOnCreate = value => {
    setNewEvent(value);
  };

  console.log(newEvent);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route
          exact
          path="/create-event"
          component={() => <CreateEvent handleOnCreate={handleOnCreate} />}
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
