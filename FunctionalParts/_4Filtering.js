console.log(`${'-'.repeat(30)} Array Filtering`);

const numbers = [1, 2, 3, 4, 5];
console.log('Numbers :');
console.log(numbers);

const isEven = (x) => x % 2 === 0;

const filterEvenNumbers = numbers.filter(isEven);
console.log('Filtered Event Numbers:');
console.log(filterEvenNumbers);
