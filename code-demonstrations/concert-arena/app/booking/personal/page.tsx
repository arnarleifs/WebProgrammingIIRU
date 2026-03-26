"use client";

import { z } from "zod";
import { useFormContext } from "react-hook-form";
import { useRouter } from "next/navigation";
import { StepIndicator } from "@/app/booking/_components/step-indicator";
import type { BookingValues } from "@/types/booking";

export const personalSchema = z.object({
  fullName: z.string().min(2, "At least 2 characters required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().regex(/^\d{7}$/, "Must be exactly 7 digits"),
});

export default function PersonalPage() {
  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext<BookingValues>();
  const router = useRouter();

  const handleNext = async () => {
    const valid = await trigger(["fullName", "email", "phone"]);
    if (valid) router.push("/booking/review");
  };

  return (
    <div>
      <StepIndicator currentStep={3} />
      <h2 className="text-xl font-semibold text-slate-800 mb-6">Your Details</h2>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Jane Smith"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="mt-1.5 text-sm text-red-600">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            placeholder="jane@example.com"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1.5 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="7700900"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-1.5 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>
      </div>

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
          Review Booking
        </button>
      </div>
    </div>
  );
}
