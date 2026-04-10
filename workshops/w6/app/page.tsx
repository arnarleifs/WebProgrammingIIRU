"use client";

import { useState, useRef } from "react";
import {
  notificationEmitter,
  NotificationEmitter,
  type Notification,
} from "@/src/patterns/observer/notification-emitter";
import { useNotifications } from "@/src/patterns/observer/use-notifications";
import {
  ToastStrategy,
  BannerStrategy,
  ConsoleStrategy,
} from "@/src/patterns/strategy/notification-strategies";
import { NotificationManager } from "@/src/patterns/strategy/notification-manager";
import { StrategyName } from "@/src/types/strategy-name";
import { BannerOverlay } from "@/src/components/banner-overlay";
import { NotificationButtons } from "@/src/components/notification-buttons";
import { ToastOverlay } from "@/src/components/toast-overlay";
import { typeColors } from "@/src/constants/type-colors";

export default function Home() {
  const observerNotifications = useNotifications();

  const [toastNotifications, setToastNotifications] = useState<Notification[]>(
    [],
  );
  const [bannerNotifications, setBannerNotifications] = useState<
    Notification[]
  >([]);
  const [bonusNotifications, setBonusNotifications] = useState<Notification[]>(
    [],
  );
  const [activeStrategy, setActiveStrategy] = useState<StrategyName>("toast");

  const toastStrategy = useRef(new ToastStrategy(setToastNotifications));
  const bannerStrategy = useRef(new BannerStrategy(setBannerNotifications));
  const consoleStrategy = useRef(new ConsoleStrategy());
  // eslint-disable-next-line react-hooks/refs
  const manager = useRef(new NotificationManager(toastStrategy.current));
  const bonusEmitter = useRef(
    new NotificationEmitter(new ToastStrategy(setBonusNotifications)),
  );

  function handleStrategyChange(name: StrategyName) {
    setActiveStrategy(name);
    const map = {
      toast: toastStrategy.current,
      banner: bannerStrategy.current,
      console: consoleStrategy.current,
    };
    manager.current.setStrategy(map[name]);
  }

  const sampleMessages: Record<Notification["type"], string> = {
    success: "Operation completed successfully.",
    error: "Something went wrong.",
    info: "Here is some useful information.",
  };

  return (
    <>
      <BannerOverlay notifications={bannerNotifications} />
      <ToastOverlay notifications={toastNotifications} />
      <ToastOverlay notifications={bonusNotifications} />

      <main className="max-w-2xl mx-auto px-6 py-12 flex flex-col gap-12">
        <h1 className="text-2xl font-semibold">
          Workshop 6 — Notification Patterns
        </h1>

        {/* Part 1: Observer Pattern */}
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-medium">Part 1 — Observer Pattern</h2>
          <NotificationButtons
            onNotify={(type) =>
              notificationEmitter.notify(sampleMessages[type], type)
            }
          />
          <div className="flex flex-col gap-2">
            {observerNotifications.map((n) => (
              <div
                key={n.id}
                className={`flex items-center justify-between px-4 py-2 rounded text-sm ${typeColors[n.type]}`}
              >
                <span>{n.message}</span>
                <button
                  onClick={() => notificationEmitter.dismiss(n.id)}
                  className="font-bold opacity-80 hover:opacity-100 ml-4"
                >
                  Dismiss
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Part 2: Strategy Pattern */}
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-medium">Part 2 — Strategy Pattern</h2>
          <div className="flex gap-2">
            {(["toast", "banner", "console"] as StrategyName[]).map((name) => (
              <button
                key={name}
                onClick={() => handleStrategyChange(name)}
                className={`px-3 py-1.5 text-sm rounded border capitalize ${
                  activeStrategy === name
                    ? "bg-zinc-900 text-white border-zinc-900"
                    : "border-zinc-300 hover:bg-zinc-50"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
          <NotificationButtons
            onNotify={(type) =>
              manager.current.notify(sampleMessages[type], type)
            }
          />
          {activeStrategy === "console" && (
            <p className="text-sm text-zinc-500">
              Check the browser console for output.
            </p>
          )}
        </section>

        {/* Bonus: Observer + Strategy */}
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-medium">Bonus — Observer + Strategy</h2>
          <p className="text-sm text-zinc-500">
            The emitter delegates delivery to a ToastStrategy and also notifies
            its own subscribers.
          </p>
          <NotificationButtons
            onNotify={(type) =>
              bonusEmitter.current.notify(sampleMessages[type], type)
            }
          />
        </section>
      </main>
    </>
  );
}
