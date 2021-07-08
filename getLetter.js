function getLetter(s) {
  let letter;
  let set = s.split(""); // ["a", "d", "f", "g", "t"].;
  // Write your code here

  // I have "a"
  let alpha = ["a", "e", "i", "o", "u"]; // A
  let beta = ["b", "c", "d", "f", "g"]; // B
  let charlie = ["h", "j", "k", "l", "m"]; // C
  let delta = ["n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]; // D

  if (alpha.includes(set[0])) {
    letter = "A";
  }
  if (beta.includes(set[0])) {
    letter = "B";
  }
  if (charlie.includes(set[0])) {
    letter = "C";
  }
  if (delta.includes(set[0])) {
    letter = "D";
  }
  return letter;
}

console.log(getLetter("adfgt"));
console.log(getLetter("bcdfg"));
console.log(getLetter("hjklm"));
console.log(getLetter("zqrstv"));
