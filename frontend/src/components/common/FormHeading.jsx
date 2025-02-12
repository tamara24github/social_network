const FormHeading = ({ children, className, ...props }) => {
  return (
    <h1 className="text-center text-white text-[1.7rem] mb-8 mx-auto ${className}">
      {children}
    </h1>
  );
};

export default FormHeading;
