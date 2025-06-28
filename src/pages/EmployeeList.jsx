import { EmployeeTable } from "@/features/employees";

const EmployeeList = () => {
  return (
    <div className="py-4">
      <div className="my-9 text-center">
        <h1 className="text-4xl">Employee List</h1>
        <p className="mt-2 text-lg">
          Browse the list below to view all registered employees and their
          details.
        </p>
      </div>
      <section>
        <EmployeeTable />
      </section>
    </div>
  );
};

export default EmployeeList;
