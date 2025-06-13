const InputField = ({ id, label, type = "text", error, ...props }) => {
  const inputClasses =
    "w-full rounded-lg border px-3 py-2 focus:ring-3 focus:ring-primary/30 dark:focus:ring-primary/70 focus:outline-none" +
    (error ? " border-red-800" : "");

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        className={inputClasses}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
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

export default InputField;
