import { createSlice } from "@reduxjs/toolkit";

const productReducer = createSlice({
  name: "test",
  initialState: {
    menu: false,
    isChecked: false
  },
  reducers: {
    setMenu(state, action) {
      state.menu = action.payload;
    },
    setIsChecked(state, action) {
      state.isChecked = action.payload;
    },
  },
});

export const { setMenu, setIsChecked } = productReducer.actions;
export default productReducer.reducer;
