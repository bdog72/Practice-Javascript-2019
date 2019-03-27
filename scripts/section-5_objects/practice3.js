console.log('------------------------------------');

//

const myObject = {
  a: 3,
  b: true
};

console.log(myObject.c);
console.log(myObject.absentProperty);

myObject.newProperty = undefined;
console.log(myObject);
console.log(myObject.newProperty);

//
//

let objectWithNestedObject = {
  nestedObject: {}
};

objectWithNestedObject.nestedObject.a = null;

console.log(objectWithNestedObject);

console.log(objectWithNestedObject);

//

console.log('------------------------------------');
