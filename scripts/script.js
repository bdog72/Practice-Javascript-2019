console.log('------------------------------------');

// // EXAMPLE 1
// const num = {
//   value: 100,
//   // info: () => {
//   //   console.log(this);
//   //   return this.value;
//   // }
//   info: function() {
//     console.log(this);
//     return this.value;
//   }
// };

function GroceryItem(title, kind) {
  this.title = title;
  this.kind = kind;
}

const apple = new GroceryItem('Apple', 'fruit');
console.log(apple);

console.log('------------------------------------');
