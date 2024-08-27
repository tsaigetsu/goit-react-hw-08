import { ErrorMessage, Field, Form, Formik } from "formik";
// import * as Yup from "yup";
import s from "./LoginPage.module.css";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const LoginPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const initialValues = { email: "", password: "" };
  
  const dispatch = useDispatch()
  const onSubmit = (values, options) => {
    dispatch(loginThunk(values));
    options.resetForm();
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form>
          <label>
            <span>Email</span>
            <Field name="email"></Field>
            <ErrorMessage
              name="email"
              component="span"
              className={s.error}></ErrorMessage>
          </label>
          <label>
            <span>Password</span>
            <Field name="password" type="password"></Field>
            <ErrorMessage
              name="password"
              component="span"
              className={s.error}></ErrorMessage>
          </label>
          <button type="submit">Sign In</button>
          <p>Don't have an account yet? <Link to='/register'>Sing Up!</Link> </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
