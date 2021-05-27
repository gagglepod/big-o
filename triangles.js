// Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a, b, c) {
  if (a + b <= c || b + c <= a || c + a <= b) {
    return false;
  } else {
    return true;
  }
}

function isTriangleBest(a, b, c) {
  return a + b > c && a + c > b && c + b > a;
}

console.log(isTriangle(1, 2, 2)); // true
console.log(isTriangle(7, 2, 2)); // false

console.log(isTriangleBest(1, 2, 2)); // true
console.log(isTriangleBest(-1, 2, 2)); // false
console.log(isTriangleBest(-1, -2, 2)); // false
console.log(isTriangleBest(4, 5, 2)); // true
console.log(isTriangleBest(0, 5, 2)); // false
console.log(isTriangleBest(0, 0, 0)); // false
