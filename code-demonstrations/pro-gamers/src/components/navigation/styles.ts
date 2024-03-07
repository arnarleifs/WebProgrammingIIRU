import { CSSProperties } from "react";

export const navigationBar: CSSProperties = {
  display: "flex",
  backgroundColor: "lightgray",
  justifyContent: "center",
  alignItems: "center",
  height: 100,
};

export const navigationBarLinks: CSSProperties = {
  display: "flex",
  listStyle: "none",
  paddingLeft: 0,
  gap: 20,
};

export const navigationBarLink: CSSProperties = {
  transition: "all .5s ease-in",
};
