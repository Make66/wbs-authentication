import { useCallback, useState } from "react";
import { signin as signinRequest } from "../lib/signin";
import { toast } from "sonner";

export const useSignin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const signin = useCallback(async (email, password) => {
    setError(null);
    setIsLoading(true);

    try {
      const data = await signinRequest(email, password);
      localStorage.setItem("token", data.token);
      toast.success("Signin successful!");
      return data;
    } catch (err) {
      const message = err?.message || "Signin failed. Please try again.";
      setError(message);
      toast.error(message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { signin, isLoading, error };
};
