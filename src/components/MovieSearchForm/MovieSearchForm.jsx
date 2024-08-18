import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import css from "./MovieSearchForm.module.css";

const FeedbackSchema = Yup.object().shape({
  movieName: Yup.string()
    .min(2, "Too short")
    .max(100, "Too long")
    .required("Required"),
});

const MovieSearchForm = () => {
  const INITIAL_VALUE = {
    movieName: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={INITIAL_VALUE}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.container}>
          <Field className={css.input} type="text" name="movieName" />
          <button className={css.btn} type="button">
            Search
          </button>
          <ErrorMessage
            className={css.error}
            name="movieName"
            component="span"
          />
        </div>
      </Form>
    </Formik>
  );
};

export default MovieSearchForm;
