const prompt = require('prompt-sync')({ sigint: true });

const askForMove = (play, jugador) => {
  const move = prompt(`Ingrese Jugada de ${jugador}: `);
  const formattedMove = move.match(/[0-9]{1,2},[0-9]{1,2}|DB|SB|null/gi)
  .map((x) => {
    if (x.includes("null")){
      return null
    }
    else if (x.includes(',')) {
      return x.split(',').map(y => parseInt(y))
    }
    else {
      return x
    }
  });

  return play(formattedMove);
};


module.exports = { askForMove };
