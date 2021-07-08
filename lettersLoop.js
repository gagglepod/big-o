function vowelsAndconsonants(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  //convert string to array and get rid of non alphabets as we are just interested on consonants and vowel
  const str_array = str.replace(/[^a-zA-Z]/g, "").split("");
  //pluck vowels
  const vowels_final = str_array.filter((a) =>
    vowels.includes(a.toLowerCase())
  );
  //pluck consonants
  const consonant_final = str_array.filter(
    (a) => !vowels.includes(a.toLowerCase())
  );
  //to print any vowels from a word on a new line and then consonant in the order they appear.
  return vowels_final.join("\n") + "\n" + consonant_final.join("\n");
}

vowelsAndConsonants("javascriptloops");
vowelsAndConsonants("tEstOnlY and nothing else");
vowelsAndConsonants("dry");
vowelsAndConsonants("I love stackoverflow");

// **********************************************************************************
// Note: for...in should not be used to iterate over an Array where the index order is important. [...]

// [...] iterating over an array may not visit elements in a consistent order. Therefore, it is better to use a for loop with a numeric index (or Array.prototype.forEach() or the for...of loop) when iterating over arrays where the order of access is important.

function isVowel(letter) {
  return (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u"
  );
}

function vowelsAndConsonants(s) {
  var consonants = [];
  var vowels = [];

  for (var letter of s) {
    if (isVowel(letter)) {
      vowels.push(letter);
    } else {
      consonants.push(letter);
    }
  }

  for (var vowel of vowels) {
    console.log(vowel);
  }

  for (var constant of consonants) {
    console.log(constant);
  }
}

vowelsAndConsonants("javascriptloops");
