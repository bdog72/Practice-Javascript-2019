console.log('------------------------------------');

//

function mult(a, b, c) {
  const result = a * b * c;
  console.log(result);
}
mult(1, 2, 3);

console.log('------------');

function concatenateStrings(str1, str2) {
  return `${str1} ${str2}`;
}

const str3 = concatenateStrings('Hello', 'Bozo');
console.log(str3);

console.log('-----------------');

function outerFunction(a, b) {
  function innerFunction(c) {
    return c * c;
  }
  const sum = a + b;
  const result = innerFunction(sum);
  console.log(result);
}
outerFunction(2, 2);

outerFunction(7, 3);

//

console.log('------------------------------------');
