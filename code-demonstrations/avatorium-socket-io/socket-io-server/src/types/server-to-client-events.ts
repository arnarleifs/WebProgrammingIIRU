import { Session } from "./session";
import { SessionData } from "./session-data";

export interface ServerToClientEvents {
  session: (data: SessionData) => void;
  users: (users: Session[]) => void;
  connected_user: (user: Session) => void;
  disconnected_user: (userId: string) => void;
  user_left: (userId: string) => void;
}
