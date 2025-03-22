import "./styles.scss";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ onClick, children, ...props }: ButtonProps) => (
  <button className="button" onClick={onClick} {...props}>
    {children}
  </button>
);

export default Button;
