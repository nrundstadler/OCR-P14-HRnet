import EmployeeGenerator from "@/features/employees/components/EmployeeGenerator/EmployeeGenerator";
import EmployeeDeleter from "@/features/employees/components/EmployeeDeleter/EmployeeDeleter";

const Settings = () => {
  return (
    <div className="py-4">
      <div className="my-9 text-center">
        <h1 className="text-4xl">Settings</h1>
        <p className="mt-2 text-lg">Configure the application (dev mode)</p>
      </div>
      <section className="m-auto max-w-xl">
        <EmployeeGenerator />
        <EmployeeDeleter />
      </section>
    </div>
  );
};

export default Settings;
