import useEmployeeTable from "./hooks/useEmployeeTable";
import TableToolbar from "./TableToolbar";
import TableContent from "./TableContent";
import TablePagination from "./TablePagination";

const EmployeeTable = () => {
  const {
    table,
    columns,
    columnVisibility,
    setColumnVisibility,
    globalFilter,
    setGlobalFilter,
    lockedColumns,
  } = useEmployeeTable();

  return (
    <>
      <TableToolbar
        columns={columns}
        columnVisibility={columnVisibility}
        setColumnVisibility={setColumnVisibility}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        lockedColumns={lockedColumns}
      />
      <TableContent table={table} />
      <TablePagination table={table} />
    </>
  );
};

export default EmployeeTable;
