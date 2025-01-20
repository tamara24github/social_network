const FormHeading = ({ children, className, ...props }) => {
  return (
    <h1 className="text-center text-cyan-400 text-[1.65rem] mb-8 mx-auto ${className}">
      {children}
    </h1>
  );
};

export default FormHeading;
