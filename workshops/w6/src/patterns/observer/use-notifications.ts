"use client";

import { useState, useEffect } from "react";
import {
  notificationEmitter,
  type Notification,
} from "@/src/patterns/observer/notification-emitter";

export function useNotifications(): Notification[] {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    return notificationEmitter.subscribe(setNotifications);
  }, []);

  return notifications;
}
