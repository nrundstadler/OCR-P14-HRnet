import { useState } from "react";
import { states } from "../data/states";
import { departments } from "../data/departments";
import formatForSelect from "../utils/formatForSelect";
import Button from "../components/ui/Button";
import InputField from "../components/ui/InputField";
import SelectField from "../components/ui/SelectField";
import DatePickerField from "../components/ui/DatePickerField";

const CreateEmployee = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [startDate, setStartDate] = useState(null);

  const stateOptions = formatForSelect(states, "abbreviation", "name");

  return (
    <>
      <div className="py-4">
        <div className="my-9 text-center">
          <h1 className="text-4xl">Create an Employee</h1>
          <p className="mt-2 text-lg">
            Fill in the form below to create a new employee record.
          </p>
        </div>

        <form className="mt-13">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-center text-lg">Personal Information</h2>
              <InputField id="firstName" label="First Name" />
              <InputField id="lastName" label="Last Name" />
              <DatePickerField
                id="dateOfBirth"
                label="Date of Birth"
                value={dateOfBirth}
                onChange={setDateOfBirth}
              />
              <DatePickerField
                id="startDate"
                label="Start Date"
                value={startDate}
                onChange={setStartDate}
              />
              <SelectField
                id="department"
                label="Department"
                options={departments}
                value={selectedDepartment}
                onChange={setSelectedDepartment}
                placeholder=""
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-center text-lg">Address</h2>
              <InputField id="street" label="Street" />
              <InputField id="city" label="City" />
              <SelectField
                id="state"
                label="State"
                options={stateOptions}
                value={selectedState}
                onChange={setSelectedState}
                placeholder=""
              />
              <InputField id="zipCode" label="Zip Code" />
            </div>
          </div>
          <Button className="m-auto mt-8 block w-1/6 min-w-fit">Envoyer</Button>
        </form>
      </div>
    </>
  );
};

export default CreateEmployee;
