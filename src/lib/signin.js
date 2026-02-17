export const signin = async (email, password) => {
  const response = await fetch("http://localhost:3001/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const message = data?.message || "Failed to sign in";
    throw new Error(message);
  }

  return data;
};
