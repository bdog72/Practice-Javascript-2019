console.log('------------------------------------');

//

// setTimeout(function() {
//   setInterval(function() {});
// });

let i = 1;
const myInterval = setInterval(function() {
  console.log('Here is message number ' + i);
  i = i + 1;
}, 2000);

setTimeout(function() {
  clearInterval(myInterval);
}, 10000);

//

console.log('------------------------------------');
