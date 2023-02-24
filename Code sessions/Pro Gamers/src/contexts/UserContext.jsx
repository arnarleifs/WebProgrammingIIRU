import { createContext } from "react";

export const UserContext = createContext({
  username: '',
  fullName: '',
  updateUser: (fullName, username) => {}
});