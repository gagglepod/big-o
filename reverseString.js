/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
// function reverseString(s) {
//   s = s + "";
//   return s.split("").reverse().join("");
// }

function reverseString(s) {
  try {
    let a = s.split("").reverse().join("");
    console.log(a);
  } catch (e) {
    console.log(e.message);
    console.log(s);
  }
}

reverseString("1234"); //4321
reverseString(1234); // false -- Error(e)
