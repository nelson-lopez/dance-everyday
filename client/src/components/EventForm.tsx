import React from "react";
import { Formik, Form, Field } from "formik";
import { Redirect } from "react-router-dom";
import { AppProps } from "./types/event-methods.interface";
import { EventValues } from "./FormUtils/EventValues";
import { CreateEventSchema } from "./FormUtils/EventSchema";
import { OnEventSubmit } from "./FormUtils/EventSubmit";

const EventForm = ({ handleCreate, newList }: AppProps) => {
  if (newList) return <Redirect to="/" />;

  return (
    <Formik
      initialValues={EventValues}
      validationSchema={CreateEventSchema}
      onSubmit={async value => {
        /**
         * ! statusOK should not be necessary, find a more tangible way to  chain these call backs
         */
        const statusOk = await OnEventSubmit(value);
        handleCreate();
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
