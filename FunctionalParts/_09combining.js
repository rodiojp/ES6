console.log(`${'-'.repeat(30)} Array (Combining functions)`);

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

const developers = employees.filter((employee) => employee.jobTitle === 'developer');
console.log('Developers:');
console.log(developers);

const sumOfDeveloperSalaries = developers.reduce((acc, element) => acc + element.salary, 0);
console.log(`Sum of Developer Salaries: ${sumOfDeveloperSalaries}`);
console.log(`Average of Developer Salaries: ${sumOfDeveloperSalaries / developers.length}`);
