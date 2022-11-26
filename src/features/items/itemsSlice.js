import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const itemsSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export const {} = itemsSlice.actions;

export default itemsSlice.reducer;
