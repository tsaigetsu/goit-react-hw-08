import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContactsThunk } from "../../redux/contacts/operations";

const ContactForm = () => {
  const registerSchema = Yup.object({
    name: Yup.string()
      .required("Required")
      .min(3, "Too short")
      .max(50, "Too much chars"),
    number: Yup.string()
      .required("Required")
      .min(3, "Too short")
      .max(50, "Too much chars"),
  });

  const initialValues = { name: "", number: "" };

  const dispatch = useDispatch();

  const onSubmit = (values, options) => {
    const newContact = { name: values.name, number: values.number };

    dispatch(addContactsThunk(newContact));
    options.resetForm();
  };

  return (
    <div className={s.main}>
      <Formik
        validationSchema={registerSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form className={s.form}>
          <div className={s.formFields}>
            <label className={s.label}>
              <span className={s.inputName}>Name</span>
              <Field name="name" className={s.input} />
              <ErrorMessage name="name" component="span" className={s.error} />
            </label>
            <label className={s.label}>
              <span className={s.inputName}>Number</span>
              <Field name="number" className={s.input} />
              <ErrorMessage
                name="number"
                component="span"
                className={s.error}
              />
            </label>
          </div>

          <button type="submit" className={s.btn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
