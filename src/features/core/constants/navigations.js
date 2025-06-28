import { Users, UserPlus, Settings } from "lucide-react";

export const NAV_LINKS = [
  {
    name: "Create Employee",
    to: "/create-employee",
    icon: UserPlus,
    title: "Create a new employee record",
  },
  {
    name: "Employee List",
    to: "/employee-list",
    icon: Users,
    title: "View the list of employees",
  },
  {
    name: "Settings",
    to: "/settings",
    icon: Settings,
    title: "Application settings",
  },
];

// Utility function to retrieve the title from the path
export function getTitleByPath(path) {
  const found = NAV_LINKS.find((link) => link.to === path);
  return found ? found.title : "Home";
}
