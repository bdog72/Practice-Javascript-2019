console.log('------------------------------------');

//
const myObject = {
  a: 10,
  b: null
};

function myFunction(a, b) {
  console.log(a + b);
  console.log(this);
}

const customFunction = myFunction.bind(myObject, 10, 3);
customFunction();

const customFunction3 = myFunction.bind(myObject, 20);
customFunction3(10);

//
console.log('------------------');
//

function myFunction1(parameterA) {
  parameterA = 20;
  return parameterA;
}

const a = 10;
console.log(myFunction1(a));
console.log(a);

//
console.log('-------------------');
//

const myArray = [1, 2, 3];
console.log(myArray);

function myFunction2(arr) {
  arr.push(4);
  console.log(arr);
  return arr;
}

myFunction2(myArray);
console.log(myArray);

//
console.log('-------------------');
//

(function addCustomGlobalMethod(globalObject) {
  globalObject.customMethod = function() {
    console.log('Greeting from custom method');
  };
})(this);

// addCustomGlobalMethod(this);

this.customMethod();

customMethod();

//

console.log('------------------------------------');
