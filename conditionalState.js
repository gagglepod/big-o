function conditionalState(n) {
  let num = n;

  if (num % 2 == 1) {
    console.log("Weird"); // Odd Number
  } else if (num <= 5 && num >= 2) {
    console.log("Not Weird"); // Even Number btwn 2 and 5
  } else if (num >= 6 && num <= 20) {
    console.log("Weird");
  } else if (num > 20) {
    console.log("Not Weird");
  }
}

conditionalState(1); // Weird
conditionalState(2); // Not Weird
conditionalState(6); // Weird
conditionalState(21); // Weird
conditionalState(3); // Weird
conditionalState(24); // Not Weird
conditionalState(36); // Not Weird
