// Return the second largest number in the array.
// @param {Number[]} nums - An array of numbers.
// @return {Number} The second largest number in the array.

function getSecondLargest(nums) {
  // Complete the function
  let series = nums;

  // get the max of the array
  series = [...new Set(series)]; // remove dups
  let max = Math.max(...series);
  let secondNum = max;

  // If the array contains more than one number
  if (series.length > 1) {
    // find 1st max and remove it
    let index = series.indexOf(max);
    series.splice(index, 1);

    // get the 2nd max
    let newMax = Math.max(...series);
    secondNum = newMax;
  }
  return secondNum;
}

console.log(getSecondLargest([5]));
console.log(getSecondLargest([2, 3, 6, 6, 5]));
console.log(getSecondLargest([5, 5, 9, 10, 10]));
