let gamesList = [];

function addGame(game) {
  gamesList.push(game);
}
function clear() {
  gamesList = [];
}
function get() {
  return gamesList;
}

module.exports = { clear, addGame, get };
