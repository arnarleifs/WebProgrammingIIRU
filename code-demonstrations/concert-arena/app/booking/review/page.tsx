"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { useRouter } from "next/navigation";
import { StepIndicator } from "@/app/booking/_components/step-indicator";
import { concerts } from "@/data/concerts";
import { submitBooking } from "@/actions/booking";
import type { BookingValues } from "@/types/booking";

const ticketTypeLabels: Record<string, string> = {
  general: "General Admission",
  vip: "VIP",
  backstage: "Backstage Pass",
};

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between px-5 py-3">
      <span className="text-sm text-slate-500">{label}</span>
      <span className="text-sm font-medium text-slate-900">{value}</span>
    </div>
  );
}

export default function ReviewPage() {
  const {
    getValues,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useFormContext<BookingValues>();
  const router = useRouter();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const values = getValues();
  const concert = concerts.find((c) => c.id === values.concertId);
  const total = concert
    ? ((concert.pricePerTicket * values.quantity) / 100).toFixed(2)
    : "0.00";

  const onSubmit = async (data: BookingValues) => {
    setSubmitError(null);
    const result = await submitBooking(data);
    if (result.success) {
      reset();
      router.push(`/booking/confirmation?ref=${result.bookingRef}`);
    } else {
      setSubmitError(result.error);
    }
  };

  return (
    <div>
      <StepIndicator currentStep={4} />
      <h2 className="text-xl font-semibold text-slate-800 mb-6">
        Review Your Booking
      </h2>

      <div className="rounded-xl border border-slate-200 bg-white divide-y divide-slate-100 mb-6">
        <ReviewRow label="Concert" value={concert?.name ?? "—"} />
        <ReviewRow
          label="Date"
          value={
            concert
              ? new Date(concert.date).toLocaleDateString("en-GB", {
                  dateStyle: "long",
                })
              : "—"
          }
        />
        <ReviewRow label="Venue" value={concert?.venue ?? "—"} />
        <ReviewRow
          label="Ticket Type"
          value={ticketTypeLabels[values.ticketType] ?? values.ticketType}
        />
        <ReviewRow label="Quantity" value={String(values.quantity)} />
        {values.promoCode && (
          <ReviewRow label="Promo Code" value={values.promoCode} />
        )}
        <ReviewRow label="Full Name" value={values.fullName} />
        <ReviewRow label="Email" value={values.email} />
        <ReviewRow label="Phone" value={values.phone} />
        <div className="flex justify-between px-5 py-4 bg-slate-50 rounded-b-xl">
          <span className="font-semibold text-slate-800">Total</span>
          <span className="font-bold text-indigo-600 text-lg">£{total}</span>
        </div>
      </div>

      {submitError && (
        <div className="mb-4 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {submitError}
        </div>
      )}

      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => router.back()}
          className="text-sm text-slate-500 hover:text-slate-800"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleSubmit(onSubmit)}
          disabled={isSubmitting}
          className="rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Processing..." : "Confirm Booking"}
        </button>
      </div>
    </div>
  );
}
