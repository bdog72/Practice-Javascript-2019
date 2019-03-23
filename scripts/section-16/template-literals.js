console.log('------------------------------------');
console.log(`Template Literals`);

const myNumber = 10;
const myStr = 'Hello';
const myArr = [1, 2];
const myObj = { x: 10 };
const myBool = true;

const templateLiteral = `Number is ${myNumber} and string is ${myStr} and array is ${myArr} and object is ${myObj} and boolean is ${myBool}`;

console.log(templateLiteral);

let btn1 = 'Button 1';
let btn2 = 'Button 2';

const myButtons = `
  <div>
    <button>${btn1}</button>
    <button>${btn2}</button>
  </div>
`;

document.body.innerHTML = myButtons;

console.log(myButtons);

console.log('------------------------------------');
