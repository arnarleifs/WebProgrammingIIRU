import type { Dispatch, SetStateAction } from "react";
import type { Notification } from "@/src/patterns/observer/notification-emitter";

export interface NotificationStrategy {
  deliver(notification: Notification): void;
}

export class ToastStrategy implements NotificationStrategy {
  constructor(private setState: Dispatch<SetStateAction<Notification[]>>) {}

  deliver(n: Notification): void {
    this.setState((prev) => [...prev, n]);
    setTimeout(() => {
      this.setState((prev) => prev.filter((x) => x.id !== n.id));
    }, 3000);
  }
}

export class BannerStrategy implements NotificationStrategy {
  constructor(private setState: Dispatch<SetStateAction<Notification[]>>) {}

  deliver(n: Notification): void {
    this.setState((prev) => [...prev, n]);
    setTimeout(() => {
      this.setState((prev) => prev.filter((x) => x.id !== n.id));
    }, 3000);
  }
}

export class ConsoleStrategy implements NotificationStrategy {
  deliver(n: Notification): void {
    if (n.type === "error") console.error(n.message);
    else if (n.type === "info") console.info(n.message);
    else console.log(n.message);
  }
}
