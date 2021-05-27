// DAY 4

// How to Capitalize the First Letter of Each Word in JavaScript – a JS Uppercase Tutorial
// https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript/

// The code iterates over each word, and it replaces it with the uppercase of the first letter + the rest of the string.

// const notJadenCased = "How can mirrors be real if our eyes aren't real";
// const jadenCased = "How Can Mirrors Be Real If Our Eyes Aren't Real";

let str = "How can mirrors be real if our eyes aren't real";

String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

console.log(str.toJadenCase());

// **********************************************************
// Example 1
// const mySentence = "freeCodeCamp is an awesome resource";

function jadenCase1(mySentence) {
  const words = mySentence.split(" "); // ["freeCodeCamp", "is", "an", "awesome", "resource"].
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(" ");
}

console.log(jadenCase1("freeCodeCamp is an awesome resource"));

// **********************************************************
// Example 2

String.prototype.toJadenCase2 = function () {
  return this.split(" ")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");
};

console.log(str.toJadenCase2());

function jadenCase2(mySentence) {
  const words = mySentence.split(" ");
  return words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
}

console.log(jadenCase2("freeCodeCamp is an awesome resource"));
