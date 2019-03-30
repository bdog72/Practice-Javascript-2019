console.log('------------------------------------');

//
// const myObject = {
//   a: 'abc',
//   b: true,
//   c: null,
//   d: 150
// };

// for (let key in myObject) {
//   console.log(key);
//   console.log(myObject[key]);
// }

// const myArray = [true, {}, {}, 10];

// Array.prototype.bozoProp = 'Global array property';

// for (let key in myArray) {
//   console.log(key, myArray[key]);
// }

const persons = [
  {
    name: 'Mike',
    age: 25
  },
  {
    name: 'Bozo',
    age: 46
  },
  {
    name: 'Molly',
    age: 6
  }
];
for (let person of persons) {
  console.log(`${person.name} is ${person.age} years old`);
}
//

console.log('------------------------------------');
