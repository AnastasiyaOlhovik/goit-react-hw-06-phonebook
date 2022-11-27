import { createSlice } from "@reduxjs/toolkit";
import { initialContacts } from "../components/contactsData";


const initialState = initialContacts;


const contactsFilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterContact: (state, action) => action.payload,
  },
});



export const { filterContact } = contactsFilterSlice.actions;



export default contactsFilterSlice.reducer;