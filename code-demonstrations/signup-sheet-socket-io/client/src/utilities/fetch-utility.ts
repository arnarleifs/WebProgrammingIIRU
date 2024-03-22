const URL = "http://localhost:4567";

export const fetchWithCredentials = (path: string, options: RequestInit = {}) =>
  fetch(`${URL}/${path}`, {
    credentials: "include",
    ...options,
  });
