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

// countingValleys(8, "UDDDUDUU");
// NUMBER OF STEPS -- n = 8;
// PATH OF STEPS -- s = "UDDDUDUU";

function countingValleys(n, s) {
  // setting the constraints
  const min = 2;
  const max = 1000000;
  let valleys = 0;
  let isInValley = false;

  // if n is a string, make it an int
  // ex "10" = 10
  n = parseInt(n, 0);

  // if s is a string convert it to an array
  // ex "UDU" = ["U", "D", "U"]
  s = typeof s === "string" ? s.split("") : s;
  // ["U", "D", "D", "D", "U", "D", "U", "U"]

  // check if s meets the requirements
  if (
    s.length >= min && // 10 true
    s.length <= max && // 10 true
    n === parseInt(n, 0) && // 10 === 10 true
    n >= min && // 10 true
    n <= max && // 10 true
    n === s.length // 10 === 10 true
  ) {
    // converting the array steps to integers
    s = s.map((steps) => (steps === "U" ? 1 : -1));
    // [1, -1, -1, -1, 1, -1, 1, 1]

    let path = 0;
    for (let i in s) {
      path += s[i];
      //  0 +  1 =  1
      //  1 + -1 =  0
      //  0 + -1 = -1
      // -1 + -1 = -2
      // -2 +  1 = -1
      // -1 + -1 = -2
      // -2 +  1 = -1
      // -1 +  1 =  0
      // initial = 0
      // end = 0

      if (path < 0 && !isInValley) {
        // to check that we're not already in a valley
        // start of a valley
        isInValley = true;
      }
      if (path == 0 && isInValley) {
        // to check if we're just coming out of a valley
        // end of valley, increase count
        valleys++;
        isInValley = false; // reset isInValley
      }
    }
    //  0 +  1 =  1 (Moved up = valley not started)
    //  1 + -1 =  0 (Back to sea level = valley not started)
    //  0 + -1 = -1 (Below sea level = valley started)
    // -1 + -1 = -2 (Moved lower = still in valley
    // -2 +  1 = -1 (Moved up = still in valley)
    // -1 + -1 = -2 (Moved lower = still in valley)
    // -2 +  1 = -1 (Moved up = still in valley)
    // -1 +  1 =  0 (Back to sea level = 1 valley)
    // initial = 0
    // end = 0
  }

  // to make sure we return even when the req. are not met
  return valleys;
}

// Test Case
// N = 8, S = "UDDDUDUU", Expected 1
// N = 12, S = "DDUUDDUDUUUD", Expected 2
// N = 1, S = "DU", Expected 0
// N = 2, S = "DU", Expected 1
// N = 3, S = "DDU", Expected 0
// N = 1000001, S = "DDU", Expected 0
// N = 20, S = "DDUUDDUUDDUUDDUUDDUU", Expected 5
// N = 10, S = "UUUUUDUUUU", Expected 0

// console.log("Solutions = " + countingValleys(10, "UDDDUDUUDU"));
console.log("Solutions = " + countingValleys(4, "DUDU"));

// ************************************************
// Example 1
// n = 8
// s = "UDDDUDUU" or ["U", "D", "D", "D", "U", "D", "U", "U", "D", "U"]

// countingValleys(8, "UDDDUDUU");

// path = 1
// isInValley = false
// valleys = 0
// path = 0
// isInValley = false
// valleys = 0
// path = -1
// isInValley = true
// valleys = 0
// path = -2
// isInValley = true
// valleys = 0
// path = -1
// isInValley = true
// valleys = 0
// path = -2
// isInValley = true
// valleys = 0
// path = -1
// isInValley = true
// valleys = 0
// path = 0
// isInValley = false
// valleys = 1
// Solution = 1

// ************************************************
// Example 2
// n = 10
// s = UDDDUDUUDU
// ...
// path = 0
// isInValley = false
// valleys = 1
// path = -1
// isInValley = true
// valleys = 1
// path = 0
// isInValley = false
// valleys = 2
// Solution = 2
