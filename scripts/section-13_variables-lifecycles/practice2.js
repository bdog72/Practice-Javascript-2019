console.log('------------------------------------');

//

// const sum = (a, b) => {
//   return a + b;
// };

// console.log(sum(2, 2));

// function shortStr(str) {
//   const MAX_LENGTH = 10;
//   if (str.length > MAX_LENGTH) {
//     let newStr;
//     newStr = str.substring(0, MAX_LENGTH) + '...';
//     console.log(newStr);
//   } else {
//     console.log(str);
//   }
// }

// shortStr('Long string example');

var person = {
  name: 'Bob',
  age: 25
};

function updatePerson(person) {
  var updatedPerson = {};
  if (person.name) {
    updatedPerson.name = person.name;
  }
  updatedPerson.updatedAt = new Date();

  return updatedPerson;
}

console.log(updatePerson(person));

//

console.log('------------------------------------');
