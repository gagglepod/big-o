// JavaScript Array Sort – How to Use JS Sort Methods (With Code Examples)
// https://www.freecodecamp.org/news/javascript-array-sort-tutorial-how-to-use-js-sort-methods-with-code-examples/

// Bob is bored during his physics lessons so he's built himself a toy box to help pass the time.
// The box is special because it has the ability to change gravity.

// There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes.
// At first, the gravity in the box is pulling the cubes downwards.
// When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right).
// Below is an example of what a box of cubes might look like before and after switching gravity.

// Example Input/Output:
// flip('R', [3, 2, 1, 2])     =>  [1, 2, 2, 3]
// flip('L', [1, 4, 5, 3, 5])  =>  [5, 5, 4, 3, 1]

// *************************************************************************

// The sort method, fortunately, can sort negative, zero, and positive values in the correct order.
// When the sort( ) method compares two values, it sends the values to our compare function and sorts the values according to the returned value.

// Example Sort Ascending;
const numbersAsc = [3, 23, 12];
numbersAsc.sort(function (a, b) {
  return a - b; // Comparison Function
});
console.log(numbersAsc); // --> 3, 12, 23

// If the result is negative, a is sorted before b.
// If the result is positive, b is sorted before a.
// If the result is 0, nothing changes.

// If we want to sort the numbers in descending order, this time we need to subtract the second parameter (b) from the first one (a):

// Example Sort Decending:
const numbersDec = [3, 23, 12];
numbersDec.sort(function (a, b) {
  return b - a; // Comparison Function
});
console.log(numbersDec); // --> 23, 12, 3

// *************************************************************************
// Solution based on Ascending or Decending switch:
const flip = (direction, arr) => {
  return arr.sort((a, b) => (direction === "R" ? a - b : b - a));
};

// The sort method, fortunately, can sort negative, zero, and positive values in the correct order.
// When the sort( ) method compares two values, it sends the values to our compare function and sorts the values according to the returned value.

// If the result is negative, a is sorted before b.
// If the result is positive, b is sorted before a.
// If the result is 0, nothing changes.

console.log(flip("R", [3, 2, 1, 2]));
console.log(flip("L", [1, 4, 5, 3, 5]));
