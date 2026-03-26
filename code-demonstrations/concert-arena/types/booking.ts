import { z } from "zod";
import { eventSchema } from "@/app/booking/event/page";
import { ticketsSchema } from "@/app/booking/tickets/page";
import { personalSchema } from "@/app/booking/personal/page";

export const bookingSchema = eventSchema
  .merge(ticketsSchema)
  .merge(personalSchema);

export type BookingValues = z.infer<typeof bookingSchema>;

export const defaultValues: BookingValues = {
  concertId: "",
  ticketType: "general",
  quantity: 1,
  promoCode: "",
  fullName: "",
  email: "",
  phone: "",
};
