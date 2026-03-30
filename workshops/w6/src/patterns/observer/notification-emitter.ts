export type Notification = {
  id: string;
  message: string;
  type: "success" | "error" | "info";
};

export type Listener = (notifications: Notification[]) => void;

interface NotificationStrategy {
  deliver(notification: Notification): void;
}

class NotificationEmitter {
  private notifications: Notification[] = [];
  private listeners: Listener[] = [];
  private strategy?: NotificationStrategy;

  constructor(strategy?: NotificationStrategy) {
    this.strategy = strategy;
  }

  subscribe(listener: Listener): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  notify(message: string, type: Notification["type"]): void {
    const notification: Notification = {
      id: crypto.randomUUID(),
      message,
      type,
    };
    this.notifications.push(notification);
    this.strategy?.deliver(notification);
    this.emit();
    setTimeout(() => this.dismiss(notification.id), 3000);
  }

  dismiss(id: string): void {
    this.notifications = this.notifications.filter((n) => n.id !== id);
    this.emit();
  }

  private emit(): void {
    this.listeners.forEach((l) => l([...this.notifications]));
  }
}

export const notificationEmitter = new NotificationEmitter();
export { NotificationEmitter };
