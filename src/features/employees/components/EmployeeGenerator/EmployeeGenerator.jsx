import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmployees } from "../../slices/employeesSlice";
import { generateFakeEmployees } from "./utils/generateFakeEmployees";
import { selectDarkMode } from "@/features/core/slices/uiSlice";
import { Button, InputField, Modal } from "@/components/ui/";

const EmployeeGenerator = () => {
  const [count, setCount] = useState(10);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const dispatch = useDispatch();
  const isDarkMode = useSelector(selectDarkMode);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsGenerating(true);

    // Add a small delay to show loading state
    setTimeout(() => {
      try {
        // Generate fake employees
        const employees = generateFakeEmployees(count);

        // Add to store
        dispatch(addEmployees(employees));

        setShowSuccess(true);
      } catch (error) {
        console.error("Error generating employees:", error);
      } finally {
        setIsGenerating(false);
      }
    }, 400);
  };

  return (
    <div className="mt-13">
      <div className="space-y-8 rounded-xl border p-8">
        <h2 className="text-center text-lg">Generate Employees</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <InputField
            id="employee-count"
            label="Number of employees to generate"
            type="number"
            min="1"
            max="1000"
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value, 10) || 1)}
          />

          <Button
            type="submit"
            className="m-auto block"
            disabled={isGenerating}
          >
            {isGenerating ? "Generating..." : "Generate Employees"}
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
          <p className="m-4 font-medium">Successfully generated employees.</p>
        </div>
      </Modal>
    </div>
  );
};

export default EmployeeGenerator;
