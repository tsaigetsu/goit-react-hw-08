import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser, selectIsLoggedIn } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/contacts");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className={s.userMenu}>
      <h3 className={s.welcomeText}>Welcome, {user.name}</h3>
      <button className={s.btn} onClick={() => dispatch(logoutThunk())}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
