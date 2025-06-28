import { useState, useRef, useEffect } from "react";
import { ColumnsIcon, Check, Eye } from "lucide-react";

const TableColumnSelector = ({
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
        className="focus:ring-primary/30 dark:focus:ring-primary/70 inline-flex w-full cursor-pointer items-center justify-between gap-x-4 rounded-lg border bg-white px-3 py-2 focus:ring-3 focus:outline-none dark:bg-zinc-700"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="column-selector-popup"
      >
        <ColumnsIcon className="size-4" />
        Columns
        <svg
          height="20"
          width="20"
          viewBox="0 0 20 20"
          aria-hidden="true"
          focusable="false"
          className="fill-gray-400"
        >
          <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
        </svg>
      </button>

      {isOpen && (
        <div
          id="column-selector-popup"
          className="absolute right-0 z-10 mt-1 w-auto min-w-[12rem] rounded-md border bg-white font-medium shadow-sm dark:bg-zinc-700"
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
                  className="focus-visible:ring-primary/30 hover:bg-primary/30 flex w-full cursor-pointer items-center gap-x-2 px-4 py-2 ring-inset focus-visible:ring-3 focus-visible:outline-none"
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

export default TableColumnSelector;
