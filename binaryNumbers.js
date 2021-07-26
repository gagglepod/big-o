"use strict";

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

function main() {
  const n = parseInt(readLine().trim(), 10);
  let binaryNumber = n.toString(2).split("");
  let count = 0,
    countArray = [],
    index = 0;
  for (let i in binaryNumber) {
    if (Number.parseInt(binaryNumber[i]) === 1) {
      count++;
    } else {
      countArray[index++] = count;
      count = 0;
    }
  }
  if (count !== 0) countArray[index] = count;
  console.log(Math.max(...countArray));
}
