class Circle {
  constructor(radius = 1.0, color = "red") {
    this.radius = radius;
    this.color = color;
  }
  getRadius() {
    return this.radius;
  }
  setRadius(radius) {
    return (this.radius = radius);
  }
  getColor() {
    return this.color;
  }
  setColor(color) {
    return (this.color = color);
  }
  toString() {
    return `circle [radius = ${this.radius}, color = ${this.color}]`;
  }
  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}
const results = new Circle();

console.log("getradius :", results.getRadius());
console.log("setradius :", results.setRadius(4));
console.log("getcolor :", results.getColor());
console.log("setcolor :", results.setColor("orange"));
console.log("tostring :", results.toString());
console.log("Area :", results.getArea().toFixed(2));
console.log("Circunference:", results.getCircumference().toFixed(2));
