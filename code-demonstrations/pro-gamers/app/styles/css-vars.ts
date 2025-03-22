import { ThemeVariation } from "@/types/theme-variation"

export const backgroundColor: Record<string, string> = {
  [ThemeVariation.Light]: 'lightgray',
  [ThemeVariation.Dark]: 'black'
}

export const textColor: Record<string, string> = {
  [ThemeVariation.Light]: 'black',
  [ThemeVariation.Dark]: 'white'
}