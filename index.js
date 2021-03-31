const { playGame } = require('./src/playGame');
const prompt = require('prompt-sync')({ sigint: true });
playGame(prompt('Ingresar Jugadores separados por coma: ').split(','));
