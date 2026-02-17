export const signup = async (name, email, password) => {
  console.log("SIGNUP-VALUES: ", name, email, password);

  const response = await fetch("http://localhost:3001/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to sign up");
  }

  const data = await response.json();
  console.log("SIGNUP-function: ", data);

  return data;
};
