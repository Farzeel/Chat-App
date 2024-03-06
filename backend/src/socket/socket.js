import { Server } from "socket.io";
import { createServer } from "node:http";
import express from "express";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});
export const getReceiverSocketId = (receiverId) => {
  return userSocketmap[receiverId];
};

const userSocketmap = {};

io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;

  if (userId != undefined) userSocketmap[userId] = socket.id;

  io.emit("getOnlineUsers", Object.keys(userSocketmap));

  socket.on("disconnect", () => {
    delete userSocketmap[userId];
    io.emit("getOnlineUser", Object.keys(userSocketmap));
  });
});
export { app, io, server };
