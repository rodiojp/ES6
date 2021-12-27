console.log(`${'-'.repeat(30)} Array.Sort()`);

const numbers = [4, 3, 2, 5, 0, 1];
console.log('Numbers :');
console.log(numbers);

const sorted = numbers.slice().sort();
console.log('Array.Slice().Sort():');
console.log(sorted);

console.log(`${'-'.repeat(30)} Array.Sort(descending)`);

const descending = (a, b) => {
    if (a > b) return -1
    else if (a < b) return 1;
    return 0
};

const sorteDesc = numbers.slice().sort(descending);
console.log('Array.Slice().Sort(descending):');
console.log(sorteDesc);
