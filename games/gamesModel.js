let gamesList = [];

function addGame(game) {
  gamesList.push(game);
  return gamesList.find(g => g.name === game.name);
}

function doesGameExist(game) {
  console.log(game);
  const myGame = gamesList.filter(g => g.name === game.name);
  if (myGame.length > 0) {
    return true;
  } else {
    false;
  }
}
function clear() {
  gamesList = [];
}
function get() {
  return gamesList;
}

module.exports = { clear, addGame, get, doesGameExist };
