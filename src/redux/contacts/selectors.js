import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.filter.filter;

export const selectFilteredContacts = createSelector([selectContacts, selectFilter
], (contacts,filter) => {
    return contacts.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      );
})