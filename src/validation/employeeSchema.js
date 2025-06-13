import * as yup from "yup";

export const employeeSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  dateOfBirth: yup.date().nullable().required("Date of birth is required"),
  startDate: yup.date().nullable().required("Start date is required"),
  department: yup.object().nullable().required("Department is required"),
  street: yup.string().required("Street is required"),
  city: yup.string().required("City is required"),
  state: yup.object().nullable().required("State is required"),
  zipCode: yup.string().required("Zip code is required"),
});
