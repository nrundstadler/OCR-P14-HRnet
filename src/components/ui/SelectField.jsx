import Select from "react-select";

const SelectField = ({
  id,
  label,
  options = [],
  error,
  value,
  onChange,
  ...props
}) => {
  /* Style react-select components with Tailwind CSS */
  const controlStyles = {
    base: "border rounded-lg !cursor-pointer",
    focus: "ring-3 ring-primary/30 dark:ring-primary/70",
    error: "border-red-800",
  };
  const valueContainerStyles = "px-3 py-2";
  const indicatorsContainerStyles = "px-2.5 text-gray-400";
  const menuStyles =
    "p-1 mt-1 border bg-white dark:bg-zinc-700 rounded-lg shadow-lg";
  const optionStyles = {
    base: "px-3 py-2 rounded !cursor-pointer",
    focus: "bg-primary/30",
    selected: "!bg-primary text-white",
  };
  const noOptionsMessageStyles = "p-1 text-gray-400 rounded-sm";

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <Select
        inputId={id}
        name={id}
        options={options}
        value={value}
        onChange={onChange}
        className="w-full"
        isSearchable={true}
        unstyled
        aria-invalid={!!error}
        ariaDescribedBy={error ? `${id}-error` : undefined}
        classNames={{
          control: ({ isFocused }) =>
            `${isFocused ? controlStyles.focus : ""} ${controlStyles.base} ${error ? controlStyles.error : ""}`,
          valueContainer: () => valueContainerStyles,
          indicatorsContainer: () => indicatorsContainerStyles,
          menu: () => menuStyles,
          option: ({ isFocused, isSelected }) =>
            `${isFocused ? optionStyles.focus : ""} ${
              isSelected ? optionStyles.selected : ""
            } ${optionStyles.base}`,
          noOptionsMessage: () => noOptionsMessageStyles,
        }}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-800">
          {error}
        </p>
      )}
    </div>
  );
};

export default SelectField;
