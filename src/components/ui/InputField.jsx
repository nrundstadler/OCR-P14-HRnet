const InputField = ({ id, label = null, type = "text", error, ...props }) => {
  const inputClasses =
    "focus:ring-primary/30 dark:focus:ring-primary/70 w-full rounded-lg border bg-white px-3 py-2 focus:ring-3 focus:outline-none dark:bg-zinc-700" +
    (error ? " border-red-800" : "");

  return (
    <div>
      {label && (
        <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
          {label}
        </label>
      )}
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
