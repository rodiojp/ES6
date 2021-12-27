console.log(`${'-'.repeat(30)} Array.Reduce()`);

const numbers = [1, 2, 3, 4, 5];
console.log('Numbers :');
console.log(numbers);

const sum = (accumulator, element) => {
  console.log(`{accumulator: ${accumulator}, element: ${element}}`);
  return accumulator + element;
};

const sumOfElements = numbers.reduce(sum, 0);
console.log(`Array.Reduce(sum, start: 0): ${sumOfElements}`);
