function* nextPlayerGen(amount) {
  let currentPlayer = 0;
  while (true) {
    yield currentPlayer++ % amount;
  }
}

module.exports = { nextPlayerGen };
