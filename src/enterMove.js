// ¡¡¡SACAR!!!
const _ = require('lodash');

/**
 * Use of Y combinator to let scoreCalculator as a pure function, otherwise it was
 * needed an object and make reference from the function to it.
 * Functional operations: Combinators
 */
const specialPoints = (f) => (value) => (value === 'DB' ? 50 : 25);
const Y = (f) => ((x) => x(x))((x) => f((y) => x(x)(y)));

// Use of composition to do the sum and abs operation consecutively
const compose = (f, g) => (x) => f(g(x));
const scoreCalculator = (value) =>
  Array.isArray(value)
    ? -1 * _.multiply(...value)
    : -1 * Y(specialPoints)(value);

/**
 * Function that gets the right score at the right format
 * Functional operations: Composition
 * @param  {Array} total_score Array with the scores of each movement
 * @return {Function} Function that calculate the score from a given value
 */
const getScore = (total_score) => compose(Math.abs, _.sum)(total_score);

/**
 * Handle one move of the current player
 * Functional operations: Closure,
 * @param  {String} currentPlayer The name of the current player
 * @return {Function} Function with the 'score' closure to get the new score
 */
const enterMove = (currentPlayer) => {
  let score = 501;

  /**
   * Calculate the new score of the player
   * Functional operations: Higher order functions
   * @param  {Array} move Particular move of the current player
   * @return {Integer} New score of the player based on the move
   */
  // puntajes actuales los multiplica por -1 porque se restarán, envía el score para
  // considerarlo en la suma del compose
  // Quizas puedo hacer el currying con el score!!!!
  const newScore = (move) => {
    score = getScore(move.map(scoreCalculator).concat([score]));
    return score
  };
  return newScore;
};

// Tests
let manuMove = enterMove('Manuel');
console.log(manuMove(['DB', [3, 20], [3, 19]]));
console.log(manuMove(['DB', [3, 20], [3, 19]]));
console.log(manuMove(['SB', [2,20], [3,20]]));
console.log(manuMove(['SB', [2,20], [3,20]]));
