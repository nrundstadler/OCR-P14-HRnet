import { departments } from "../data/departments";
import { states } from "../data/states";

const departmentMap = Object.fromEntries(
  departments.map((d) => [d.value, d.label]),
);

const stateMap = Object.fromEntries(
  states.map((s) => [s.abbreviation, s.name]),
);

export function getDepartmentLabel(value) {
  return departmentMap[value] || value || "";
}

export function getStateLabel(abbreviation) {
  return stateMap[abbreviation] || abbreviation || "";
}
