import { useMemo, useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  useReactTable,
  getFilteredRowModel,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { ColumnsIcon, ChevronDown, Check, Eye } from "lucide-react";
import { selectAllEmployees } from "../features/employees/slices/employeesSlice";
import {
  getDepartmentLabel,
  getStateLabel,
} from "../features/employees/utils/employeeLabelGetters";

const ColumnSelector = ({
  columns,
  columnVisibility,
  setColumnVisibility,
  lockedColumns,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function toggleColumn(key) {
    setColumnVisibility((v) => {
      // In TanStack Table, if a column key is undefined or is true, the column is visible.
      const isVisible = v[key] !== false;
      return {
        ...v,
        [key]: !isVisible,
      };
    });
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        ref={buttonRef}
        type="button"
        className="focus-visible:ring-primary/30 inline-flex cursor-pointer items-center justify-center gap-x-4 rounded-lg bg-white px-4 py-2 text-sm font-bold shadow-sm ring-1 ring-gray-300 ring-inset hover:bg-zinc-50 focus:outline-none focus-visible:ring-3"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="column-selector-popup"
      >
        <ColumnsIcon className="size-4" />
        Columns
        <ChevronDown
          className={`size-4 transition-transform duration-75 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          id="column-selector-popup"
          className="absolute right-0 z-10 mt-2 w-auto min-w-[12rem] rounded-md border bg-white text-sm font-medium shadow-sm"
          role="dialog"
          aria-labelledby="column-selector-title"
        >
          <div className="py-1">
            <div
              id="column-selector-title"
              className="flex items-center px-4 py-2"
            >
              <Eye className="mr-2 size-4" />
              Toggle columns
            </div>
            <div className="border-t border-zinc-200"></div>
            {columns
              .filter((column) => !lockedColumns.includes(column.accessorKey))
              .map((column) => (
                <button
                  key={column.accessorKey}
                  type="button"
                  role="checkbox"
                  aria-checked={columnVisibility[column.accessorKey] !== false}
                  onClick={() => toggleColumn(column.accessorKey)}
                  className="focus-visible:ring-primary/30 flex w-full cursor-pointer items-center gap-x-2 px-4 py-2 ring-inset hover:bg-zinc-50 focus-visible:ring-3 focus-visible:outline-none"
                >
                  <span
                    className={`flex size-4 items-center justify-center rounded border-zinc-200 ${
                      columnVisibility[column.accessorKey] !== false
                        ? "bg-primary"
                        : "border bg-white"
                    }`}
                    aria-hidden="true"
                  >
                    {columnVisibility[column.accessorKey] !== false && (
                      <Check className="size-3 text-white" strokeWidth={2.5} />
                    )}
                  </span>
                  <span>{column.header}</span>
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

const EmployeeList = () => {
  const employees = useSelector(selectAllEmployees);
  // columnVisibility: object { accessorKey: true/false }
  const [columnVisibility, setColumnVisibility] = useState({});
  const [globalFilter, setGlobalFilter] = useState("");

  const columns = useMemo(
    () => [
      { accessorKey: "firstName", header: "First Name" },
      { accessorKey: "lastName", header: "Last Name" },
      { accessorKey: "startDate", header: "Start Date" },
      {
        accessorKey: "department",
        header: "Department",
        cell: (info) => getDepartmentLabel(info.getValue()),
      },
      { accessorKey: "dateOfBirth", header: "Date of Birth" },
      { accessorKey: "street", header: "Street" },
      { accessorKey: "city", header: "City" },
      {
        accessorKey: "state",
        header: "State",
        cell: (info) => getStateLabel(info.getValue()),
      },
      { accessorKey: "zipCode", header: "Zip Code" },
    ],
    [],
  );

  const lockedColumns = ["firstName", "lastName"];

  const table = useReactTable({
    data: employees,
    columns,
    state: { columnVisibility, globalFilter },
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="py-4">
      <div className="my-9 text-center">
        <h1 className="text-4xl">Employee List</h1>
        <p className="mt-2 text-lg">
          Browse the list below to view all registered employees and their
          details.
        </p>
      </div>
      <div className="mb-6 flex items-center justify-between">
        <input
          type="text"
          placeholder="Search employees..."
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="focus-visible:ring-primary/30 rounded-lg bg-white px-4 py-2 text-sm font-bold shadow-sm ring-1 ring-gray-300 ring-inset focus:outline-none focus-visible:ring-3"
        />
        <ColumnSelector
          columns={columns}
          columnVisibility={columnVisibility}
          setColumnVisibility={setColumnVisibility}
          lockedColumns={lockedColumns}
        />
      </div>
      <div className="overflow-x-auto rounded-lg border border-zinc-700/50">
        <table className="w-full divide-y divide-zinc-700/50">
          <thead className="bg-primary text-white">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="p-4 text-left text-sm font-medium tracking-wider whitespace-nowrap uppercase"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-zinc-700/50 bg-white">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="even:bg-gray-100">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-4 text-sm whitespace-nowrap">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
