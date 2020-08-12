import { Vechicle } from "./Vehicle";

export class Car extends Vechicle {
  constructor(license, model, latLong) {
    super(license, model, latLong);
    this.miles = null;
    this.make = null;
  }
}
