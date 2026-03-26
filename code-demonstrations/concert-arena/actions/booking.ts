"use server";

import type { BookingValues } from "@/types/booking";

export async function submitBooking(
  data: BookingValues
): Promise<{ success: true; bookingRef: string } | { success: false; error: string }> {
  try {
    await new Promise<void>((resolve) => setTimeout(resolve, 2000));
    const bookingRef = crypto.randomUUID();
    return { success: true, bookingRef };
  } catch {
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
