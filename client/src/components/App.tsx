import React, { useState } from "react";
import Home from "./Home";
import CreateEvent from "./CreateEvents";
import NotFound from "./NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../App.css";

const App: React.FC = () => {
  const [newList, setNewList] = useState(false);

  const handleCreate = (): void => {
    setNewList(!newList);
  };

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
