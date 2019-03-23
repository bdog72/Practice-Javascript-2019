console.log('------------------------------------');

const myGreeting = (name, city, age) => {
  return `Hello my name is ${name}, i am ${age} years old and i live in ${city}`;
};

const myPerson = ['Alice', 'Boston', 20];
console.log(myGreeting(...myPerson));

const anotherPerson = ['New York', 25];
console.log(myGreeting('Bozo', ...anotherPerson));

const a = [1, 2, 3];
const b = [4, 5];

let c = a.concat(b);
console.log(c);

c = a.concat(b).concat(6, 'abc', true);
console.log(c);

const d = [...a, ...b, 6, { a: 'x' }];
console.log(d);

const dateInfo = [2025, 5, 10];

const date = new Date(...dateInfo);

console.log(date);

console.log('------------------------------------');
console.log('Example 4  ---  Copy Array');
console.log('------------------------------------');

const myArray = ['a', 5, [], true];

const newArray = [...myArray];

newArray.push(10, false);

console.log(newArray);

console.log('------------------------------------');
console.log(`Example 5   ---   Copy Object (ES2018)`);
console.log('------------------------------------');

const myObject = { a: 10, b: 'c' };
console.log(myObject);

const copiedObject = { ...myObject };
copiedObject.a = 20;
console.log(copiedObject);

console.log('------------------------------------');
console.log(`Example 6   ---   Spread String`);
console.log('------------------------------------');

const myStr = 'Hello World';
const letters = [...myStr];
console.log(letters);

const oldStyledLetters = myStr.split(' ');
console.log(oldStyledLetters);

console.log('------------------------------------');
