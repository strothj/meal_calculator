class Dinner {
  constructor(name) {
    this.name = name;
    this.dishes = [];
  }

  addDish(dish) {
    this.dishes.push(dish);
  }

  calTotal() {
    return this.dishes.reduce((prev, { price }) => prev + price, 0);
  }

  calTax() {
    return this.calTotal() * 0.05;
  }

  calTip() {
    return (this.calTotal() + this.calTax()) * 0.2;
  }
}

module.exports = Dinner;
