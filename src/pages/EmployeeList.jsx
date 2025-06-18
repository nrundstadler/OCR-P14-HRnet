import { useSelector } from "react-redux";
import { selectAllEmployees } from "@/features/employees/";

const EmployeeList = () => {
  const employees = useSelector(selectAllEmployees);

  return (
    <ul>
      {employees
        .slice()
        .reverse()
        .map((emp) => (
          <li key={emp.id}>
            <strong>
              {emp.firstName} {emp.lastName}
            </strong>
            <br />
            <span>Id: {emp.id}</span>
            <br />
            <span>Date of Birth: {emp.dateOfBirth}</span>
            <br />
            <span>Start Date: {emp.startDate}</span>
            <br />
            <span>Department: {emp.department}</span>
            <br />
            <span>Street: {emp.street}</span>
            <br />
            <span>City: {emp.city}</span>
            <br />
            <span>State: {emp.state}</span>
            <br />
            <span>Zip Code: {emp.zipCode}</span>
          </li>
        ))}
    </ul>
  );
};

export default EmployeeList;
