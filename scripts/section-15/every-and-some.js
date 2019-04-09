console.log('------------------------------------');

//

const myNumbers = [3, -5, 1, 10, -7];

const isPositiveNumber = element => typeof element === 'number' && element > 0;

console.log(isPositiveNumber());

const somePositivesCheck = myNumbers.some(isPositiveNumber);

console.log(somePositivesCheck);

const items = [
  {
    title: 'computer',
    quantity: 10
  },
  {
    title: 'phone',
    quantity: 3
  },
  {
    title: 'headphones',
    quantity: 15
  }
];

if (items.every(item => item.quantity > 5)) {
  console.log('All items are available');
}

if (
  items.every(item => item.quantity > 0) &&
  items.some(item => item.quantity <= 5)
) {
  console.log('Some items may be sold soon');
}

//

console.log('------------------------------------');
