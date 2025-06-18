import { Controller } from "react-hook-form";
import { formatForSelect } from "@/utils";
import { states } from "../data/states";
import { departments } from "../data/departments";
import { useEmployeeForm } from "../hooks/useEmployeeForm";
import {
  // UI Components
  Button,
  InputField,
  SelectField,
  DatePickerField,
} from "@/components/ui/";

const EmployeeForm = () => {
  const stateOptions = formatForSelect(states, "abbreviation", "name");
  const { control, register, errors, onSubmit } = useEmployeeForm();

  return (
    <form className="mt-13" onSubmit={onSubmit}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-center text-lg">Personal Information</h2>
          <InputField
            id="firstName"
            label="First Name"
            error={errors.firstName?.message}
            {...register("firstName")}
          />
          <InputField
            id="lastName"
            label="Last Name"
            error={errors.lastName?.message}
            {...register("lastName")}
          />
          <Controller
            name="dateOfBirth"
            control={control}
            render={({ field }) => (
              <DatePickerField
                id="dateOfBirth"
                label="Date of Birth"
                value={field.value}
                onChange={field.onChange}
                error={errors.dateOfBirth?.message}
              />
            )}
          />
          <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
              <DatePickerField
                id="startDate"
                label="Start Date"
                value={field.value}
                onChange={field.onChange}
                error={errors.startDate?.message}
              />
            )}
          />
          <Controller
            name="department"
            control={control}
            render={({ field }) => (
              <SelectField
                id="department"
                label="Department"
                options={departments}
                value={field.value}
                onChange={field.onChange}
                error={errors.department?.message}
              />
            )}
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-center text-lg">Address</h2>
          <InputField
            id="street"
            label="Street"
            error={errors.street?.message}
            {...register("street")}
          />
          <InputField
            id="city"
            label="City"
            error={errors.city?.message}
            {...register("city")}
          />
          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <SelectField
                id="state"
                label="State"
                options={stateOptions}
                value={field.value}
                onChange={field.onChange}
                error={errors.state?.message}
              />
            )}
          />
          <InputField
            id="zipCode"
            label="Zip Code"
            error={errors.zipCode?.message}
            {...register("zipCode")}
          />
        </div>
      </div>
      <Button type="submit" className="m-auto mt-8 block w-1/6 min-w-fit">
        Envoyer
      </Button>
    </form>
  );
};

export default EmployeeForm;
