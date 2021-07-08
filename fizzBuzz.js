// FIZZBUZZ INTERVIEW QUESTION

// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// If Both => FizzBuzz
// Not by Both => Pass the number input
// If pass not a number => "Not a Number"

const output = fizzBuzz(true);
console.log(output);

// function fizzBuzz(input) {
//   if (input == Number(input)) {
//     if (input % 5 === 0 && input % 3 === 0) return "FizzBuzz";
//     else if (input % 3 === 0) return "Fizz";
//     else if (input % 5 === 0) return "Buzz";
//     else return input;
//   } else if (input !== Number(input)) return "Not a Number";
// }

function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;
  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return "Buzz";
  return input;
}
