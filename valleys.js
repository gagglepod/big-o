// Counting Valleys Challenge
// https://codingwithmanny.medium.com/how-to-solve-the-counting-valleys-challenge-f7c6cac95d25

function countingValleys(n, s) {
  const min = 2;
  const max = 1000000;
  let valleys = 0;
  let isInValley = false;

  s = typeof s === "string" ? s.split("") : s;

  if (
    s.length >= min &&
    s.length <= max &&
    n === parseInt(n, 0) &&
    n >= min &&
    n <= max &&
    n === s.length
  ) {
    s = s.map((steps) => (steps === "U" ? 1 : -1));

    let path = 0;
    for (let i in s) {
      path += s[i];
      if (path < 0 && !isInValley) {
        isInValley = true;
      }
      if (path == 0 && isInValley) {
        valleys++;
        isInValley = false;
      }
    }
  }

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

console.log("Solutions = " + countingValleys(10, "UDDDUDUUDU"));
