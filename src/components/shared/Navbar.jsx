import { Link } from "react-router";
import Button from "./Button";

const Navbar = () => {
  return (
    <header>
      <nav className="bg-gray-700 text-white px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold cursor-pointer">PUBLIC</Link>
        <Link to="/signin">
          <Button text="Sign In" />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
