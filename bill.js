/* eslint-disable no-console */
class Bill {
  constructor() {
    this.dinners = [];
  }

  addDinner(dinner) {
    this.dinners.push(dinner);
  }

  printSubtotal() {
    const total = this.dinners.reduce((prevVal, dinner) => (
      prevVal + dinner.calTotal() + dinner.calTax()
    ), 0);
    console.log(`Dinner total: $${total.toFixed(2)}`);
  }

  printTotalTips() {
    const total = this.dinners.reduce((prevVal, dinner) => (
      prevVal + dinner.calTip()
    ), 0);
    console.log(`Tip total: $${total.toFixed(2)}`);
  }

  calBreakdown() {
    this.dinners.forEach((dinner) => {
      console.log(`Diner: ${dinner.name}`);
      dinner.dishes.forEach((dish) => {
        console.log(`\tDish: ${dish.name}`);
        console.log(`\t\t$${dish.price.toFixed(2)}`);
      });
      console.log(`\tSubtotal $${dinner.calTotal().toFixed(2)}`);
      console.log(`\tTax: $${dinner.calTax().toFixed(2)}`);
      console.log(`\tTip: $${dinner.calTip().toFixed(2)}`);
      console.log(`\tTotal: $${(
        dinner.calTotal() +
        dinner.calTax() +
        dinner.calTip()
      ).toFixed(2)}`);
    });
    this.printSubtotal();
    this.printTotalTips();
  }
}

module.exports = Bill;
