const now = require("performance-now");

const smArr = [5, 3, 2, 35, 2];

const bigArr = [
  5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35,
  2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2,
  35, 2,
];

const a1 = now();
smArr.push(27);
const a2 = now();
console.log(`Time: ${a2 - a1}`); // Less than 1 Millisecond
