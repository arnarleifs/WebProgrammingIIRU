import { createTheme } from "@vanilla-extract/css";

export const [themeClass, themeVars] = createTheme({
  colors: {
    primary: "blue",
  },
});
