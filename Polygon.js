// Implement a Polygon class with the following properties:
// 1. A constructor that takes an array of integer side lengths.
// 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.

class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  perimeter() {
    return this.sides.reduce(function add(a, b) {
      return a + b;
    });
  }
}

// Create a new Polygon Object with a Sides Array
const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

// Output the new object using the Polgon.permeter() function
console.log(rectangle.perimeter()); // 60
console.log(square.perimeter()); // 40
console.log(pentagon.perimeter()); // 143
