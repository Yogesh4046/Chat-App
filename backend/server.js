import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import { connectToMongoDB } from "./db/connect.js";
import {app, server} from "./socket/socket.js";

const __dirname = path.resolve();
dotenv.config();
const PORT = process.env.PORT || 3000;

//Routes and middlewares
app.use(express.json()); //to parse incoming request in JSON format
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

app.use(express.static(path.join(__dirname,"/frontend/dist")));

app.get("/{*any}",(req,res) => {
  res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
});

// app.get("/",(req,res) => {
//   console.log("Working");
//   return res.send("Hello World");
// });

server.listen(PORT,() => {
  connectToMongoDB();
  console.log(`Server running successfully on ${PORT}`);
})