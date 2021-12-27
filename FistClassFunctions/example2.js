const double = x => x * 2;
const substructOne = x => (x - 1);
const triple = x => x * 3;
const add = (x, n) => x + n;

const myNumber = 42;

const doubled = double(myNumber);
console.log(doubled)

const minusOne = add(myNumber, -1);
console.log(minusOne)

const functionsArray = [
    double,
    substructOne,
    triple,
    Math.sqrt
];

var number = 42;

functionsArray.forEach(func => number = func(number))
console.log(number)



