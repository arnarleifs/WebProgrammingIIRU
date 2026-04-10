import { type Notification } from "@/src/patterns/observer/notification-emitter";
import { typeColors } from "../constants/type-colors";

export function BannerOverlay({
  notifications,
}: {
  notifications: Notification[];
}) {
  if (notifications.length === 0) return null;
  return (
    <div className="fixed top-0 left-0 right-0 flex flex-col z-50">
      {notifications.map((n) => (
        <div
          key={n.id}
          className={`w-full px-4 py-2 text-center text-sm font-medium ${typeColors[n.type]}`}
        >
          {n.message}
        </div>
      ))}
    </div>
  );
}
