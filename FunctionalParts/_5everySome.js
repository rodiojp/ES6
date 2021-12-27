console.log(`${'-'.repeat(30)} Array Every`);

const numbers = [1, 3, 5];
console.log('Numbers :');
console.log(numbers);

const isOdd = (x) => x % 2 === 1;

const allNumbersAreOdd = numbers.every(isOdd);
console.log(`Every Number in the Array is Odd: ${allNumbersAreOdd}`);

console.log(`${'-'.repeat(30)}`);

const words = [
  'Hello',
  'World',
  'Moscow',
];
console.log('Words :');
console.log(words);

const isLongerThan = (x) => (s) => s.length > x;
const minLength = 5;
const someWords = words.some(isLongerThan(minLength));

console.log(`Some Words in the Arrray are Longer than ${minLength} Characters: ${someWords}`);
