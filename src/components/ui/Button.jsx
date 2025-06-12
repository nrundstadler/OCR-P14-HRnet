const Button = ({ className = "", children, ...props }) => {
  return (
    <button
      type="button"
      className={`bg-primary hover:bg-primary-dark focus-visible:ring-primary cursor-pointer rounded-lg px-4 py-2 font-medium text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-700 ${className} `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
