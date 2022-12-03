import { createSlice, combineReducers } from "@reduxjs/toolkit";




const contactsItemsSlice = createSlice({
    name: "items",
    initialState: [],
    
    reducers: {
        handleAddContact: (state, action) => [...state, action.payload],
        handleRemoveContact: (state, action) => state.filter(contact => contact.id !== action.payload),
    },
});


export const { handleAddContact, handleRemoveContact } = contactsItemsSlice.actions;

export const contactsReducer = combineReducers({
    [contactsItemsSlice.name]: contactsItemsSlice.reducer
});