import React from 'react';
import Home from './Home';
import About from './About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../App.css';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
};

export default () => (
  <Router>
    <App />
  </Router>
);
