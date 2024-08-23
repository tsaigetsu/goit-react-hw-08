import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContactsThunk } from "./redux/contactsOps";
// import { useEffect, useState } from "react";

const App = () => {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(fetchContactsThunk())
  },[dispatch])

  return (
    <>
      <h1>Phone book</h1>
      <ContactForm />
      <SearchBox
      />
      <ContactList
      />
    </>
  );
};

export default App;
