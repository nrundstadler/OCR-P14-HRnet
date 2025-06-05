import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enabled: false,
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.enabled = !state.enabled;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export const selectDarkMode = (state) => state.darkMode.enabled;

export default darkModeSlice;
