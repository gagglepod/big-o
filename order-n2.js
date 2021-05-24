const now = require("performance-now");

const smArr = [5, 3, 2, 35, 2];
const smArr2 = [4, 7, 22, 5, 12];

const bigArr = [
  5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35,
  2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2,
  35, 2,
];
const bigArr2 = [
  5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35,
  2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2,
  35, 2,
];

const a1 = now();
smArr.forEach(() => {
  smArr2.forEach((item) => console.log(item));
});
const a2 = now();
console.log(`Time: ${a2 - a1}`); // 8 Milliseconds

const b1 = now();
bigArr.forEach(() => {
  bigArr2.forEach((item) => console.log(item));
});
const b2 = now();
console.log(`Time: ${b2 - b1}`); // 307 Milliseconds
