import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { CreateEventSchema } from "./Form Schemas/EventSchema";
import { Redirect } from "react-router-dom";
import { postEvent } from "./api/postEvent";
import { AppProps } from "./types/event-methods.interface";

const EventForm = ({ handleCreate }: AppProps) => {
  const [submit, setSubmit] = useState(false);

  const setRedirect = () => {
    // handleCreate();
    setSubmit(true);
  };

  if (submit) return <Redirect to="/" />;

  /**
   * ! Formik issue with callbacks causing a bug where we lose redirect to root page after adding handleCreate to onSubmit
   * TODO Figure out a way to extract value from form or possibly find a different library for validation
   */
  return (
    <Formik
      initialValues={{
        name: "",
        eventDate: "",
        venueName: "",
        description: "",
        submit: "Submit"
      }}
      validationSchema={CreateEventSchema}
      onSubmit={(values, { setSubmitting }) => {
        setRedirect();
        postEvent(values);
        setTimeout(() => {
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ errors, touched, handleSubmit, isSubmitting }) => (
        <Form className="create-event-form" onSubmit={handleSubmit}>
          <Field name="name" placeholder="Event" />

          {errors.name && touched.name ? (
            <span style={{ color: "red", fontWeight: "bold" }}>
              <div>{errors.name}</div>
            </span>
          ) : null}

          <Field name="eventDate" placeholder="MM/DD/YYYY" />
          {errors.eventDate && touched.eventDate ? (
            <span style={{ color: "red", fontWeight: "bold" }}>
              <div>{errors.eventDate}</div>
            </span>
          ) : null}

          <Field name="venueName" placeholder="Venue Name" />
          {errors.venueName && touched.venueName ? (
            <div>
              <span style={{ color: "red", fontWeight: "bold" }}>
                {errors.venueName}
              </span>
            </div>
          ) : null}
          <Field
            name="description"
            component="textarea"
            rows="10"
            cols="60"
            id="create-event-desc"
            placeholder="Describe your event"
          />
          {errors.description && touched.description ? (
            <span style={{ color: "red", fontWeight: "bold" }}>
              <div>{errors.description}</div>
            </span>
          ) : null}
          <button
            id="create-event-button"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default EventForm;
