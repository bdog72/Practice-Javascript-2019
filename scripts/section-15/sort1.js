console.log('------------------------------------');
console.log('sort1');

const myNumbers = [10, 5, 7, 12, 20, 13];
function compareNumbers(a, b) {
  return a - b;
}

console.log(myNumbers.sort((a, b) => a - b));

const result = myNumbers.sort(compareNumbers);
console.log(result);

console.log('------------------------------------');
