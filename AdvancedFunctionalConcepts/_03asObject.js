console.log(`${'-'.repeat(30)} Functions as objects`);

const add = (x, y, z) => x + y + z;

console.log(`Name of add Function:\n${add.name}`);
// Name of add Function:
// add

console.log(`Length of add Function (amount of arguments):\n${add.length}`);
// Length of add Function (amount of arguments):
// 3

console.log(`Stringify add Function:\n${add.toString()}`);
// Stringify add Function:
// function add(x, y, z) {
//    return x + y + z;
// }

console.log(`Call add Function:\n${add.call(null, 2, 3, 4)}`);
// Call add Function:
// 9

console.log(`Apply add Function:\n${add.apply(null, [2, 3, 4])}`);
// Apply add Function:
// 9

const args = [2, 3, 4];
console.log(`Array of Arguments for add Function in ES6:\n${add(...args)}`);
// Array of Arguments for add Function:
// 9

const add2 = add.bind(null, 2);
console.log(`Using add.bind() as Partial Function:\n${add2(3, 4)}`);
// Using add.bind() as Partial Function:
// 9
