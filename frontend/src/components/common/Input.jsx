const Input = ({ inputType, label, value, onChange, required, ...props }) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input
        type={inputType}
        value={value}
        onChange={onChange}
        required={required}
        {...props}
      />
    </div>
  );
};

export default Input;
