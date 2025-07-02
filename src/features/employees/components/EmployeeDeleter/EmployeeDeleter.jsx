import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeAllEmployees,
  selectAllEmployees,
} from "../../slices/employeesSlice";
import { selectDarkMode } from "@/features/core/slices/uiSlice";
import { Button } from "@/components/ui/";
import { Modal } from "nr-modal-react";

const EmployeeDeleter = () => {
  const [isErasing, setIsErasing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const dispatch = useDispatch();
  const isDarkMode = useSelector(selectDarkMode);

  // Get current employee count
  const employeeCount = useSelector(selectAllEmployees).length;

  const handleErase = (e) => {
    e.preventDefault();
    setIsErasing(true);

    // Add a small delay to show loading state
    setTimeout(() => {
      try {
        dispatch(removeAllEmployees());

        setShowSuccess(true);
      } catch (error) {
        console.error("Error deleting employees:", error);
      } finally {
        setIsErasing(false);
      }
    }, 400);
  };

  return (
    <div className="mt-13">
      <div className="space-y-8 rounded-xl border p-8">
        <h2 className="text-center text-lg">Delete All Employees</h2>
        <p className="text-center">
          This action will delete {employeeCount} employee
          {employeeCount > 1 ? "s" : ""}. This cannot be undone.
        </p>
        <form onSubmit={handleErase} className="space-y-8">
          <Button
            type="submit"
            className="m-auto block bg-red-700 hover:bg-red-900 disabled:cursor-not-allowed disabled:bg-red-700/50"
            disabled={isErasing || employeeCount === 0}
          >
            {isErasing ? "Deleting..." : "Delete All Employees"}
          </Button>
        </form>
      </div>

      <Modal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Success"
        darkMode={isDarkMode}
      >
        <div className="text-center">
          <p className="m-4 font-medium">
            All employees have been successfully deleted.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default EmployeeDeleter;
