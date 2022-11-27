import { createSlice } from "@reduxjs/toolkit";
import { contactsData } from "components/contactsData";

const initialState = contactsData;

const contactsItemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        addContact(state, action) {
            state.push(action.payload);
        },
        deleteTask(state, action) {
            const index = state.findIndex(contact => contact.id === action.payload);
            state.splice(index, 1);
        },
    },
});

export const { addContact, deleteTask } = contactsItemsSlice.actions;

export default contactsItemsSlice.reducer;