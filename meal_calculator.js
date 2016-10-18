const Dinner = require('./dinner.js');
const Bill = require('./bill.js');

const johnDinner = new Dinner('John');
johnDinner.addDish({ name: 'soup', price: 3.50 });
johnDinner.addDish({ name: 'pizza', price: 5.95 });

const janeDinner = new Dinner('Jane');
janeDinner.addDish({ name: 'bread', price: 0.50 });
janeDinner.addDish({ name: 'steak', price: 12.35 });

const bobDinner = new Dinner('Bob');
bobDinner.addDish({ name: 'hamburger', price: 14.50 });
bobDinner.addDish({ name: 'toast', price: 0.25 });

const bill = new Bill();
bill.addDinner(johnDinner);
bill.addDinner(janeDinner);
bill.addDinner(bobDinner);

bill.calBreakdown();
