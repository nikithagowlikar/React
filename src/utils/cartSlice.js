import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // actions are just like api's
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearItems: (state) => {
      state.items.length = 0;
    },
    deleteItem: (state) => {
      state.items.pop();
    },
  },
});
export const { addItem, clearItems, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
