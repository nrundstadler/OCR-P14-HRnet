import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage/";
import CreateEmployee from "./pages/CreateEmployee/";
import EmployeeList from "./pages/EmployeeList/";
import Settings from "./pages/Settings/";

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
