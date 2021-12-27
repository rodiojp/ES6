console.log(`${'-'.repeat(30)} Array (Recreate the map function using For Loop)`);

const mapForLoop = (arr, func) => {
    const newArray = [];
    for (let ii = 0; ii < arr.length; ii++) {
        newArray.push(func(arr[ii]));
    }
    return newArray;
};

const employees = [
    {
        name: 'John', age: 35, jobTitle: 'developer', salary: 70000,
    },
    {
        name: 'Peter', age: 40, jobTitle: 'manager', salary: 85000,
    },
    {
        name: 'Jack', age: 38, jobTitle: 'developer', salary: 75000,
    },

];
console.log('Employees:');
console.log(employees);

// Testing if it works:
console.log('Employees Salary:');
const employeesSalary = mapForLoop(employees, (element) => element.salary);
// Should be: [ 70000, 85000, 75000 ]
console.log(employeesSalary);

// Should be: [ 2, 4, 6 ]
console.log(mapForLoop([1, 2, 3], (x) => x * 2));

// Should be: [ -1, -2, -3, 4 ]
console.log(mapForLoop([1, 2, 3, -4], (x) => -x));

// Should be: [ 'A', 'B', 'C', 'D' ]
console.log(mapForLoop(['a', 'b', 'c', 'd'], (x) => x.toUpperCase(x)));

console.log(`${'-'.repeat(30)} Array (Recreate the map function using Reduce())`);

const mapReduce = (arr, func) => arr.reduce((accumulator, element) => [...accumulator, func(element)], []);

// Testing if it works:
console.log('Employees Salary:');
// Should be: [ 70000, 85000, 75000 ]
console.log(mapReduce(employees, (element) => element.salary));

// Should be: [ 2, 4, 6 ]
console.log(mapReduce([1, 2, 3], (x) => x * 2));

// Should be: [ -1, -2, -3, 4 ]
console.log(mapReduce([1, 2, 3, -4], (x) => -x));

// Should be: [ 'A', 'B', 'C', 'D' ]
console.log(mapReduce(['a', 'b', 'c', 'd'], (x) => x.toUpperCase(x)));

console.log(`${'-'.repeat(30)} Array (Recreate the map function using forEach() Loop)`);

const mapForEachLoop = (arr, func) => {
    const newArray = [];
    arr.forEach((element, index) => newArray.push(func(element)));
    return newArray;
};

// Testing if it works:
console.log('Employees Salary:');
// Should be: [ 70000, 85000, 75000 ]
console.log(mapForEachLoop(employees, (element) => element.salary));

// Should be: [ 2, 4, 6 ]
console.log(mapForEachLoop([1, 2, 3], (x) => x * 2));

// Should be: [ -1, -2, -3, 4 ]
console.log(mapForEachLoop([1, 2, 3, -4], (x) => -x));

// Should be: [ 'A', 'B', 'C', 'D' ]
console.log(mapForEachLoop(['a', 'b', 'c', 'd'], (x) => x.toUpperCase(x)));