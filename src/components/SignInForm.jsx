import { useState } from "react";
import Button from "./shared/Button";
import TextInput from "./shared/TextInput";
import { useSignin } from "../hooks/useSignin";
import { useNavigate, useLocation } from "react-router";

const SignInForm = () => {
  const location = useLocation();

  const [formData, setFormData] = useState({
    email: location.state?.email || "",
    password: location.state?.password || "",
  });

  const { signin, isLoading, error } = useSignin();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signin(formData.email, formData.password);
    if (!error) {
      navigate("/admin");
    }
  };

  return (
    <form className="flex flex-col gap-7 mt-9" onSubmit={handleSubmit}>
      <TextInput
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <TextInput
        placeholder="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />

      {error ? <p className="text-sm text-red-500">{error}</p> : null}

      <Button text={isLoading ? "Signing in..." : "Sign In"} type="submit" />
    </form>
  );
};

export default SignInForm;
