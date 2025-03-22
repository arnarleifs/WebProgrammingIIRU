import type { User } from '@/types/user';
import { createContext } from 'react';

interface UserContextStructure {
  user: User;
  setUser: (user: User) => void;
}

export const UserContext = createContext<UserContextStructure>({
  user: {
    profileImage: '',
    username: '',
    fullName: ''
  },
  setUser: () => { }
})