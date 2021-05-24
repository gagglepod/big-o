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

const factorial = (n) => {
  let num = n;

  if (n === 0) return 1;
  for (let i = 0; i < n; i++) {
    num = n * factorial(n - 1);
  }

  return num;
};

console.log(factorial(1)); // 2 Milliseconds
console.log(factorial(5)); // 3 Milliseconds
console.log(factorial(10)); // 85 Milliseconds
console.log(factorial(12)); // 11,942 Milliseconds
