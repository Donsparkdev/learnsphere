function Input({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required = false,
}) {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={name} className="font-medium">
          {label}
        </label>
      )}

      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
}

export default Input;
