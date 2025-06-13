import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { employeeSchema } from "../validation/employeeSchema";
import { formatEmployeeData } from "../utils/employeeFormatters";
import { addEmployee } from "../employeesSlice";

export const useEmployeeForm = () => {
  const dispatch = useDispatch(); // Ajoute ceci

  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(employeeSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: null,
      startDate: null,
      department: null,
      street: "",
      city: "",
      state: null,
      zipCode: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    const formattedData = formatEmployeeData(data);

    const employeeWithId = { id: nanoid(), ...formattedData };
    dispatch(addEmployee(employeeWithId));

    reset();

    return formattedData;
  });

  return {
    control,
    register,
    errors,
    onSubmit,
  };
};
