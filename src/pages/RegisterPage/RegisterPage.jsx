import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./RegisterPage.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";

const RegisterPage = () => {
  const registerSchema = Yup.object({
    email: Yup.string()
      .required("Required")
      .min(3, "Too short")
      .max(50, "Too much chars"),
    password: Yup.string()
      .required("Required")
      .min(3, "Too short")
      .max(50, "Too much chars"),
  });
  const initialValues = { name: "", email: "", password: "" };
  const dispatch = useDispatch();
  const onSubmit = (values, options) => {
    dispatch(registerThunk(values));
    options.resetForm();
  };
  return (
    <div>
      <Formik
        validationSchema={registerSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form>
          <label>
            <span>Name</span>
            <Field name="name"></Field>
            <ErrorMessage name="name" component="span" className={s.error} />
          </label>
          <label>
            <span>Email</span>
            <Field name="email"></Field>
            <ErrorMessage name="email" component="span" className={s.error} />
          </label>
          <label>
            <span>Password</span>
            <Field name="password" type="password"></Field>
            <ErrorMessage
              name="password"
              component="span"
              className={s.error}
            />
          </label>
          <button type="submit">Register</button>
          <p>
            You already have an account? <Link to="/login">Sign in</Link>{" "}
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterPage;
