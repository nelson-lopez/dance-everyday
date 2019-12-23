import React from "react";
import Nav from "./Nav";
import CreateEventHeader from "./CreateEventHeader";
import Footer from "./Footer";
import EventForm from "./EventForm";
import { AppProps } from "./types/event-methods.interface";

const CreateEvents = (props: AppProps) => {
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
