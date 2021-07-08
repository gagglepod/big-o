// Given the meal price (base cost of a meal),
// tip percent (the percentage of the meal price being added as tip),
// and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost.
// Round the result to the nearest integer.
// Meal Cost = 100
// Tip Percent = 15
// Tax Percent = 8
// A tip of 15% * 100 = 15, and the taxes are 8% * 100 = 8.
// Print the value 123 and return from the function.

// meal_cost = 12, tip_percent = 20, tax_percent = 8

// Calculations
// tip = 12 and 12/100 x 20 = 2.4
// tax = 8 and 8/100 x 20 = 0.96
// total_cost = meal_cost + tip + tax = 12 + 2.4 + 0.96 = 15.36
// round(total_cost) = 15 (rounded total_cost to the nearest integer)

// Meal Cost = 100
// Tip Percent = 15
// Tax Percent = 8

function solve(meal_cost, tip_percent, tax_percent) {
  // Write your code here
  let mealCost = meal_cost;
  let tipPercent = tip_percent;
  let taxPercent = tax_percent;

  // tip = 12 and 12/100 x 20 = 2.4
  let tip = (mealCost / 100) * tipPercent;
  // console.log(tip);

  // tax = 8 and 8/100 x 20 = 0.96
  let tax = (mealCost / 100) * taxPercent;
  // console.log(tax);

  // total_cost = meal_cost + tip + tax = 12 + 2.4 + 0.96 = 15.36
  let totalCost = Math.round(mealCost + tip + tax);
  // console.log(totalCost);

  // round(total_cost) = 15 (rounded total_cost to the nearest integer)
  return totalCost;
}

console.log("Your First Bill: " + solve(12, 20, 8)); // 15
console.log("Your Second Bill: " + solve(15.5, 15, 10)); // 19

function solve2(meal_cost, tip_percent, tax_percent) {
  // Write your code here
  const tip = meal_cost * (tip_percent * 0.01);
  const tax = meal_cost * (tax_percent * 0.01);
  return Math.round(meal_cost + tax + tip);
}

console.log(solve2(21, 20, 8)); // 15
console.log(solve2(45.5, 15, 10)); // 19

// function main() {
//   const meal_cost = parseFloat(readLine().trim());

//   const tip_percent = parseInt(readLine().trim(), 10);

//   const tax_percent = parseInt(readLine().trim(), 10);

//   solve2(meal_cost, tip_percent, tax_percent);
// }
