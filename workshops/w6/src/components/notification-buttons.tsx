import { type Notification } from "@/src/patterns/observer/notification-emitter";

export function NotificationButtons({
  onNotify,
}: {
  onNotify: (type: Notification["type"]) => void;
}) {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => onNotify("success")}
        className="px-3 py-1.5 text-sm rounded bg-green-500 text-white hover:bg-green-600"
      >
        Success
      </button>
      <button
        onClick={() => onNotify("error")}
        className="px-3 py-1.5 text-sm rounded bg-red-500 text-white hover:bg-red-600"
      >
        Error
      </button>
      <button
        onClick={() => onNotify("info")}
        className="px-3 py-1.5 text-sm rounded bg-blue-500 text-white hover:bg-blue-600"
      >
        Info
      </button>
    </div>
  );
}
