import { SelectField } from "@/components/ui/";
import getPaginationInfo from "./utils/getPaginationInfo";

const TablePagination = ({ table }) => {
  const { start, end, total } = getPaginationInfo(table);

  const baseButtonClasses =
    "focus-visible:ring-primary/30 rounded bg-gray-100 px-4 py-2 font-bold focus-visible:ring-3 focus-visible:outline-none dark:bg-zinc-500 dark:text-white ";
  const enabledButtonClasses =
    "cursor-pointer hover:bg-gray-200 dark:hover:bg-zinc-600";
  const disabledButtonClasses = "opacity-50 cursor-not-allowed";

  return (
    <div className="flex flex-col items-end justify-end gap-4 px-2 py-4 sm:flex-row sm:items-center sm:gap-10">
      <div className="flex items-center gap-2">
        Rows per page :
        <label htmlFor="pagination-size" className="sr-only">
          Pagination size
        </label>
        <SelectField
          id="pagination-size"
          options={[
            { value: 5, label: "5" },
            { value: 10, label: "10" },
            { value: 20, label: "20" },
            { value: 50, label: "50" },
          ]}
          value={{
            value: table.getState().pagination.pageSize,
            label: table.getState().pagination.pageSize,
          }}
          onChange={(option) => table.setPageSize(Number(option.value))}
          isSearchable={false}
        />
      </div>
      <div className="flex items-center gap-4 sm:gap-10">
        {`${start} - ${end} of ${total}`}
        <div className="flex items-center gap-2">
          {table.getPageCount() > 1 && (
            <button
              type="button"
              className={`${baseButtonClasses} ${
                table.getCanPreviousPage()
                  ? enabledButtonClasses
                  : disabledButtonClasses
              }`}
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              aria-label="Go to previous page"
            >
              {"<"}
            </button>
          )}
          <span>
            Page {table.getState().pagination.pageIndex + 1} /{" "}
            {table.getPageCount()}
          </span>
          {table.getPageCount() > 1 && (
            <button
              type="button"
              className={`${baseButtonClasses} ${
                table.getCanNextPage()
                  ? enabledButtonClasses
                  : disabledButtonClasses
              }`}
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              aria-label="Go to next page"
            >
              {">"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TablePagination;
