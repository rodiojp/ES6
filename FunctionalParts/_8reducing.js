console.log(`${'-'.repeat(30)} Array.Reduce()`);

const numbers = [0, 1, 2, 3, 4, 5];
console.log('Numbers :');
console.log(numbers);

const sum = (accumulator, element) => accumulator += element;

const sumOfElements = numbers.reduce(sum);
console.log(`Array.Reduce(sum): ${sumOfElements}`);
