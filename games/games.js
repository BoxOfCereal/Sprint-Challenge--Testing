const express = require("express");
const router = express.Router();
const Games = require("./gamesModel");

router.get("/", (req, res) => {
  const gameList = Games.get();
  res.status(200).json(gameList);
});

router.post("/", (req, res) => {
  const newGame = req.body;
  if (!newGame.title || !newGame.genre) {
    res
      .status(422)
      .json({ messsage: "please supply the correct information for the game" });
  } else {
    const game = Games.addGame(newGame);
    res.status(201).json(game);
  }
});

module.exports = router;
