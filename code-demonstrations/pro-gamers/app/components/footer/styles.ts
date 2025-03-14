import { backgroundColor, textColor } from "@/styles/css-vars";
import type { CSSProperties } from "react";

export const footerStyleCompose = (theme: string): CSSProperties => {
  return {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'space-between',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    alignItems: 'center',
    height: '100px',
    backgroundColor: backgroundColor[theme],
    color: textColor[theme],
  }
}