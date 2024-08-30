// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { fetchContactsThunk } from "./redux/contacts/operations";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage/HomePage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { useEffect } from "react";
import { refreshUserThunk } from "./redux/auth/operations";
import Loader from "./components/Loader/Loader";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />}/>
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/contacts" component={<LoginPage />}/>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute 
            redirectTo="/contacts"
            component={<RegisterPage />}/>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
