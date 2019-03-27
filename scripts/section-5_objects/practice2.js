console.log('------------------------------------');
//

let myObject = {
  a: true,
  b: null,
  c: 25
};
console.log(myObject['a']);
console.log(myObject['b']);

const propertyName = 'c';
console.log(myObject[propertyName]);

myObject[`newPropertyName`] = 'new property name';
console.log(myObject);

//
console.log('------------------------------------');
