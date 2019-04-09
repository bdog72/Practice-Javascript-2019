console.log('------------------------------------');
console.log('includes()');

//

// const myArray = [10, 'abc', true, undefined, null, [1, 2]];

// console.log(myArray.includes(true));
// console.log(myArray.includes(10));
// console.log(myArray.includes([1, 2]));

/////////////////////////////////////////////////////

const tags = [
  ['javascript', 'es6'],
  ['css', 'flexbox'],
  ['html', 'web-browser']
];

const fruits = [
  { title: 'Orange', quantity: 10 },
  { title: 'Banana', quantity: 5 },
  { title: 'Apple', quantity: 25 }
];

const primitiveTypesArray = [25, 'x', true, undefined, null];

const elementIsIncluded = (searchElement, array) => {
  if (typeof searchElement !== 'object') {
    return array.includes(searchElement);
  }

  if (typeof searchElement === 'object') {
    return array
      .map(element => JSON.stringify(element))
      .includes(JSON.stringify(searchElement));
  }
};

/* Create a function "elementIsIncluded" with two parameters "searchElement" and "array". 

If type of the "searchElement" is object or array, you need to convert each element in the "array" to the string and then apply "includes" method with argument that will be also converted to the string.

If type of the "searchElement" is not an object or array - simply apply "includes" method and return result
*/

console.log(elementIsIncluded(['css', 'flexbox'], tags)); // true

console.log(elementIsIncluded(['flexbox', 'css'], tags)); // false

console.log(elementIsIncluded({ title: 'Apple', quantity: 25 }, fruits)); // true

console.log(elementIsIncluded({ title: 'Banana' }, fruits)); // false

console.log(elementIsIncluded(25, primitiveTypesArray)); // true

//

console.log('------------------------------------');
