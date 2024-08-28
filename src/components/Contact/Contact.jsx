import { useDispatch } from "react-redux";

import s from "./Contact.module.css";
import { deleteContactThunk } from "../../redux/contacts/operations";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.li}>
      <div>
        <p className={s.contactName}>{name}</p>
        <a href="" className={s.contactNumber}>{number}</a>
      </div>
      <button
        className={s.button}
        onClick={() => dispatch(deleteContactThunk(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
