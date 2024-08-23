import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addContactsThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from "../contactsOps";

const initialState = {
  contacts: [], loading: false, error: null ,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })
      .addCase(addContactsThunk.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload
        );
      })
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.pending,
          deleteContactThunk.pending,
          addContactsThunk.pending
        ),
        (state) => {
          state.loading = true;
          state.error = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.rejected,
          deleteContactThunk.rejected,
          addContactsThunk.rejected
        ),
        (state) => {
          state.loading = false;
          state.error = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.fulfilled,
          deleteContactThunk.fulfilled,
          addContactsThunk.fulfilled
        ),
        (state) => {
          state.loading = false;
        }
      );
  },
});

export const contactsReduser = slice.reducer;
