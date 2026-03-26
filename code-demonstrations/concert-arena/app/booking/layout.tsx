"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema, defaultValues, type BookingValues } from "@/types/booking";

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const methods = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues,
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-2xl px-4 py-10">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">Concert Arena</h1>
          <p className="mt-1 text-slate-500">Book your tickets</p>
        </header>
        <FormProvider {...methods}>{children}</FormProvider>
      </div>
    </div>
  );
}
