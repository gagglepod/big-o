function solution(A) {
  let hills = 0;
  let valleys = 0;
  let castles = 0;

  // segments is the size of the array
  // elevation is the lowest or highest points
  let elevation = A;
  let segments = A.length;

  const min = 1;
  const max = 100000;

  let onHill = false;
  let justFlat = false;
  let inValley = false;

  let border = elevation[0];
  for (let i in elevation) {
    console.log("elevation = " + elevation[i]);
    console.log("border = " + border);

    if (elevation[i] == border) {
      border = elevation[i];
      justFlat = true;
      console.log("flat");
    }
    // going up a hill
    if (elevation[i] < border && justFlat) {
      valleys++;
      border++;
      onHill = true;
      inValley = false;
      justFlat = false;
      console.log("going up");
      console.log("valleys =" + valleys);
    }
    // going down a hill
    if (elevation[i] > border && justFlat) {
      hills++;
      border--;
      onHill = false;
      inValley = true;
      justFlat = false;
      console.log("going down");
      console.log("hills =" + hills);
    }
  }
  castles = hills + valleys;
  return castles;
}

console.log(solution([2, 2, 3, 4, 3, 3, 2, 2, 1, 1, 2, 5]));
