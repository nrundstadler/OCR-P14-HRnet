import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { employeeSchema } from "../validation/employeeSchema";
import { serializeEmployeeForm } from "../utils/serializeEmployeeForm";
import { addEmployee } from "../../../slices/employeesSlice";

export const useEmployeeForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const dispatch = useDispatch();

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
    const formattedData = serializeEmployeeForm(data);

    const employeeWithId = { id: nanoid(), ...formattedData };
    dispatch(addEmployee(employeeWithId));

    reset();
    setShowSuccess(true);

    return formattedData;
  });

  return {
    form: {
      control,
      register,
      errors,
      onSubmit,
    },
    notification: {
      showSuccess,
      hideSuccess: () => setShowSuccess(false),
    },
  };
};
