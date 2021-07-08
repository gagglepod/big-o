function main() {
  // Write your code here.
  // Read input using 'readLine()' and print output using 'console.log()'.
  let r = readLine();
  const PI = Math.PI;
  // let r = arguments[0];

  // Print the area of the circle:
  console.log(PI * r * r);
  // Print the perimeter of the circle:
  console.log(PI * 2 * r);

  try {
    // Attempt to redefine the value of constant variable PI
    PI = 0;
    // Attempt to print the value of PI
    console.log(PI);
  } catch (error) {
    console.error("You correctly declared 'PI' as a constant.");
  }
}

// Input
main(2.6);

// Output
// Area = 21.237166338267002
// Perimeter = 16.336281798666924
