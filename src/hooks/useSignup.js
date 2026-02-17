import { useCallback, useState } from "react";
import { signup as signupRequest } from "../lib/signup";
import { toast } from "sonner";

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const signup = useCallback(async (name, email, password) => {
    setError(null);
    setIsLoading(true);

    try {
      const data = await signupRequest(name, email, password);
      toast.success("Signup successful! Please sign in.");
      return data;
    } catch (err) {
      const message = err?.message || "Signup failed. Please try again.";
      setError(message);
      toast.error(message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { signup, isLoading, error };
};
