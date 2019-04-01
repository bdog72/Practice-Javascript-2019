// console.log('This is global execution context');

// const a = 10;
// console.log(a);

// function myFunction(a, b) {
//   console.log('Function execution context');

//   return a + b;
// }

// console.log(myFunction(15, 10));
// console.log(myFunction(3, 7));

// console.log('Global context -- root level');

// console.log(this);
// console.log(this === window);

// this.console.log('Method of this');

// 'use strict';

// function myFunction() {
//   console.log(this);
// }

// myFunction();

const myObject = {
  name: 'Bozo',
  age: 46,
  greeting: function(a, b) {
    // console.log('Hey Bozo Beak');
    console.log(this);
    console.log(`Name of the person is ${this.name}`);

    // return a + b;
  }
};

myObject.greeting();
// greeting();
// let result = myObject.greeting(2, 3);
// console.log(result);
