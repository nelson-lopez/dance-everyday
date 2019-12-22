import React from "react";
import Nav from "./Nav";
import CreateEventHeader from "./CreateEventHeader";
import Footer from "./Footer";
import EventForm from "./EventForm";
import { AppProps } from "./types/event-methods.interface";

const CreateEvents = (props: AppProps) => {
  /**
   *
   * * We destructure the HTML Element in order to grab the correct input and feed it to the component state
   * TODO delegate a POST hook to finish the job and redirect our user after submit
   */

  return (
    <div>
      <CreateEventHeader />
      <Nav />
      <EventForm handleCreate={props.handleCreate} newList={props.newList} />
      <div id="create-event-footer">
        <Footer />
      </div>
    </div>
  );
};

export default CreateEvents;
