// Counting Valleys Challenge
// https://codingwithmanny.medium.com/how-to-solve-the-counting-valleys-challenge-f7c6cac95d25

// ************************************************
// Problem
// The Counting Valleys challenge is counting the number of valleys Gary the hiker goes though:
// Gary = Hiker
// Sea level is 0 — Also the starting level
// S = Descriptive string that is the path of steps Gary the hiker takes
// U and D are “Up” and “Down” respectively and the direction of Gary’s step
// N = number of steps between 2 and 10⁶ (1,000,000)
// AR is a single string of spaced numbers with values ranging between 1 and 100 — ex 10 11 20 31
// N is the number of values in steps in the path between 2 and 1,000,000 (which could be useless if we’re just calculating the array length)
// A valley is defined as going lower than sea level and then back to sea level

// ************************************************
// Goal
// Write a function or functions that returns the total number of valleys found by traversing the string path (S) of steps

function countingValleys(n, s) {
  const min = 2;
  const max = 1000000;
  let isInValley = false;
  let valleys = 0;
  s = typeof s === "string" ? s.split("") : s;

  if (
    s.length >= min &&
    s.length <= max &&
    n === parseInt(n, 0) &&
    n >= min &&
    n <= max &&
    n === s.length
  ) {
    // remove s = s.map because we're already iterating
    s.map((steps) => (steps === "U" ? 1 : -1)).reduce((prev, next) => {
      if (prev < 0 && !isInValley) {
        isInValley = true;
      }
      if (prev + next === 0 && isInValley) {
        valleys++;
        isInValley = false;
      }
      // continue incrementing by adding
      return prev + next;
    });
  }

  return valleys;
}

// Test Cases
// N = 8, S = "UDDDUDUU", Expected 1
// N = 12, S = "DDUUDDUDUUUD", Expected 2
// N = 1, S = "DU", Expected 0
// N = 2, S = "DU", Expected 1
// N = 3, S = "DDU", Expected 0
// N = 1000001, S = "DDU", Expected 0
// N = 20, S = "DDUUDDUUDDUUDDUUDDUU", Expected 5
// N = 10, S = "UUUUUDUUUU", Expected 0

console.log("Solutions = " + countingValleys(20, "DDUUDDUUDDUUDDUUDDUU"));
