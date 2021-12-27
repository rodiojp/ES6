console.log(`${'-'.repeat(30)} Array.Slice()`);

const numbers = [0, 1, 2, 3, 4, 5];
console.log('Numbers :');
console.log(numbers);

const sliced = numbers.slice(3, 5);
console.log('Array.Slice(3,5):');
console.log(sliced);

const copiedReversed = numbers.slice().reverse();
console.log('Array.Slice().Reverse():');
console.log(copiedReversed);
