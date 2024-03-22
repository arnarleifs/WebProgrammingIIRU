import { Attendee } from "./attendee";
import { User } from "./user";

export interface Event {
  _id: string;
  title: string;
  start: string;
  end: string;
  host: User;
  maximum: number;
  attendees: Attendee[];
}
