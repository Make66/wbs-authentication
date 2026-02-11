const TextInput = ({ placeholder }) => {
  return (
    <div>
      <input
        type="text"
        className="border border-gray-300 rounded-md p-5 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
