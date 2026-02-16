const Button = ({ text, className, type = "button" }) => {
  return (
    <button
      type={type}
      className={`bg-blue-500 text-white px-4 py-4 rounded hover:bg-blue-400 cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
