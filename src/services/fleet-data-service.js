import { fleet } from "../data";

const { Car } = require("../classes/Car");
const { Drone } = require("../classes/Drone");
const { DataErrors } = require("./data-error");

export class FleetDataService {
  constructor() {
    this.cars = [];
    this.drone = [];
    this.errors = [];
  }
  filtersCarByMake(filter) {
    return this.cars.filter((car) => car.make.indexOf(filter) >= 0);
  }
  loadData(fleet) {
    for (let data of fleet) {
      switch (data.type) {
        case "car":
          let car = this.loadCars(data);
          this.cars.push(car);
          break;
        case "drone":
          let drone = this.loadDrons(data);
          this.drone.push(drone);
          break;
        default:
          let e = new DataErrors("invalid Vechicle Type", data);
          this.errors.push(e);
      }
    }
  }
  loadDrons(drone) {
    try {
      let d = new Drone(drone.license, drone.model, drone.latLong);
      d.airTimeHours = drone.airTimeHours;
      d.base = drone.base;
      return d;
    } catch (error) {
      this.errors.push(new DataErrors("error loading drone", drone));
    }
    return 0;
  }
  loadCars(car) {
    try {
      let c = new Car(car.license, car.model, car.latLong);
      c.miles = car.miles;
      c.make = car.make;
      return c;
    } catch (error) {
      this.errors.push(new DataErrors("error loading cars", car));
    }
    return 0;
  }
}
