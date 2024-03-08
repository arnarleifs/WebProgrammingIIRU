import { createContext } from "react";
import { User } from "../types/user";

interface UserContextType {
  user?: User;
  updateUser: (user: User) => void;
}

export const UserContext = createContext<UserContextType>({
  user: undefined,
  updateUser: () => {},
});
