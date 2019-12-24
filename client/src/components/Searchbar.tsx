import React from "react";
import { SearchProps } from "./types/event-methods.interface";
import { Formik, Field, Form } from "formik";
import { SearchValues } from "./utils/SearchValues";
import { SearchSchema } from "./utils/SearchSchema";

const Searchbar = (props: SearchProps) => {
  return (
    <Formik
      initialValues={SearchValues}
      validationSchema={SearchSchema}
      onSubmit={value => {
        props.handleOnSubmit(value);
      }}
    >
      {({ errors, touched, handleSubmit }) => (
        <Form className="search-bar" onSubmit={handleSubmit}>
          <Field name="search" placeholder="Enter Search" id="form-input" />
          {errors.search && touched.search ? (
            <span style={{ color: "white" }}>
              <div>{errors.search}</div>
            </span>
          ) : null}
          <button id="form-submit" type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Searchbar;
