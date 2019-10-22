import React from 'react';
import Home from './Home';
import About from './About';
import CreateEvent from './CreateEvents';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../App.css';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/create-event" component={CreateEvent} />
      </Switch>
    </div>
  );
};

export default () => (
  <Router>
    <App />
  </Router>
);
