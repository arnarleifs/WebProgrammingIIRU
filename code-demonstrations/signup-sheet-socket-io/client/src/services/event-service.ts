import { Event } from "../types";
import { fetchWithCredentials } from "../utilities/fetch-utility";

export const createNewEvent = async (
  event: Omit<Event, "_id" | "attendees">
) => {
  const res = await fetchWithCredentials("events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  });

  if (res.ok) {
    return await res.json();
  }
};
