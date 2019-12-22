import React, { useState } from "react";
import Home from "./Home";
import CreateEvent from "./CreateEvents";
import NotFound from "./NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../App.css";

const App = () => {
  const [newList, setNewList] = useState(false);

  const handleCreate = (): void => {
    setNewList(!newList);
  };

  /**
   * * App is in charge of holding New Event creation as well as redirecting the user to the root page
   * TODO Change the redirecting from being handled in App to CreateEvents component
   * TODO Remove Event creation from App completely and let App only handle rendering routes.
   */

  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Home newList={newList} />} />
        <Route
          exact
          path="/create-event"
          component={() => (
            <CreateEvent handleCreate={handleCreate} newList={newList} />
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
