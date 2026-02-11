import Button from "./shared/Button";
import TextInput from "./shared/TextInput";

const SignInForm = () => {
  return (
    <form className="flex flex-col gap-7 mt-9">
      <TextInput placeholder="Username" />
      <TextInput placeholder="Password" />
      <Button text="Sign In" />
    </form>
  );
};

export default SignInForm;
