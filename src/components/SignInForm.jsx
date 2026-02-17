import { useState } from "react";
import Button from "./shared/Button";
import TextInput from "./shared/TextInput";
import { useSignin } from "../hooks/useSignin";

const SignInForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { signin, isLoading, error } = useSignin();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signin(formData.email, formData.password);
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
