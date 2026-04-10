import { type Notification } from "@/src/patterns/observer/notification-emitter";
import { typeColors } from "../constants/type-colors";

export function ToastOverlay({
  notifications,
  onDismiss,
}: {
  notifications: Notification[];
  onDismiss?: (id: string) => void;
}) {
  if (notifications.length === 0) return null;
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-50">
      {notifications.map((n) => (
        <div
          key={n.id}
          className={`flex items-center justify-between gap-3 px-4 py-2 rounded shadow-md text-sm ${typeColors[n.type]}`}
        >
          <span>{n.message}</span>
          {onDismiss && (
            <button
              onClick={() => onDismiss(n.id)}
              className="font-bold opacity-80 hover:opacity-100"
            >
              ×
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
