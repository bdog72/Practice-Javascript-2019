console.log('------------------------------------');

// ********** Arrow Function **********

// const sumNumbers = (...nums) => {
//   console.log(nums);
//   return nums
//     .filter(num => typeof num === 'number')
//     .reduce((sum, num) => sum + num, 0);
// };

// console.log(sumNumbers('abc', 2, 3, 4, 5));

function sumNumbers(...nums) {
  console.log(nums);
  return nums
    .filter(num => typeof num === 'number')
    .reduce((sum, num) => sum + num, 0);
}

console.log(sumNumbers('abc', 2, 3, 4, 5));

console.log('------------------------------------');
