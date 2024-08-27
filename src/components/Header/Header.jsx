import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import { logoutThunk } from "../../redux/auth/operations";
import s from "./Header.module.css";

const Header = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  return (
    <header className={s.header}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        )}
      </ul>
      {isLoggedIn && (
        <ul>
          <li>
            <h3> Welcome {user.name}</h3>
          </li>
          <li>
            <button onClick={() => dispatch(logoutThunk())}>Log out</button>
          </li>
        </ul>
      )}
      {!isLoggedIn && (
        <ul>
          <li>
            <NavLink to="/login">Sign In</NavLink>
          </li>
          <li>
            <NavLink to="/register">Sign Up</NavLink>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
