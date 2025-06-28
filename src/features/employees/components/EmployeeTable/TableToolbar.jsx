import { InputField } from "@/components/ui";
import TableColumnSelector from "./TableColumnSelector";

const TableToolbar = ({
  columns,
  columnVisibility,
  setColumnVisibility,
  globalFilter,
  setGlobalFilter,
  lockedColumns,
}) => {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
      <InputField
        id="search-employees"
        type="search"
        placeholder="Search employees..."
        value={globalFilter}
        onChange={(e) => setGlobalFilter(e.target.value)}
      />
      <TableColumnSelector
        columns={columns}
        columnVisibility={columnVisibility}
        setColumnVisibility={setColumnVisibility}
        lockedColumns={lockedColumns}
      />
    </div>
  );
};

export default TableToolbar;
