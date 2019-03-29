console.log('------------------------------------');

//
function sum(a, b) {
  function mult(a, b) {
    return a * b;
  }
  mult(a, b);
  return a + b;
}
const result = sum(5, 10);
console.log(result);

//

console.log('------------------------------------');

// 'use strict';
// let d;
// let e;
// function myFunction(a, b) {
//   const c = true;
//   console.log(c);
//   // console.log(d);
//   console.log(e);
//   console.log(a, b);
// }
// myFunction();
// myFunction(2, 3);

// // console.log(c);
// console.log(a);
// console.log(b);
