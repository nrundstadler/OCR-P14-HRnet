import { Controller } from "react-hook-form";
import { useSelector } from "react-redux";
import { formatForSelect } from "@/utils";
import { states } from "../../data/states";
import { departments } from "../../data/departments";
import { useEmployeeForm } from "./hooks/useEmployeeForm";
import { selectDarkMode } from "@/features/core/slices/uiSlice";
import {
  Button,
  InputField,
  SelectField,
  DatePickerField,
} from "@/components/ui/";
import { Modal } from "nr-modal-react";

const EmployeeForm = () => {
  const stateOptions = formatForSelect(states, "abbreviation", "name");
  const { form, notification } = useEmployeeForm();
  const { control, register, errors, onSubmit } = form;
  const { showSuccess, hideSuccess } = notification;
  const isDarkMode = useSelector(selectDarkMode);

  return (
    <>
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
          Submit
        </Button>
      </form>
      <Modal
        isOpen={showSuccess}
        onClose={hideSuccess}
        title="Employee Added"
        darkMode={isDarkMode}
      >
        <div className="text-center">
          <p className="m-4 font-medium">
            Employee has been successfully added!
          </p>
        </div>
      </Modal>
    </>
  );
};

export default EmployeeForm;
