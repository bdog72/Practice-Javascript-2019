console.log('------------------------------------');

// Object Literal
let myObject = {
  prop1: 10,
  prop2: 'String',
  prop3: function() {
    console.log(this.prop1, this.prop2);
  }
};
myObject.prop3();

// Enhanced Object Literals
const num = 10;
const str = 'Hello World Bozo';
const bool = true;

const myObject1 = {
  num,
  str,
  bool
};

const myCar = (make, year) => {
  return {
    make,
    year,
    info(price) {
      return `${this.make} costs ${this.price} for a ${year} model`;
    }
  };
};

const newCar = myCar('Tesla', 2019);
console.log(newCar.info(11111));

console.log('------------------------------------');
console.log();
console.log('------------------------------------');

const BG_COLOR_PROP = 'bgColor';
const btn = {
  title: 'Button 1',
  [BG_COLOR_PROP]: 'blue'
};

const list = {
  options: ['Option 1', 'Option 2'],
  [BG_COLOR_PROP]: 'grey'
};

console.log(btn);
console.log(list);

console.log('------------------------------------');
