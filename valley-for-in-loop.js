const s = [1, -1, -1, -1, 1, -1, 1, 1];
let isInValley = false;
let valleys = 0;

let path = 0;
for (let i in s) {
  path += s[i];
  console.log("path = " + path);
  console.log("isInValley = " + isInValley);
  console.log("valleys = " + valleys);
  console.log("*********************");

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
console.log("Sea Level: " + path);
console.log("Are we still in a valley? " + isInValley);
console.log("Number of Valleys: " + valleys);

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
