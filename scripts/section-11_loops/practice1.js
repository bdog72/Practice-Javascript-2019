console.log('------------------------------------');

//

for (let i = 0; i < 5; i++) {
  console.log(i);
}

const myArray = ['first', 'second', 'third'];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

let a = 0;

// const bozo = 'Hey Bozo';
while (a < 5) {
  // console.log(bozo);
  console.log(a);
  a++;
}
//
//
console.log('------------------');
//
//
const myObject = {
  a: 'Bozo',
  b: true,
  c: 72
};

for (let key in myObject) {
  console.log(key, myObject[key]);
}

//
//
console.log('------------------');
//
//

const myArray1 = ['Bozo', 25, true, { a: 10 }];

for (let key in myArray1) {
  console.log(key, myArray1[key]);
}

//
//
console.log('------------------');
//
//

const myArray2 = ['Bozo', 25, true, { a: 10 }];

for (const iterator of myArray2) {
  console.log(iterator);
}

console.log('------------------------------------');
