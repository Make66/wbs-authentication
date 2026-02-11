import { Link } from "react-router";
import SignInForm from "../components/SignInForm";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center h-[80vh]">
      <div className="bg-gray-700 p-6 rounded-2xl w-200">
        <h2 className="text-3xl font-bold text-center">Sign Up</h2>
        <SignInForm />
        <div className="w-full mt-4">
          <Link to="/signin" className="w-full text-blue-500 mt-4 text-center">
            Already have an account? Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
