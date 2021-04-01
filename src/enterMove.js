const _ = require('lodash');

const specialPoints = (value) => (value === 'DB' ? 50 : 25);

/**
 * Use of composition to do the sum and abs operation consecutively
 * Points multiplied by -1 to rest them with the current score
 */
const compose = (f, g) => (x) => f(g(x));
const scoreCalculator = (value) =>
  Array.isArray(value) ? -1 * _.multiply(...value) : -1 * specialPoints(value);

/**
 * Function that gets the right score at the right format
 * Functional operations: Composition
 * @param  {Array} total_score Array with the scores of each movement
 * @return {Function} Function that calculate the score from a given value
 */
const getScore = (total_score) => compose(Math.abs, _.sum)(total_score);

/**
 * Handle one move of the current player
 * Functional operations: Closure
 * @param  {String} currentPlayer The name of the current player
 * @return {Function} Function with the 'score' closure to get the new score
 */
const enterMove = (initScore) => {
  let score = initScore;

  /**
   * Calculate the new score of the player
   * Functional operations: Higher order functions, Chaining
   * @param  {Array} move Particular move of the current player
   * @return {Integer} New score of the player based on the move
   */
  const newScore = (move) => {
    score = getScore(
      move
        .filter((x) => x != null)
        .map(scoreCalculator)
        .concat([score])
    );
    console.log(score);
    return score;
  };
  return newScore;
};

module.exports = { enterMove };
