const person = {
  name: 'John',
  age: 40,
  hairColor: 'brown',
  eyeColor: 'blue',
};
console.log('Person:');
console.log(person);

const careerData = {
  title: 'developer',
  company: 'ABC Software',
};
console.log('Career Data:');
console.log(careerData);

const personWithCareerData = {
  ...person,
  ...careerData,
};
console.log('Person with Career Data:');
console.log(personWithCareerData);

const personNameWithCareerData = {
  name: person.name,
  ...careerData,
};
console.log('Person Name with Career Data:');
console.log(personNameWithCareerData);

console.log('-'.repeat(60));

const careerDataWithName = {
  name: 'Ivan',
  title: 'developer',
  company: 'ABC Software',
};
console.log('Career Data with Name:');
console.log(careerDataWithName);

const personWithcareerDataWithName = {
  ...person,
  ...careerDataWithName,
};
console.log('Person with Career Data with Name:');
console.log(personWithcareerDataWithName);

console.log('-'.repeat(60));

console.log(person);

const updateName = {
  name: 'John Doe',
};
console.log('Update Name:');
console.log(updateName);

const personUpdateName = {
  ...person,
  ...updateName,
};
console.log('Person Update Name:');
console.log(personUpdateName);

console.log(`Arrays ${'-'.repeat(60)}`);

const numbers = [1, 2, 3, 4, 5];
console.log('Numbers :');
console.log(numbers);

const newNumbers = [
  ...numbers,
  6, 7, 8, 9, 0,
];
console.log('New Numbers:');
console.log(newNumbers);
