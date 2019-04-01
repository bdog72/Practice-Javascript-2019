console.log('------------------------------------');
// console.log('p2');

// const myObject = {
//   a: 10,
//   b: null
// };

// function myFunction(a, b) {
//   console.log(a + b);
//   console.log(this);
// }
// // myFunction();

// myFunction.call(myObject, 5, 10);

// const person1 = {
//   city: 'New York',
//   name: 'Bozo',
//   info: function() {
//     console.log(`${this.name} lives in ${this.city}`);
//   }
// };

// const person2 = {
//   city: 'Bozo City',
//   name: 'Molly'
// };

// person1.info();
// person1.info.call(person2);

const myObject = {
  a: 10,
  b: null
};

function myFunction(a, b, c) {
  let sum = a + b + c;

  // console.log(a + b);
  // console.log(this);

  for (let key in this) {
    if (typeof this[key] === 'number') {
      sum += this[key];
    }
  }
  console.log(sum);
}
// myFunction();

myFunction.apply(myObject, [10, 3, 5]);

console.log('------------------------------------');
