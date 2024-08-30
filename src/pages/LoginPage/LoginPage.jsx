import { Field, Form, Formik } from "formik";
import s from "./LoginPage.module.css";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const LoginPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const initialValues = { email: "", password: "" };

  const onSubmit = (values, options) => {
    dispatch(loginThunk(values));
    options.resetForm();
  };

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div className={s.loginPage}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className={s.form}>
          <div className={s.formFields}>
            <label className={s.label}>
              <span className={s.inputName}>Email</span>
              <Field name="email" className={s.input} />
            </label>
            <label className={s.label}>
              <span className={s.inputName}>Password</span>
              <Field name="password" type="password" className={s.input} />
            </label>
          </div>
          <div className={s.buttonAndLink}>
            <button type="submit" className={s.btn}>Sign In</button>
            <p className={s.p}>
              Don't have an account yet? <Link to="/register" className={s.link}>Sign Up!</Link>
            </p>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
