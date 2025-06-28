import { flexRender } from "@tanstack/react-table";
import { ChevronsUpDown, ChevronUp, ChevronDown } from "lucide-react";

const TableContent = ({ table }) => (
  <div className="overflow-x-auto rounded-lg border" tabIndex={-1}>
    <table className="w-full divide-y divide-zinc-700/50">
      <thead className="bg-primary text-white">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className="p-3 text-left font-medium tracking-wider whitespace-nowrap uppercase"
              >
                <button
                  type="button"
                  className="focus-visible:ring-primary-light inline-flex cursor-pointer items-center p-1 text-left focus:outline-none focus-visible:ring-2"
                  onClick={header.column.getToggleSortingHandler()}
                  aria-pressed={!!header.column.getIsSorted()}
                  tabIndex={0}
                  aria-sort={
                    header.column.getIsSorted() === "asc"
                      ? "ascending"
                      : header.column.getIsSorted() === "desc"
                        ? "descending"
                        : "none"
                  }
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                  {header.column.getIsSorted() === "asc" && (
                    <ChevronUp className="ml-1 size-4" aria-hidden="true" />
                  )}
                  {header.column.getIsSorted() === "desc" && (
                    <ChevronDown className="ml-1 size-4" aria-hidden="true" />
                  )}
                  {!header.column.getIsSorted() && (
                    <ChevronsUpDown
                      className="ml-1 size-4 text-white/50"
                      aria-hidden="true"
                    />
                  )}
                </button>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="divide-y divide-zinc-700/50">
        {table.getRowModel().rows.length === 0 ? (
          <tr>
            <td
              colSpan={table.getVisibleLeafColumns().length}
              className="p-4 text-center"
            >
              No results.
            </td>
          </tr>
        ) : (
          table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="even:bg-gray-100 dark:bg-zinc-700 dark:text-white dark:even:bg-zinc-600"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-4 whitespace-nowrap">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
);

export default TableContent;
