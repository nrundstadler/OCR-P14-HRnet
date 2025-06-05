import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

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
  (state) => state.employee,
);

export const selectAllEmployees = (state) =>
  employeesSelectors.selectAll(state.employees);

export default employeesSlice;
