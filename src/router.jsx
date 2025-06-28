import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import App from "./App";

// Remplacer les imports directs par du lazy loading
const Homepage = lazy(() => import("./pages/Homepage"));
const CreateEmployee = lazy(() => import("./pages/CreateEmployee"));
const EmployeeList = lazy(() => import("./pages/EmployeeList"));
const Settings = lazy(() => import("./pages/Settings"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <Homepage />
          </Suspense>
        ),
      },
      {
        path: "/create-employee",
        element: (
          <Suspense>
            <CreateEmployee />
          </Suspense>
        ),
      },
      {
        path: "/employee-list",
        element: (
          <Suspense>
            <EmployeeList />
          </Suspense>
        ),
      },
      {
        path: "/settings",
        element: (
          <Suspense>
            <Settings />
          </Suspense>
        ),
      },
    ],
  },
]);
