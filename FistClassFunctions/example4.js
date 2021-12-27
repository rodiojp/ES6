const name = 'Bob';
// Pass a string argument to a function. The Function returns string result 
const sayHello = name => 'Hello, ' + name +'!' 
console.log(sayHello('Bob'));
// Return: 'Hello, Bob!'

// giveMeAFunction function returns a function
const giveMeAFunction = () => {
    // Return an anonymous function
    return () => sayHello('Anonymous function');
};

// Get anonymous function
const func = giveMeAFunction();
console.log(func());
// Return: 'Hello, Anonymous function!'