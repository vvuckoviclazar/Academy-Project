"use strict";

class Car {
  constructor(make, model, weight, color) {
    this.make = make;
    this.model = model;
    this._weight = weight;
    this.color = color;
  }

  get name() {
    return this.make + " " + this.model;
  }

  set weight(weight) {
    if (isNaN(this.weight)) {
      this._weight = weight;
    } else {
      throw new TypeError("Value of weight must be a number!");
    }
  }

  get weight() {
    return this._weight + "kg";
  }

  getInfo() {
    return (
      "Make:" +
      this.make +
      "\n" +
      "Model:" +
      this.model +
      "\n" +
      "Weight:" +
      this.weight +
      "\n" +
      "Color:" +
      this.color
    );
  }

  static kwToHp(kw) {
    return (kw * 1.34102).toFixed(2);
  }
}

var car1 = new Car("Subary", "Legacy", 1563, "black");
var car1 = new Car("Ford", "Taurus", 1876, "blue");
var car1 = new Car("Porsche", "Panamera", 1563, "grey");

car1.weight = 1900;

console.log(Car.kwToHp(250));
