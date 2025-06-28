import { faker } from "@faker-js/faker/locale/en_US";
import { nanoid } from "@reduxjs/toolkit";
import { departments } from "../../../data/departments";
import { states } from "../../../data/states";

/**
 * Generates a specified number of fake employees with realistic data
 * @param {number} count - Number of employees to generate
 * @returns {Array} - Array of fake employees
 */
export const generateFakeEmployees = (count = 10) => {
  const employees = [];

  // Get values for departments and states
  const departmentValues = departments.map((dept) => dept.value);
  const stateValues = states.map((state) => state.abbreviation);

  for (let i = 0; i < count; i++) {
    // Generate realistic dates
    const birthDate = faker.date.birthdate({ min: 18, max: 67, mode: "age" });

    const startDate = faker.date.between({
      from: new Date(new Date().setFullYear(new Date().getFullYear() - 5)),
      to: new Date(),
    });

    const employee = {
      id: nanoid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      dateOfBirth: birthDate.toISOString().split("T")[0],
      startDate: startDate.toISOString().split("T")[0],
      department: faker.helpers.arrayElement(departmentValues),
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.helpers.arrayElement(stateValues),
      zipCode: faker.location.zipCode("#####"),
    };

    employees.push(employee);
  }

  return employees;
};
