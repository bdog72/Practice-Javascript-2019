const transport = ['Bus', 'Car', 'Bicycle', 'Airplane'];

//

const elementFound = (inputArray, searchElement) =>
  inputArray.some(element => element === searchElement);

console.log(elementFound(transport, 'Bus')); // true
console.log(elementFound(transport, 'Phone')); // false
console.log(elementFound(transport, 'Airplane')); // true
