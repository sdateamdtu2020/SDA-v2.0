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
    itemToolboxClick: "",
    itemNavbarClick: "",
    factTableSelect: "",
    dimYearSelect: "",
    dimCitySelect: "",
    itemSuggest: "",
    fileNameImport: "",
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setListSidebarIsOpen: (state, action) => {
      state.listSidebar.isOpen[action.payload] =
        !state.listSidebar.isOpen[action.payload];
    },
    setItemToolboxClick: (state, action) => {
      state.itemToolboxClick = action.payload;
    },
    setItemNavbarClick: (state, action) => {
      state.itemNavbarClick = action.payload;
    },
    setFactTableSelect: (state, action) => {
      state.factTableSelect = action.payload;
    },
    setDimYearSelect: (state, action) => {
      state.dimYearSelect = action.payload;
    },
    setDimCitySelect: (state, action) => {
      state.dimCitySelect = action.payload;
    },
    setItemSuggest: (state, action) => {
      state.itemSuggest = action.payload;
    },
    setFileNameImport: (state, action) => {
      state.fileNameImport = action.payload;
    },
  },
});

const { reducer, actions } = uiSlide;
export const {
  setLoading,
  setListSidebarIsOpen,
  setItemToolboxClick,
  setItemNavbarClick,
  setFactTableSelect,
  setDimYearSelect,
  setDimCitySelect,
  setItemSuggest,
  setFileNameImport,
} = actions;

export default reducer;
