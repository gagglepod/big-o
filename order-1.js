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
console.log(`Small Array Time: ${a2 - a1}`); // Less than 1 Millisecond

const b1 = now();
bigArr.push(27);
const b2 = now();
console.log(`Big Array Time: ${b2 - b1}`); // Less than 1 Millisecond
