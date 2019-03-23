console.log('------------------------------------');

const name = 'Molly';
const age = 6;

const checkAge = (arrayOfStrings, name, age) => {
  console.log(arrayOfStrings, name, age);
  return age >= 18 ? `${name} is adult` : `${name} need to grow up bozo`;
};

console.log(checkAge`${name} is ${age} years old 😀`);

console.log('------------------------------------');
