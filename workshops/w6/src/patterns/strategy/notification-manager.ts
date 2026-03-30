import type { Notification } from "@/src/patterns/observer/notification-emitter";
import type { NotificationStrategy } from "@/src/patterns/strategy/notification-strategies";

export class NotificationManager {
  constructor(private strategy: NotificationStrategy) {}

  setStrategy(strategy: NotificationStrategy): void {
    this.strategy = strategy;
  }

  notify(message: string, type: Notification["type"]): void {
    this.strategy.deliver({
      id: crypto.randomUUID(),
      message,
      type,
    });
  }
}
