import { createSlice } from "@reduxjs/toolkit";
import { API } from "../ItemTypes";
const apiSlide = createSlice({
  name: API,
  initialState: {
    dimensions: [],
  },
  reducers: {
    setDimensions: (state, action) => {
      state.dimensions = action.payload;
    },
  },
});

const { reducer, actions } = apiSlide;
export const { setDimensions } = actions;

export default reducer;
