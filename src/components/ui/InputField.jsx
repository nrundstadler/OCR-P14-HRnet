const InputField = ({ id, label, type = "text", className = "", ...props }) => {
  const inputClasses =
    "w-full rounded-lg border px-3 py-2 focus:ring-3 focus:ring-primary/30 dark:focus:ring-primary/70 focus:outline-none";

  return (
    <div className={`${className}`}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        className={inputClasses}
        {...props}
      />
    </div>
  );
};

export default InputField;
