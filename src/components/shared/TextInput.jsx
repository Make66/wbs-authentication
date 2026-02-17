const TextInput = ({ placeholder, name, type = "text", onChange, value }) => {
  return (
    <div>
      <input
        type={type}
        value={value}
        name={name}
        className="border border-gray-300 rounded-md p-5 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
