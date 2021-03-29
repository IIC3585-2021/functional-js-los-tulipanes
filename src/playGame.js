const _ = require('lodash');
const { pipe } = require('./pipe');
const { isGameOver } = require('./isGameOver');
const { nextPlayerGen } = require('./nextPlayer');

const playGame = (players) => {
  currentPlayer = 0;

  const nextPlayer = nextPlayerGen(players.length());

  score = pipe(
    players.map((p) => [p, 501]),
    _.fromPairs
  );

  while (!isGameOver(score, currentPlayer)) {
    /* Game logic */
    currentPlayer = nextPlayer.next().value;
  }
};

module.exports = { playGame };
