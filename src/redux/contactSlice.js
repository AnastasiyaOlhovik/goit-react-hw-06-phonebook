import { createSlice } from "@reduxjs/toolkit";
import { initialContacts } from "../components/contactsData";


const initialState = initialContacts;

const contactsItemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        handleAddContact: (state, action) => [...state, action.payload],
        handleRemoveContact: (state, action) => state.filter(contact => contact.id !== action.payload),
    },
});

export const { handleAddContact, handleRemoveContact } = contactsItemsSlice.actions;
export default contactsItemsSlice.reducer;