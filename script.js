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

class Convertible extends Car {
  constructor(make, model, weight, color, roofType) {
    super(make, model, weight, color);
    this.roofType = roofType;
  }

  getInfo() {
    return super.getInfo() + "\n" + "Roof type:" + this.roofType;
  }
}

let convertible1 = new Convertible(
  "Honda",
  "S2000",
  1274,
  "silver",
  "Vinyl, soft-top"
);

let convertible1Name = convertible1.name;

console.log(convertible1.getInfo());
