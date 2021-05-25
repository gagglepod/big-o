// O(n) Example
const now = require("performance-now");

const fooArr = [1, 2, 3, 4, 5];

let sum = 0;
let product = 1;

const a1 = now();
for (let i = 0; i < fooArr.length; i++) {
  sum += fooArr[i];
}
const a2 = now();
console.log(`Time: ${a2 - a1}`); // 1 ms

const b1 = now();
for (let i = 0; i < fooArr.length; i++) {
  product *= fooArr[i];
}
const b2 = now();
console.log(`Time: ${b2 - b1}`); // 3 ms

console.log(sum + ", " + product);
