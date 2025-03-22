import { ClientToServerEvents } from "./client-to-server-events";
import { ServerToClientEvents } from "./server-to-client-events";
import { DefaultEventsMap, Socket } from "socket.io";
import { SocketData } from "./socket-data";

export interface CustomSocket
  extends Socket<
    ClientToServerEvents,
    ServerToClientEvents,
    DefaultEventsMap,
    SocketData
  > {}
