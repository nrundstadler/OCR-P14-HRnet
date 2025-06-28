import { useRef, useState, useEffect } from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import format from "date-fns/format";
import { Calendar } from "lucide-react";
import "react-day-picker/dist/style.css";

const DatePickerField = ({ id, label, value, onChange, error, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const calendarRef = useRef(null);

  const baseInputClasses =
    "w-full rounded-lg border px-3 py-2 transition-colors outline-none" +
    (error ? " border-red-800" : "");
  const focusInputClasses = "ring-3 ring-primary/30 dark:ring-primary/70";
  const inputClasses = `${baseInputClasses} ${isOpen ? focusInputClasses : "focus:" + focusInputClasses}`;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        inputRef.current?.focus();
      }
    };

    const handleClickOutside = (e) => {
      const isInsideCalendar = calendarRef.current?.contains(e.target);
      const isInsideInput = inputRef.current?.contains(e.target);

      if (!isInsideCalendar && !isInsideInput) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleDaySelect = (date) => {
    onChange(date);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const openCalendar = () => {
    if (!isOpen) setIsOpen(true);
  };

  const defaultClassNames = getDefaultClassNames();

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>

      <div className="relative w-full">
        <input
          ref={inputRef}
          id={id}
          type="text"
          className={inputClasses}
          value={value ? format(value, "yyyy-MM-dd") : ""}
          onClick={openCalendar}
          onFocus={openCalendar}
          aria-label={
            value
              ? "Selected date: " + format(value, "dd MMMM yyyy")
              : "No date selected"
          }
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          readOnly
          {...props}
        />
        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
          <Calendar className="h-5 w-5" />
        </span>

        {isOpen && (
          <div
            ref={calendarRef}
            className="absolute left-0 z-10 mt-1 rounded-lg border bg-white shadow-lg"
            role="dialog"
            aria-modal="true"
            aria-label="Calendar"
          >
            <DayPicker
              animate
              mode="single"
              navLayout="around"
              selected={value}
              onSelect={handleDaySelect}
              startMonth={new Date(new Date().getFullYear() - 100, 0, 1)}
              endMonth={
                new Date(new Date().setMonth(new Date().getMonth() + 12))
              }
              captionLayout="dropdown"
              defaultMonth={value || new Date()}
              modifiersClassNames={{
                selected: "bg-primary hover:!bg-primary text-white rounded",
                today: "text-primary font-bold",
              }}
              className="rounded-lg"
              classNames={{
                root: `${defaultClassNames.root} shadow-lg p-2 dark:bg-zinc-700 rounded-lg`,
                chevron: `${defaultClassNames.chevron} !fill-primary hover:!fill-primary-dark dark:!fill-primary-light dark:hover:!fill-primary`,
                dropdown: `${defaultClassNames.dropdown} bg-white dark:bg-zinc-700 dark:color-zinc-300`,
                day: "hover:bg-primary/30 rounded-lg",
                focused: "!outline-none !ring-0 !shadow-none",
              }}
            />
          </div>
        )}
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-800">
          {error}
        </p>
      )}
    </div>
  );
};

export default DatePickerField;
