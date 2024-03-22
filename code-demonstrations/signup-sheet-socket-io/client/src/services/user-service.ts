import { fetchWithCredentials } from "../utilities/fetch-utility";

export const getUser = async () => {
  const resp = await fetchWithCredentials("user/info");
  if (!resp.ok) {
    return;
  }

  return await resp.json();
};

export const authenticateUser = async (username: string, password: string) => {
  const resp = await fetchWithCredentials("login/password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (resp.ok) {
    return await resp.json();
  }
};
