console.log('------------------------------------');

//
var a = 5;
let b = 3;
function sum(a, b) {
  let c = a + b;
  console.log(c);
}
sum(a, b);
a = 5;
b = 10;
sum(a, b);

//
console.log('------------------------');
//

function myFn(a, b) {
  let c;
  a = a + 1;
  c = a + b;
  return c;
}

let result = myFn(10, 20);
console.log(result);
console.log(myFn(12, 3));

function myFn1() {}
console.log(myFn1());
//
console.log('------------------------------------');
