import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Homepage, CreateEmployee, EmployeeList, Settings } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/create-employee",
        element: <CreateEmployee />,
      },
      {
        path: "/employee-list",
        element: <EmployeeList />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);
