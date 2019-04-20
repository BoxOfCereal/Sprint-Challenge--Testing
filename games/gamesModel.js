let gamesList = [];

function addGame(game) {
  console.log(gamesList);
  const myGame = gamesList.filter(g => g.name === game.name);
  console.log(myGame);
  gamesList.push(game);

  return gamesList.find(g => g.name === game.name);
}
function clear() {
  gamesList = [];
}
function get() {
  return gamesList;
}

module.exports = { clear, addGame, get };
