const FormContainer = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={`shadow-2xl shadow-black bg-gradient-to-b from-blue-800/50 to-blue-700/30 p-10 rounded-lg w-full max-w-[500px] mx-auto border-4 relative animate-fluid-border ${className}`}
    >
      {children}
    </div>
  );
};

export default FormContainer;
