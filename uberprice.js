class Ubercar {
  constructor(
    car = "maruthi",
    model = "SUV",
    color = "Black",
    carNumber = "TN 63 BW 8989",
    seating = 6
  ) {
    this.car = car;
    this.model = model;
    this.color = color;
    this.carnumber = carNumber;
    this.seating = seating;
  }

  getPrice(km, season, waitpermin) {
    const basefare = 50;
    const costperkm = 12;
    const bookingfee = 30;
    const waitingfee = 5;
    if (season == "normal") {
      if (waitpermin > 0) {
        return basefare + costperkm * km + bookingfee + waitingfee * waitpermin;
      } else {
        let fare = basefare + costperkm * km + bookingfee;
        return fare;
      }
    } else {
      if (season == "rain") {
        if (waitpermin > 0) {
          return (
            (basefare + costperkm * km + bookingfee + waitingfee * waitpermin) *
            2
          );
        } else {
          let rainfare = (basefare + costperkm * km + bookingfee) * 2;
          return rainfare;
        }
      }
    }
  }
}

const cardetails = new Ubercar();

// car details
console.log(cardetails);

// calculating prices
console.log("normal season fare:", cardetails.getPrice(10, "normal"));
console.log("rainy season fare:", cardetails.getPrice(10, "rain"));
console.log(
  "rainy season fare include waiting:",
  cardetails.getPrice(10, "rain", 5)
);
console.log(
  "normal season fare including waiting:",
  cardetails.getPrice(10, "normal", 5)
);
