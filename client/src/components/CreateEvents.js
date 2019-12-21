import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import Nav from "./Nav";
import CreateEventHeader from "./CreateEventHeader";
import Footer from "./Footer";
import { CreateEventSchema } from "./Form Schemas/EventSchema";

const CreateEvents = () => {
  const [submit, setSubmit] = useState(false);
  const [currentInfo, setCurrentInfo] = useState(null);

  const onSubmit = values => {
    // e.preventDefault();
    // setSubmit(true);
    console.log(values);
  };

  /**
   *
   * * We destructure the HTML Element in order to grab the correct input and feed it to the component state
   * TODO delegate a POST hook to finish the job and redirect our user after submit
   */
  const handleOnInput = e => {
    const element = e.target;
    const { name, value } = element;
    setCurrentInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  if (submit) return <Redirect to="/" />;
  return (
    <div>
      <CreateEventHeader />
      <Nav />
      <Formik
        initialValues={{
          name: "",
          eventDate: "",
          venueName: "",
          description: "",
          submit: "Submit"
        }}
        validationSchema={CreateEventSchema}
        onSubmit={values => {
          console.log("submitting", values);
        }}
      >
        {({ errors, touched, handleSubmit }) => (
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
            <button id="create-event-button" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <div id="create-event-footer">
        <Footer />
      </div>
    </div>
  );
};

export default CreateEvents;

// <form classdescription="create-event-form">
//   <label>
//     <h2>Create new event </h2>
//     <input
//       type="text"
//       name="name"
//       placeholder="Event name"
//       onChange={handleOnInput}
//     />
//     <br />
//     <h2>Date </h2>
//     <input
//       type="text"
//       name="date"
//       placeholder="1/1/2019"
//       onChange={handleOnInput}
//     />
//     <h2>Venue Name </h2>
//     <input
//       type="text"
//       name="venueName"
//       placeholder="Venue Name"
//       onChange={handleOnInput}
//     />
//     <br />
//     <h2>Description </h2>
//     <textarea
//       rows="10"
//       cols="60"
//       id="create-event-desc"
//       name="description"
//       placeholder="Describe your event"
//       onChange={handleOnInput}
//     />
//   </label>
//   <br />
//   <input
//     id="create-event-button"
//     type="submit"
//     value="Create Event"
//     onClick={onSubmit}
//   />
// </form>;
