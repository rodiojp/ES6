// Closure
// Define a function that has a const number
const giveMeANumberFunction = () => {
    const number = 7;
    // Return an anonymous function and that function will return a number defined in the parent function
    return () => `a number is: ${number}`;
};

// Get a number from function 
const numberFunction = giveMeANumberFunction();
console.log(typeof numberFunction)
// Prints: function

const result = numberFunction()
console.log(typeof result)
// Prints: string
console.log(result);
// Prints: a number is: 7


