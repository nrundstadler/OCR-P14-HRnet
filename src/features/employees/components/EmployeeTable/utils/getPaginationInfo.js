/**
 * Returns pagination info for a TanStack Table instance.
 * @param {object} table - The TanStack Table instance
 * @returns {object} { start, end, total }
 */
const getPaginationInfo = (table) => {
  const pageIndex = table.getState().pagination.pageIndex;
  const pageSize = table.getState().pagination.pageSize;
  const total = table.getFilteredRowModel().rows.length;
  const start = total === 0 ? 0 : pageIndex * pageSize + 1;
  // Last row number on this page:
  // It's (pageIndex + 1) * pageSize, or total if this is the last (incomplete) page.
  const end = Math.min(total, (pageIndex + 1) * pageSize);
  return { start, end, total };
};

export default getPaginationInfo;
