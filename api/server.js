const express = require("express");
const server = express();
server.use(express.json());
const gamesRoutes = require("../games/games");
server.use("/api/games", gamesRoutes);

server.get("/", async (req, res) => {
  res.status(200).json({ message: " the server is up" });
});

module.exports = server;
