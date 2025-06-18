export { default as EmployeeForm } from "./components/EmployeeForm";

export { useEmployeeForm } from "./hooks/useEmployeeForm";

export { formatEmployeeData } from "./utils/employeeFormatters";

export { employeeSchema } from "./validation/employeeSchema";

export { states } from "./data/states";
export { departments } from "./data/departments";

// State management
export {
  employeesSlice,
  addEmployee,
  addEmployees,
  removeAllEmployees,
  selectAllEmployees,
} from "./slices/employeesSlice";
