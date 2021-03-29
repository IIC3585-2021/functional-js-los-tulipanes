const getLastPlayer = (n, len) => ((n % len) + len) % len;

const isGameOver = (score, currentPlayer) => {
  const lastPlayer = getLastPlayer(currentPlayer, score.length);
  return score[lastPlayer] === 0;
};

module.exports = { isGameOver };
