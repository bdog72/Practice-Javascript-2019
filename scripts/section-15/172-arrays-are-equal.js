const a = [1, 2, 3];
const b = [1, 2, 3];

console.log(a === b);

const arraysAreEqual = (arrayOne, arrayTwo) =>
  arrayOne.length === arrayTwo.length &&
  arrayOne.every((element, index) => element === arrayTwo[index]);

const c = [2, 1, 3];
const d = [1, 2, 3, 4];

console.log(arraysAreEqual(a, b));
console.log(arraysAreEqual(a, c));
console.log(arraysAreEqual(a, d));
