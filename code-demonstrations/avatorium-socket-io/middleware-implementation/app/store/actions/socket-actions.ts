import { createAction } from "@reduxjs/toolkit";

interface ConnectPayload {
  sessionID?: string;
  avatar: string;
}

interface EmitPayload {
  evt: string;
  body: any;
}

export const connectSocket = createAction<ConnectPayload>("socket/connect");
export const emitToSocket = createAction<EmitPayload>("socket/emit");
