// The length of string s is >= 3.
// String s consists of lowercase letters only (i.e., [a-z]).

// Regular Expression that checks if the firs tand last letter is a vowel
// Then checks to see if those vowels match -- if they do then it returns TRUE.
function regexVar(str) {
  let re = /^([aeiou]).+\1$/;
  return re;
}

// Test inputs
function readLine() {
  const testStr = ["abcda", "bb", "bcb", "abcd", "abcda", "abcdo"];
  for (let i = 0; i < testStr.length; i++) {
    return testStr[i];
  }
}

// The test() method returns true if it finds a match in string "s", otherwise it returns false.
function main() {
  const re = regexVar();
  const s = ["abcda", "bb", "bcb", "abcd", "abcda", "abcdo"];
  for (let i = 0; i < s.length; i++) {
    console.log(re.test(s[i]));
  }
}

main();

// Expected Input/Output
// "abcda"   // true
// "bb"      // false
// "bcb"     // false
// "abcd"    // false
// "abcda"   // true
// "abcdo"   // false

// function regexVar() {
//   let re = false;
//   let pal = String(arguments[0]);

//   if (pal.length >= 3) {
//     const first = pal.charAt(0); // b
//     // console.log(first);
//     const last = pal.charAt(pal.length - 1);
//     // console.log(last);

//     if (first.match(/[aeiou]/gi) && last.match(/[aeiou]/gi)) {
//       if (first === last) {
//         re = true;
//       }
//     }
//   }
//   return re;
// }
