import { io } from "socket.io-client";
const URL = "http://localhost:4567";

export const socket = io(URL);
