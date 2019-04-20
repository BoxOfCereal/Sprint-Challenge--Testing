const express = require("express");
const router = express.Router();
const Games = require("./gamesModel");

router.get("/", (req, res) => {
  const gameList = Games.get();
  res.status(200).json(gameList);
});

router.post("/", (req, res) => {
  const newGame = req.body;
  const game = Games.addGame(newGame);
  res.status(201).json(game);
});

module.exports = router;
