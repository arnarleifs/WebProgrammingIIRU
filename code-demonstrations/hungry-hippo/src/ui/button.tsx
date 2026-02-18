import Icon, { type IconName } from "./icon";

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => Promise<void> | void;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  icon?: IconName;
  disabled?: boolean;
};

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  icon,
  disabled,
}: ButtonProps) {
  const baseStyles =
    "rounded-lg font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    outline: "border border-gray-200 text-gray-700 hover:bg-gray-50",
  };

  const sizes = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
    >
      {icon && <Icon name={icon} size={size} />}
      {children}
    </button>
  );
}
