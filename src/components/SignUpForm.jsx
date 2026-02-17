import { useState } from "react";
import Button from "./shared/Button";
import TextInput from "./shared/TextInput";
import { useSignup } from "../hooks/useSignup";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { signup, isLoading, error } = useSignup();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(formData.name, formData.email, formData.password);
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <form className="flex flex-col gap-7 mt-9" onSubmit={handleSubmit}>
      <TextInput
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
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

      <Button text={isLoading ? "Signing up..." : "Sign Up"} type="submit" />
    </form>
  );
};

export default SignUpForm;
