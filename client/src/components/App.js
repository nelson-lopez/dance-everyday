import React from "react";
import Home from "./Home";
import CreateEvent from "./CreateEvents";
import NotFound from "./NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../App.css";

const App = () => {
  /**
   * * App is in charge of holding New Event creation as well as redirecting the user to the root page
   * TODO Change the redirecting from being handled in App to CreateEvents component
   * TODO Remove Event creation from App completely and let App only handle rendering routes.
   */

  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/create-event" component={() => <CreateEvent />} />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default () => (
  <Router>
    <App />
  </Router>
);
