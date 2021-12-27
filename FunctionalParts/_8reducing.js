console.log(`${'-'.repeat(30)} Array.Reduce(Sum, 0)`);

const numbers = [1, 2, 3, 4, 5];
console.log('Numbers :');
console.log(numbers);

const sum = (accumulator, element) => {
    const result = accumulator + element;
    console.log(`{accumulator: ${accumulator}, element: ${element}, result: ${result}}`);
    return result;
};

const sumOfElements = numbers.reduce(sum, 0);
console.log(`Array.Reduce(sum, start: 0): ${sumOfElements}`);

console.log(`${'-'.repeat(30)} Array.Reduce(Product, 1)`);

const product = (accumulator, element) => {
    const result = accumulator * element;
    console.log(`{accumulator: ${accumulator}, element: ${element}, result: ${result}}`);
    return result;
};

const productOfElements = numbers.reduce(product, 1);
console.log(`Array.Reduce(sum, start: 1): ${productOfElements}`);
