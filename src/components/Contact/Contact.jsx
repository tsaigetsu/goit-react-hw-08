import { useDispatch } from "react-redux";

import s from "./Contact.module.css";
import { deleteContactThunk } from "../../redux/contactsOps";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.li}>
      <div>
        <p>{name}</p>
        <a href="">{number}</a>
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
