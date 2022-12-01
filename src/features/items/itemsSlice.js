import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import axios from "axios";

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

//fetch items from fakeStoreAPI
export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const response = await axios.get("https://fakestoreapi.com/products?limit=8");

  return response.data;
});

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchItems.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.items = state.items.concat(action.payload);
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllItems = (state) => state.items;
export const {} = itemsSlice.actions;

export default itemsSlice.reducer;
