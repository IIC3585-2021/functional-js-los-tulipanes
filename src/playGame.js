const _ = require('lodash');
const { pipe } = require('./pipe');
const { nextPlayerGen } = require('./nextPlayer');
const { askForMove } = require('./askForMove');
const { enterMove } = require('./enterMove');

const playGame = (players) => {
  const nextPlayer = nextPlayerGen(players.length);

  scores = pipe(() => players.map((p) => [p, enterMove(501)]), _.fromPairs)(); // {nombre: puntaje}

  let lastScore = -1;

  while (lastScore !== 0) {
    currentPlayer = nextPlayer.next().value;

    let player = players[currentPlayer];
    let play = scores[player];
    let move = askForMove(player);

    lastScore = play(move);
  }

  console.log(`Ganó ${players[currentPlayer]}!`);
};

module.exports = { playGame };
