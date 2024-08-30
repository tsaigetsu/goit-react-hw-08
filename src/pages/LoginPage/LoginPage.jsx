import { Field, Form, Formik } from "formik";
import s from "./LoginPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useEffect } from "react";

const LoginPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  const initialValues = { email: "", password: "" };

  const dispatch = useDispatch();
  const onSubmit = (values, options) => {
    dispatch(loginThunk(values));
    options.resetForm();
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('contacts')
    }
  }, [isLoggedIn, navigate])
  return (
    <div className={s.loginPage}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className={s.form}>
          <div className={s.formFields}>
            <label className={s.label}>
              <span className={s.inputName}>Email</span>
              <Field name="email" className={s.input}></Field>
            </label>
            <label className={s.label}>
              <span className={s.inputName}>Password</span>
              <Field
                name="password"
                type="password"
                className={s.input}
              ></Field>
            </label>
          </div>
          <div className={s.buttonAndLink}>
            <button type="submit" className={s.btn}>Sign In</button>
            <p className={s.p}>
              Don't have an account yet? <Link to="/register" className={s.link}>Sing Up!</Link>{" "}
            </p>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
