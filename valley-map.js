myArray = [1, 2, 3, 4];

newArray = myArray.map((num) => (num % 2 !== 0 ? "odd" : "even"));
console.log(newArray);
