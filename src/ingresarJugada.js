const compose = (f, g) => x => f(g(x));
const calNum = x => x.reduce((y, z) => y * z);
const correctInput = x => !Array.isArray(x) ? inputValidation(x) : x;

const detBull = x => x === "DB" ? [1, 50] : [1, 25];
const inputValidation = x => x === null ? [0,1] : detBull(x);

compose(calNum, correctInput)(null)