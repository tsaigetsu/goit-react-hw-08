import { configureStore } from "@reduxjs/toolkit";
import { contactsReduser } from "./contacts/contactsSlice";
import { filterReduser } from "./filter/filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filter: filterReduser,
  },
});

