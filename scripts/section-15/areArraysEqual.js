console.log('------------------------------------');

const a = [1, 2, 3];
const b = [1, 2, 3];

console.log(a === b); // false

/* Create a function "arraysAreEqual" with two parameters "arrayOne" and "arrayTwo". 

If two arrays are equal (have same quantity of the elements and all elements match e.g. arrayOne[0] === arrayTwo[0] etc.) return "true".

Otherwise return "false". */

const arraysAreEqual = (arrayOne, arrayTwo) =>
  arrayOne.length === arrayTwo.length &&
  arrayOne.every((element, index) => element === arrayTwo[index]);

const c = [2, 1, 3];
const d = [1, 2, 3, 4];

console.log(arraysAreEqual(a, b)); // true
console.log(arraysAreEqual(a, c)); // false
console.log(arraysAreEqual(a, d)); // false

//
//
//
console.log('------------------');

const transport = ['Bus', 'Car', 'Bicycle', 'Airplane'];

const elementFound = (inputArray, searchElement) =>
  inputArray.some(element => element === searchElement);

/* Create a function "elementFound" with two parameters "inputArray" and "searchElement".
If "searchElement" is found in the "inputArray" - return "true".
Otherwise return "false"

Hint: Use "some" helper method to solve this
*/

console.log(elementFound(transport, 'Bus')); // true
console.log(elementFound(transport, 'Phone')); // false
console.log(elementFound(transport, 'Airplane')); // true

console.log('------------------------------------');
