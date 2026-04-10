import { type Notification } from "@/src/patterns/observer/notification-emitter";

export const typeColors: Record<Notification["type"], string> = {
  success: "bg-green-500 text-white",
  error: "bg-red-500 text-white",
  info: "bg-blue-500 text-white",
};
