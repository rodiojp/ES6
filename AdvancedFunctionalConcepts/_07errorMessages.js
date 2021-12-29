console.log(`${'-'.repeat(30)} Anagrams`);

const errorStringSpecialChars = (key, value) => {
    const specialChars = ['!', '@', '#'];
    const result = 
        specialChars.some(s => value.includes(s)) ? '' : `${key} Must have at least one of ${specialChars} special characters`;
    return result;
};
const errorStringMinLength = (minLen) => (key, value) => value.length >= minLen ? '' : `${key} Must be at least ${minLen} characters long`;
const errorStringMinLength2 = errorStringMinLength(2);
const errorStringLength = (len) => (key, value) => value.length === len ? '' : `${key} Must be ${len} characters long`;
const errorStringLength2 = errorStringLength(2);

const currentInputValues = {
    login: '0#', // Must be at least 2 characters long
    firstName: '1',// Must be at least 2 characters long
    lastName: '2',// Must be at least 2 characters long
    zipCode: '3',// Must be 5 characters long
    state: '4',// Must be 2 characters long
};

const inputCriteria = {
    login: [errorStringMinLength2, errorStringSpecialChars],
    firstName: [errorStringMinLength2],
    lastName: [errorStringMinLength2],
    zipCode: [errorStringLength2],
    state: [errorStringLength2],
};

const getErrorMessages = (inputs, criteria) => {
    const errors = Object.keys(inputs).reduce(
        (accumulator, element) =>
        ({
            ...accumulator, [element]: criteria[element].reduce(
                (errors, func) => [...errors, func.call(null, element, inputs[element])], [])
        }), {});
    return errors;
};

console.log(getErrorMessages(currentInputValues, inputCriteria));


