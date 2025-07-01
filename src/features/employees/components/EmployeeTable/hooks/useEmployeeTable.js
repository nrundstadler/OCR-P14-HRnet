import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";

import {
  getDepartmentLabel,
  getStateLabel,
} from "../utils/employeeLabelGetters";
import { selectAllEmployees } from "../../../slices/employeesSlice";

const useEmployeeTable = () => {
  // Get all employees from Redux state
  const employees = useSelector(selectAllEmployees);

  // State for table features
  const [columnVisibility, setColumnVisibility] = useState({});
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  // Define table columns
  const columns = useMemo(
    () => [
      { accessorKey: "firstName", header: "First Name" },
      { accessorKey: "lastName", header: "Last Name" },
      { accessorKey: "startDate", header: "Start Date" },
      {
        accessorKey: "department",
        header: "Department",
        // Show department label instead of raw value
        cell: (info) => getDepartmentLabel(info.getValue()),
      },
      { accessorKey: "dateOfBirth", header: "Date of Birth" },
      { accessorKey: "street", header: "Street" },
      { accessorKey: "city", header: "City" },
      {
        accessorKey: "state",
        header: "State",
        // Show state label instead of raw value
        cell: (info) => getStateLabel(info.getValue()),
      },
      { accessorKey: "zipCode", header: "Zip Code" },
    ],
    [],
  );

  // Columns that can't be hidden
  const lockedColumns = ["firstName", "lastName"];

  // Create the table instance with all features
  const table = useReactTable({
    data: employees,
    columns,
    state: { columnVisibility, globalFilter, sorting, pagination },
    onColumnVisibilityChange: setColumnVisibility,
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return {
    table,
    columns,
    columnVisibility,
    setColumnVisibility,
    globalFilter,
    setGlobalFilter,
    lockedColumns,
  };
};

export default useEmployeeTable;
