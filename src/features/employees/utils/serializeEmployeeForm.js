import { format } from "date-fns";

export const serializeEmployeeForm = (data) => ({
  ...data,
  dateOfBirth: data.dateOfBirth ? format(data.dateOfBirth, "yyyy-MM-dd") : null,
  startDate: data.startDate ? format(data.startDate, "yyyy-MM-dd") : null,
  department: data.department?.value || null,
  state: data.state?.value || null,
});
