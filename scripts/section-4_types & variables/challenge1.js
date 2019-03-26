console.log('------------------------------------');
console.log('Challenge');

// const myObject = {};
// console.log(myObject);

let x = 10;
const y = true;

const myObject = {
  a: x,
  b: y
};

let anotherObject;
x = 20;
anotherObject = {
  newA: x,
  b: y,
  c: myObject
};

console.log(myObject);
console.log(anotherObject);

console.log('------------------------------------');
