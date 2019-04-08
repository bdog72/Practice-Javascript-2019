console.log('------------------------------------');

//

const myNumbers = [1, 5, 7];
// let mySquareNumbers = [];

// for (let i = 0; i < myNumbers.length; i++) {
//   mySquareNumbers.push(myNumbers[i] * myNumbers[i]);
// }

// let mySquareNumbers = myNumbers.map(element => element * element);

// const squareNumbers = element => element * element;

// let mySquareNumbers = myNumbers.map(squareNumbers);

// const squareNumbers = (element, index) => {
//   console.log(`Element at the index ${index} is ${element}`);

//   return element * element;
// };

// let mySquareNumbers = myNumbers.map(squareNumbers);

let mySquareNumbers = myNumbers.map(element => Math.pow(element, 2));

console.log(mySquareNumbers);
console.log(myNumbers);

//

console.log('------------------------------------');
