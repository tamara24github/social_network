const FormContainer = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={`animate-fadeIn bg-[#222226] p-12 rounded-lg shadow-[0_15px_50px_rgba(0,0,0,0.6)] w-full max-w-[500px] mx-auto border-4 border-transparent bg-clip-padding relative animate-fluid-border ${className}`}
    >
      {children}
    </div>
  );
};

export default FormContainer;
