import React, { useState, useEffect } from "react";
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
  const [newEvent, setNewEvent] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const handleOnCreate = value => {
    setNewEvent(prevState => ({
      ...prevState,
      name: value.name,
      date: value.date,
      description: value.description,
      venueName: value.venueName
    }));
    setRedirect(!redirect);
  };

  useEffect(() => {
    setRedirect(false);
  }, [newEvent]);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Home newEvent={newEvent} />} />
        <Route
          exact
          path="/create-event"
          component={() => (
            <CreateEvent handleOnCreate={handleOnCreate} redirect={redirect} />
          )}
        />
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
