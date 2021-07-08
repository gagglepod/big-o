// if (n >= 1 && n <= 5) {
// if (a >= -100 && a <= 100) {

// If a is positive -- return "YES"
// If a is 0        -- return message("Zero Error")
// If a is negative -- return message("Negative Error")

// Input -- 2, 0, 6
// Output -- YES, YES, ZERO ERROR, YES

function isPositive(a) {
  try {
    if (a < 0) {
      throw "Negative Error";
    } else if (a == 0) {
      throw "Zero Error";
    } else {
      return "YES";
    }
  } catch (e) {
    return e;
  }
}

console.log(isPositive(2)); // YES
console.log(isPositive(0)); // Zero Error
console.log(isPositive(-2)); // Negative Error

console.log(isPositive(NaN)); // Error YES?
console.log(isPositive(null)); // Error YES?
console.log(isPositive(0.2)); // Error YES?
console.log(isPositive("2")); // Error YES?
console.log(isPositive("Foo")); // Error YES?
