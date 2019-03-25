console.log('------------------------------------');
// console.log('Example 1');

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
// const val = undefined;
// const { a, b } = val || {};
// console.log(a, b);

// const myArray = [1, 2];
// const { length, d } = myArray;
// console.log(length, d);

// const myObject = {
//   a: 10,
//   b: true
// };

// const { b, a } = myObject;

// console.log(a, b);

// const myObject = {
//   a: 10,
//   b: true,
//   c: [],
//   d: 'abc',
//   e: 20
// };
// const myObject1 = {
//   g: 101,
//   h: false,
//   i: [],
//   j: 'abcdef',
//   k: 200
// };

// const { a, b, ...rest } = myObject;
// const { g, h, ...rest1 } = myObject1;

// Object.prototype.newProp = 1;
// console.log(myObject);
// console.log(myObject1);

// const myObject = {
//   a: 10,
//   b: true
// };

// const { a, b = 'defaultValue', c = 'defaultValue' } = myObject;

// console.log(a, b, c);

// const myObject = {
//   a: 10,
//   b: true
// };

// const { a: newA, b: newB, c: newC = 'defaultValue' } = myObject;

// console.log(newA, newB, newC);

const myObject = {
  a: 1,
  b: 2,
  nestedObject: {
    c: 3,
    d: 4
  }
};

const {
  a,
  b,
  nestedObject: { c, d }
} = myObject;
// const { c: c, d: d } = nestedObject;
console.log(a, b, c, d);

console.log('------------------------------------');
