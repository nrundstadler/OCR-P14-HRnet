import { EmployeeForm } from "@/features/employees/";

const CreateEmployee = () => {
  return (
    <div className="py-4">
      <div className="my-9 text-center">
        <h1 className="text-4xl">Create an Employee</h1>
        <p className="mt-2 text-lg">
          Fill in the form below to create a new employee record.
        </p>
      </div>
      <section className="m-auto max-w-6xl">
        <EmployeeForm />
      </section>
    </div>
  );
};

export default CreateEmployee;
