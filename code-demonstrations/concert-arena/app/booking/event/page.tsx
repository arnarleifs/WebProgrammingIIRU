"use client";

import { z } from "zod";
import { useFormContext } from "react-hook-form";
import { useRouter } from "next/navigation";
import { concerts } from "@/data/concerts";
import { StepIndicator } from "@/app/booking/_components/step-indicator";
import type { BookingValues } from "@/types/booking";

export const eventSchema = z.object({
  concertId: z.string().min(1, "Please select a concert"),
});

export default function EventPage() {
  const {
    register,
    trigger,
    watch,
    formState: { errors },
  } = useFormContext<BookingValues>();
  const router = useRouter();
  const selectedId = watch("concertId");

  const handleNext = async () => {
    const valid = await trigger("concertId");
    if (valid) router.push("/booking/tickets");
  };

  return (
    <div>
      <StepIndicator currentStep={1} />
      <h2 className="text-xl font-semibold text-slate-800 mb-6">
        Choose a Concert
      </h2>
      <div className="grid gap-3">
        {concerts.map((concert) => (
          <label
            key={concert.id}
            className={`block cursor-pointer rounded-lg border-2 p-4 transition-colors ${
              selectedId === concert.id
                ? "border-indigo-500 bg-indigo-50"
                : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <input
              type="radio"
              value={concert.id}
              className="sr-only"
              {...register("concertId")}
            />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-900">{concert.name}</p>
                <p className="text-sm text-slate-500">{concert.venue}</p>
                <p className="text-sm text-slate-500">
                  {new Date(concert.date).toLocaleDateString("en-GB", {
                    dateStyle: "long",
                  })}
                </p>
              </div>
              <p className="text-lg font-bold text-indigo-600">
                £{(concert.pricePerTicket / 100).toFixed(2)}
              </p>
            </div>
          </label>
        ))}
      </div>
      {errors.concertId && (
        <p className="mt-3 text-sm text-red-600">{errors.concertId.message}</p>
      )}
      <div className="mt-8 flex justify-end">
        <button
          type="button"
          onClick={handleNext}
          className="rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500"
        >
          Next: Ticket Details
        </button>
      </div>
    </div>
  );
}
