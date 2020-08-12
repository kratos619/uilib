import { Vechicle } from "./Vehicle";
export class Drone extends Vechicle {
  constructor(license, model, latLong) {
    super(license, model, latLong);
    this.airTimeHours = null;
    this.base = null;
  }
}
