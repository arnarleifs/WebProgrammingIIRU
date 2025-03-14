import { ThemeVariation } from '@/types/theme-variation';
import { createContext } from 'react';

interface ThemeContextStructure {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextStructure>({
  theme: ThemeVariation.Light,
  toggleTheme: () => { }
})