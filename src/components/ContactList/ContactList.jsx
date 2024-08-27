import { useDispatch, useSelector } from "react-redux";
import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { fetchContactsThunk } from "../../redux/contacts/operations";
import { useEffect } from "react";

const ContactList = () => {
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  const filteredData = useSelector( state => selectFilteredContacts(state));
  return (
    <ul className={s.ul}>
      {filteredData.map((item) => (
        <Contact
          key={item.id}
          name={item.name}
          number={item.number}
          id={item.id}
        />
      ))}
    </ul>
  );
};

export default ContactList;
