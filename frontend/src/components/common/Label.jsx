const Label = ({ children, className }) => {
  return (
    <label className={`text-base mb-2 block text-white ${className}`}>
      {children}
    </label>
  );
};

export default Label;
