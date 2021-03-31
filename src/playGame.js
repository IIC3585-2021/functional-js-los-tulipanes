const _ = require('lodash');
const { pipe } = require('./pipe');
const { nextPlayerGen } = require('./nextPlayer');
const { askForMove } = require('./askForMove');
const { enterMove } = require('./enterMove');

const playGame = (players) => {
  const nextPlayer = nextPlayerGen(players.length);
  currentPlayer = nextPlayer.next().value;

  scores = pipe(() => players.map((p) => [p, enterMove(501)]), _.fromPairs)(); // {nombre: puntaje}

  console.log(scores);

  while (true) {
    // Game logic
    let player = players[currentPlayer];
    let play = scores[player];
    if (!askForMove(play, player)) break;
    currentPlayer = nextPlayer.next().value;
  }

  console.log(`Ganó ${players[currentPlayer]}!`);
};

module.exports = { playGame };
