import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { format } from "date-fns";
import { employeeSchema } from "@/validation/employeeSchema";

export const useEmployeeForm = () => {
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

  const formatEmployeeData = (data) => ({
    ...data,
    dateOfBirth: data.dateOfBirth
      ? format(data.dateOfBirth, "yyyy-MM-dd")
      : null,
    startDate: data.startDate ? format(data.startDate, "yyyy-MM-dd") : null,
    department: data.department?.value || null,
    state: data.state?.value || null,
  });

  const onSubmit = handleSubmit((data) => {
    const formattedData = formatEmployeeData(data);

    console.log(formattedData);

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
