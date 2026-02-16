import Button from "./shared/Button";
import TextInput from "./shared/TextInput";

const SignUpForm = () => {
  return (
    <form className="flex flex-col gap-7 mt-9">
      <TextInput placeholder="Username" name="name" />
      <TextInput placeholder="E-Mail" name="email" />
      <TextInput placeholder="Password" name="password" type="password" />
      <Button text="Sign Up" type="submit"/>
    </form>
  );
};

export default SignUpForm;
