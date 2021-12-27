console.log(`${'-'.repeat(30)} Arrays Reverse (Mutation)`);

const numbers1 = [1, 2, 3, 4, 5];
console.log('Numbers :');
console.log(numbers1);

numbers1.reverse();
console.log('Numbers Reverse:');
console.log(numbers1);

console.log(`${'-'.repeat(30)} Arrays Mapping`);

const numbers = [1, 2, 3, 4, 5];
console.log('Numbers :');
console.log(numbers);

const double = (x) => x * 2;

const doubledNumbers = numbers.map(double);
console.log('Doubled Numbers:');
console.log(doubledNumbers);
console.log('Numbers :');
console.log(numbers);
