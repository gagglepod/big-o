// goes clockwise around the 5 in the center
let nums = [1, 2, 3, 6, 9, 8, 7, 4];
const ids = [1, 2, 3, 6, 9, 8, 7, 4];

let btn5 = document.getElementById("btn5");

btn5.onclick = function () {
  // Test -- The starting point of the nums array
  console.log(nums);

  // Each click of Button 5 fires this off
  // removes (pop) the end of nums array off...
  // Then adds it (unshift) to the beginning of nums array!
  nums.unshift(nums.pop());

  // applies changes to all the innerHTML numbers based on id array
  // Go find every button with an id of X (id array), and change it to Y (new nums array)
  // It never changes btn5 because 5 is not in any array
  // Which means it only needs to count to 8 (0-7)
  for (i = 0; i <= 7; i++) {
    document.getElementById("btn" + ids[i]).innerHTML = nums[i];

    // Test -- news ids applied to HTML based on new nums array sequence
    console.log(nums[i]);
  }
};
