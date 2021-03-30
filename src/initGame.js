const initGame = (fn, [first, ...rest]) => first === undefined ? [] : [fn(first), ...initGame(fn, rest)];

const fnPts = x => [x, 501]

initGame(fnPts, ["Jose", "Manuel", "Cris"]);