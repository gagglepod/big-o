// Write a function: // function solution(A);
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// Given A = [1, 2, 3], the function should return 4.
// Given A = [−1, −3], the function should return 1.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

function solution(A) {
  let missingNum = 0;
  let series = A;

  // remove dups
  series = [...new Set(series)]; // 1, 3, 6, 4, 2
  console.log(series);
  // sort ascending
  series.sort((a, b) => a - b); // 1, 2, 3, 4, 6
  console.log(series);

  for (let i = 0; i < series.length; i++) {
    missingNum = missingNum + 1;
    if (series[i] != missingNum) {
      return missingNum;
    }
  }
}

console.log(solution([1, 3, 6, 4, 1, 2])); // 5
