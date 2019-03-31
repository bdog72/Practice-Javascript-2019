console.log('------------------------------------');

//

// const myObject = {
//   key1: true,
//   key5: 10,
//   key3: 'abc',
//   key4: null,
//   key10: NaN
// };

// for (let key in myObject) {
//   if (key === 'key1' || key === 'key3') {
//     console.log(myObject[key]);
//   }
// }

const MIN = 1000;
const MAX = 9999;

const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351];

let newRandomNumber;

// console.log(myNumbers);

// newRandomNumber = Math.floor(1000 + Math.random() * 9999);
// console.log(newRandomNumber);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// console.log(getRandomInt(MIN, MAX));

function isNotUnique(newRandomNum) {
  for (let number of myNumbers) {
    if (number === newRandomNum) {
      return true;
    }
  }
}

do {
  newRandomNumber = getRandomInt(MIN, MAX);
} while (isNotUnique(newRandomNumber));

myNumbers.push(newRandomNumber);

console.log(myNumbers);

//

console.log('------------------------------------');
