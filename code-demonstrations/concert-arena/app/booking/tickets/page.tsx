"use client";

import { z } from "zod";
import { useFormContext, Controller, useWatch } from "react-hook-form";
import { useRouter } from "next/navigation";
import { concerts } from "@/data/concerts";
import { StepIndicator } from "@/app/booking/_components/step-indicator";
import type { BookingValues } from "@/types/booking";

export const ticketsSchema = z.object({
  ticketType: z.enum(["general", "vip", "backstage"]),
  quantity: z.number().int().min(1, "Minimum 1 ticket").max(10, "Maximum 10 tickets"),
  promoCode: z
    .string()
    .regex(/^[a-zA-Z0-9]*$/, "Only letters and numbers allowed")
    .optional(),
});

const ticketTypes = [
  { value: "general", label: "General Admission", description: "Standing area" },
  { value: "vip", label: "VIP", description: "Reserved seating with lounge access" },
  { value: "backstage", label: "Backstage Pass", description: "Meet & greet included" },
] as const;

export default function TicketsPage() {
  const {
    register,
    trigger,
    control,
    formState: { errors },
  } = useFormContext<BookingValues>();
  const router = useRouter();

  const ticketType = useWatch({ control, name: "ticketType" });
  const [concertId, quantity] = useWatch({ control, name: ["concertId", "quantity"] });

  const concert = concerts.find((c) => c.id === concertId);
  const total = concert ? (concert.pricePerTicket * (Number(quantity) || 0)) / 100 : 0;

  const showPromoCode = ticketType === "vip" || ticketType === "backstage";

  const handleNext = async () => {
    const valid = await trigger(["ticketType", "quantity", "promoCode"]);
    if (valid) router.push("/booking/personal");
  };

  return (
    <div>
      <StepIndicator currentStep={2} />
      <h2 className="text-xl font-semibold text-slate-800 mb-6">Ticket Details</h2>

      <fieldset className="mb-6">
        <legend className="text-sm font-medium text-slate-700 mb-3">Ticket Type</legend>
        <Controller
          control={control}
          name="ticketType"
          render={({ field }) => (
            <div className="grid gap-3">
              {ticketTypes.map((type) => (
                <label
                  key={type.value}
                  className={`flex items-start gap-3 rounded-lg border-2 p-4 cursor-pointer transition-colors ${
                    field.value === type.value
                      ? "border-indigo-500 bg-indigo-50"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <input
                    type="radio"
                    value={type.value}
                    checked={field.value === type.value}
                    onChange={() => field.onChange(type.value)}
                    className="mt-0.5"
                  />
                  <div>
                    <p className="font-medium text-slate-900">{type.label}</p>
                    <p className="text-sm text-slate-500">{type.description}</p>
                  </div>
                </label>
              ))}
            </div>
          )}
        />
        {errors.ticketType && (
          <p className="mt-2 text-sm text-red-600">{errors.ticketType.message}</p>
        )}
      </fieldset>

      <div className="mb-6">
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Number of Tickets
        </label>
        <input
          type="number"
          min={1}
          max={10}
          className="w-24 rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          {...register("quantity", { valueAsNumber: true })}
        />
        {errors.quantity && (
          <p className="mt-2 text-sm text-red-600">{errors.quantity.message}</p>
        )}
      </div>

      {showPromoCode && (
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Promo Code{" "}
            <span className="text-slate-400 font-normal">(optional)</span>
          </label>
          <input
            type="text"
            placeholder="e.g. SUMMER25"
            className="w-48 rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            {...register("promoCode")}
          />
          {errors.promoCode && (
            <p className="mt-2 text-sm text-red-600">{errors.promoCode.message}</p>
          )}
        </div>
      )}

      {concert && (
        <div className="mb-6 rounded-lg bg-slate-100 px-4 py-3 flex items-center justify-between">
          <span className="text-sm text-slate-600">Total</span>
          <span className="font-bold text-indigo-600 text-lg">
            £{total.toFixed(2)}
          </span>
        </div>
      )}

      <div className="mt-8 flex justify-between">
        <button
          type="button"
          onClick={() => router.back()}
          className="text-sm text-slate-500 hover:text-slate-800"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500"
        >
          Next: Your Details
        </button>
      </div>
    </div>
  );
}
