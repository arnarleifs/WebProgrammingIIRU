import { Session } from "../types/session";

abstract class SessionStore {
  abstract isUsernameOccupied(username: string): boolean;
  abstract findSession(id: string): Session | undefined;
  abstract findSessionByUserID(userID: string): Session | undefined;
  abstract saveSession(id: string, session: Session): void;
  abstract removeSession(id: string): void;
  abstract findAllSessions(): Session[];
}

class InMemorySessionStore extends SessionStore {
  private sessions: Map<string, Session>;

  constructor() {
    super();
    this.sessions = new Map<string, Session>();
  }

  isUsernameOccupied(username: string): boolean {
    return !!Array.from(this.sessions.values()).find(
      (s) => s.username === username
    );
  }

  findSession(id: string): Session | undefined {
    return this.sessions.get(id);
  }

  findSessionByUserID(userID: string): Session | undefined {
    return this.findAllSessions().find((s) => s.userID === userID);
  }

  saveSession(id: string, session: Session): void {
    this.sessions.set(id, session);
  }

  removeSession(id: string): void {
    this.sessions.delete(id);
  }

  findAllSessions(): Session[] {
    return Array.from(this.sessions.values());
  }
}

export { SessionStore, InMemorySessionStore };
