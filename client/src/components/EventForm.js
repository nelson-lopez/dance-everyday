import React from "react";
import { Formik, Form, Field } from "formik";
import { CreateEventSchema } from "./Form Schemas/EventSchema";

const EventForm = () => {
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
