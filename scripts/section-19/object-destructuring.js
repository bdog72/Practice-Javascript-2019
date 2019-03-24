console.log('------------------------------------');
console.log('Example 1');

// Example 1
//
// const myObject = {
//   a: 10,
//   b: true
// };

// // const a = myObject.a;
// // const b = myObject.b;

// const { a: a, b: b } = myObject;

// console.log(a, b);

// Example 2
//
// const myObject = {
//   a: 10,
//   b: true
// };

// const a = myObject.a;
// const b = myObject.b;

// let a, b;

// ({ a, b } = myObject);

// console.log(a, b);
const val = undefined;
const { a, b } = val || {};
console.log(a, b);

const myArray = [1, 2];
const { c, d } = myArray;
console.log(c, d);

console.log('------------------------------------');
