const Input = ({
  inputType,
  label,
  value,
  onChange,
  required,
  className,
  ...props
}) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input
        type={inputType}
        value={value}
        onChange={onChange}
        required={required}
        {...props}
        className="border-2 border-gray-400 mb-3 focus:border-cyan-400 focus:outline-none w-full p-4 my-2 rounded-md bg-gray-800 text-white ${className}"
      />
    </div>
  );
};

export default Input;
