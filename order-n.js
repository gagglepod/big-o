const now = require("performance-now");

const smArr = [5, 3, 2, 35, 2];

const bigArr = [
  5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35,
  2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2,
  35, 2,
];

const a1 = now();
smArr.forEach((item) => console.log(item));
const a2 = now();
console.log(`Time: ${a2 - a1}`); // 3 Milliseconds

const b1 = now();
bigArr.forEach((item) => console.log(item));
const b2 = now();
console.log(`Time: ${b2 - b1}`); // 13 Milliseconds
