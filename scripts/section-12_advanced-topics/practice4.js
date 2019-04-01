console.log('------------------------------------');

//

function waitingFn(timeInMs) {
  const futureTime = Date.now() + timeInMs;
  while (futureTime > Date.now()) {}
}

setTimeout(() => console.log('Callback is executed'), 2000);

waitingFn(5000);

console.log('Function call has just ended');

//

console.log('------------------------------------');
