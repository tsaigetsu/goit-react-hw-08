import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsLoggedIn, selectIsRefreshing } from "../../redux/auth/selectors";
import { fetchCurrentUser } from "../../redux/auth/operations";
import Loader from "../Loader/Loader";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import s from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/contacts");
    }
  }, [isLoggedIn, navigate]);

  if (isRefreshing) {
    return <Loader />;
  }

  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
