import Icon, { type IconName } from "./icon";

interface IconToggleProps {
  icon: IconName;
  isToggled: boolean;
  onToggle: () => Promise<void> | void;
  onColor?: string;
  offColor?: string;
}

export default function IconToggle({
  icon,
  isToggled,
  onToggle,
  onColor = "text-red-500",
  offColor = "text-gray-400",
}: IconToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${
        isToggled ? onColor : offColor
      }`}
    >
      <Icon name={icon} className={isToggled ? "fill-current" : "fill-none"} />
    </button>
  );
}
