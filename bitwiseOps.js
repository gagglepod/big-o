function bitwiseOps(n, k) {
  let max = 0;
  for (let b = n; b > 0; b--) {
    for (let a = b - 1; a > 0; a--) {
      const temp = a & b;
      if (temp < k && temp > max) {
        max = temp;
      }
    }
  }
  return max;
}

console.log(bitwiseOps(3));
console.log(bitwiseOps(5, 2));
console.log(bitwiseOps(8, 5));
console.log(bitwiseOps(2, 2));
