const Button = ({
  children,
  onClick,
  type = "button",
  className,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      {...props}
      className={`flex items-center mb-3 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-md hover:shadow-2xl hover:shadow-blue-500 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 neon-text ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
