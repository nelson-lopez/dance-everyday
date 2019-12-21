import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import Nav from "./Nav";
import CreateEventHeader from "./CreateEventHeader";
import Footer from "./Footer";
import { CreateEventSchema } from "./Form Schemas/EventSchema";
import EventForm from "./EventForm";

const CreateEvents = () => {
  const [submit, setSubmit] = useState(false);

  const onSubmit = values => {
    setSubmit(true);
  };

  /**
   *
   * * We destructure the HTML Element in order to grab the correct input and feed it to the component state
   * TODO delegate a POST hook to finish the job and redirect our user after submit
   */

  if (submit) return <Redirect to="/" />;
  return (
    <div>
      <CreateEventHeader />
      <Nav />
      <EventForm />
      <div id="create-event-footer">
        <Footer />
      </div>
    </div>
  );
};

export default CreateEvents;
