const Button = ({ text }) => {
  return (
    <button className="bg-blue-500 text-white px-4 py-4 rounded hover:bg-blue-400 cursor-pointer">
      {text}
    </button>
  );
};

export default Button;
