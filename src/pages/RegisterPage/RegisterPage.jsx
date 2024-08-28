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
    <div className={s.registerPage}>
      <Formik
        validationSchema={registerSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form className={s.form}>
          <div className={s.formFields}>
            <label className={s.label}>
              <span className={s.inputName}>Name</span>
              <Field name="name" className={s.input}></Field>
              <ErrorMessage name="name" component="span" className={s.error} />
            </label>
            <label className={s.label}>
              <span className={s.inputName}>Email</span>
              <Field name="email" className={s.input}></Field>
              <ErrorMessage name="email" component="span" className={s.error} />
            </label>
            <label className={s.label}>
              <span className={s.inputName}>Password</span>
              <Field name="password" type="password" className={s.input}></Field>
              <ErrorMessage
                name="password"
                component="span"
                className={s.error}
              />
            </label>
          </div>
          <div className={s.buttonAndLink}>
            <button type="submit" className={s.btn}>Register</button>
            <p className={s.p}>
              You already have an account? <Link to="/login" className={s.link}>Sign in</Link>{" "}
            </p>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterPage;
