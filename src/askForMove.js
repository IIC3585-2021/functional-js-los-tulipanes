const prompt = require('prompt-sync')({ sigint: true });

const askForMove = (play, jugador) => {
  const move = prompt(`Ingrese Jugada de ${jugador}: `);
  // TODO: hacer un parser recursivo
  const formattedMove = JSON.parse(move);

  return play(formattedMove);
};

module.exports = { askForMove };
