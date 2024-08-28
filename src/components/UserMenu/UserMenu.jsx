import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
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
