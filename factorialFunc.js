function factorial(n) {
  let num = n;
  let min = 1;
  let max = 10;

  if (n >= 1 && n <= 10) {
    for (let i = 0; i < n; i++) {
      num = n * factorial(n - 1);
    }
    return num;
  } else {
    if (n === 0) return 1;
    return n + " is out of bounds!";
  }
}

console.log(factorial(11));

// console.log("Factorial of " + n + " is Out-of-Bounds!");
// return "Factorial of " + n + " is Out-of-Bounds!";
