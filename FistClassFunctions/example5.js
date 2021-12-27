// Returning functions
// Create a Multiplier Factory that ruturn a function
const createMultiplierFactory = y => x => y * x;
// Return a double function like this:
// const double = x => x * 2;
const double = createMultiplierFactory(2);
console.log(typeof double)
//Prints: function

//const triple = x => x * 3;
const triple = createMultiplierFactory(3);
//const quadruple = x => x * 4;
const quadruple = createMultiplierFactory(4);

console.log('double(3) = ' + double(3));
// double(3) = 6
console.log('triple(3) = ' + triple(3));
// triple(3) = 9
console.log('quadruple(3) = ' + quadruple(3));
// quadruple(3) = 12

