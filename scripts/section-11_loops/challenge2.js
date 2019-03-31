console.log('------------------------------------');

//
const myObject = {
  name: 'Bozo',
  age: 46,
  city: 'Bozo City'
};

Object.prototype.country = 'USA';

console.log(myObject);

for (let key in myObject) {
  if (myObject.hasOwnProperty(key)) {
    console.log(key, myObject[key]);
  }
}

function emptyArray(inputArray) {
  return inputArray.length > 0 ? 'Array is not empty' : 'Array is empty';
  // if (inputArray.length > 0) {
  //   return 'Array is not empty';
  // } else {
  //   return 'Array is empty';
  // }
}

console.log(emptyArray([1, 2]));
console.log(emptyArray([]));

//

console.log('------------------------------------');
