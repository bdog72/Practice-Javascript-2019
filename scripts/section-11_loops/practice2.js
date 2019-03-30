console.log('------------------------------------');

//

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// const myArray = [0, true, 'abc', null];

// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// let i = 0;
// while (i > -5) {
//   console.log(i);
//   i--;
// }

// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// const myObject = {
//   a: 'abc',
//   b: true,
//   c: null,
//   d: 150
// };

// for (let key in myObject) {
//   console.log(myObject[key]);
// }

const myObject = {
  a: 'abc',
  b: true,
  c: null,
  d: 150
};

const myObject1 = {
  a: 'abc',
  b: true,
  c: null,
  d: 150
};

Object.prototype.globalProp = 'Inherited property';

for (let key in myObject) {
  console.log(key, myObject[key]);
}

for (let key in myObject1) {
  console.log(key, myObject1[key]);
}

//

console.log('------------------------------------');
