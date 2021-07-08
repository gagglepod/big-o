// Write code that adds an 'area' method to the Rectangle class' prototype
// Create a Square class that inherits from Rectangle and implement its class constructor

class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}

Rectangle.prototype.area = function () {
  return this.w * this.h;
};

class Square extends Rectangle {
  constructor(s) {
    super(s);
    this.h = s;
    this.w = s;
  }
}

const r = new Rectangle(3, 6);
console.log(r);

const s = new Square(3, 6);
console.log(s);
