const Input = ({
  inputType,
  label,
  value,
  onChange,
  required,
  autoComplete,
  className,
  ...props
}) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input
        autoComplete={autoComplete || "off"}
        type={inputType}
        value={value}
        onChange={onChange}
        required={required}
        {...props}
        className="border-2 border-slate-300 mb-3 focus:border-cyan-400 focus:outline-none w-full p-4 my-2 rounded-lg bg-slate-900 text-white ${className}"
      />
    </div>
  );
};

export default Input;
