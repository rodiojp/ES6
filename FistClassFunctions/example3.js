// Passing functions as arguments

// Define functions
const subtruct = (x, n) => (x - n);
const add = (x, n) => x + n;

// Define a receptor function:
const combine2and3 = func => func(2, 3);

// Pass a function to receptor function as an argument
console.log('add(2, 3) = ' + combine2and3(add));
//add(2, 3) = 5

console.log('subtruct(2, 3) = ' + combine2and3(subtruct));
//subtruct(2, 3) = -1
console.log('max(2, 3) = ' + combine2and3(Math.max));
//max(2, 3) = 3