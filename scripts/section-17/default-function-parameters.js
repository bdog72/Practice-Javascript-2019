console.log('------------------------------------');

console.log('------------------------------------');
console.log(`Example 1`);
console.log('------------------------------------');

// const multiplier = (num, mult) => num * mult;

const multiplier = (num, mult = 2) => {
  console.log(num, mult);
  return num * mult;
};

console.log(multiplier(10, 3));

console.log(multiplier(5));

console.log(multiplier());

console.log('------------------------------------');
console.log(`Example 2`);
console.log('------------------------------------');

const groceryItem = (
  title,
  qty,
  item = {
    groceryItemTitle: title,
    groceryItemQty: qty
  }
) => {
  console.log(title, qty, item);
};

groceryItem('Banana', 5);

console.log('------------------------------------');
console.log(`Example 3`);
console.log('------------------------------------');

const warning = title => {
  console.log(
    title !== undefined
      ? `Title of the button is ${title}, But color is not set`
      : `Title and color are not set`
  );

  throw new Error(
    'btn function must be called with two arguments -- title and color'
  );
};

const btn = (title = warning(), color = warning(title)) => {
  console.log(title);
};

btn('Button1', 'grey');
btn('Button2');

console.log('------------------------------------');
