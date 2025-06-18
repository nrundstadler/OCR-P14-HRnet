import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkModeEnabled: false,
  isMenuMobileOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkModeEnabled = !state.isDarkModeEnabled;
    },
    setMenuMobileOpen: (state, action) => {
      state.isMenuMobileOpen = action.payload;
    },
  },
});

export const { toggleDarkMode, setMenuMobileOpen } = uiSlice.actions;
export const selectDarkMode = (state) => state.ui.isDarkModeEnabled;
export const selectMenuMobileOpen = (state) => state.ui.isMenuMobileOpen;
