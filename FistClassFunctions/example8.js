// Higher-order functions
const devideWithCheckingArgument = (x, y) => {
    // Check if the second argument is not equal to 0
    if (y === 0) {
        console.log('Error: Deviding by zero');
        return null;
    }
    return x / y;
};

// 
const devide = (x, y) => {
    return x / y;
};

// 
const checkingSecondArgument = func => (...args) => {
    // Check if the second argument is not equal to 0
    if (args[1] === 0) {
        console.log('Error: Second argument cannot be zero');
        return null;
    }
    return func(...args);
};

const a = devideWithCheckingArgument(10, 0);
// Error: Deviding by zero
const b = checkingSecondArgument(devide);

b(10, 0);
// Error: Second argument cannot be zero

