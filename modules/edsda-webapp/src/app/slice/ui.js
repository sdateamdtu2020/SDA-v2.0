import { createSlice } from "@reduxjs/toolkit";
import { UI } from "../ItemTypes";
const uiSlide = createSlice({
  name: UI,
  initialState: {
    loading: false,
    listSidebar: {
      isOpen: {
        operators: true,
        visualization: true,
      },
    },
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setListSidebarIsOpen: (state, action) => {
      state.listSidebar.isOpen[action.payload] = !state.listSidebar.isOpen[
        action.payload
      ];
    },
  },
});

const { reducer, actions } = uiSlide;
export const { setLoading, setListSidebarIsOpen } = actions;

export default reducer;
