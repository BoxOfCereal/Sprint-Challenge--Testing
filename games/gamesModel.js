let gamesList = [];

function addGame(game) {
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
