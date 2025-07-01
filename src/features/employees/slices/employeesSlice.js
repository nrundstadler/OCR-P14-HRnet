import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

// createEntityAdapter helps manage a list of employees in Redux state
const employeesAdapter = createEntityAdapter();
const initialState = employeesAdapter.getInitialState();

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: employeesAdapter.addOne,
    addEmployees: employeesAdapter.addMany,
    removeAllEmployees: employeesAdapter.removeAll,
  },
});

export const { addEmployee, addEmployees, removeAllEmployees } =
  employeesSlice.actions;
export const employeesSelectors = employeesAdapter.getSelectors(
  (state) => state.employees,
);
export const selectAllEmployees = (state) =>
  employeesSelectors.selectAll(state);
