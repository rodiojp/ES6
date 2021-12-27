// Create a new Class 
const Person = ({ name, age, job }) => {
    // Implement private variables
    var _name = name;
    var _age = age;
    var _job = job;
    // Return a JSON object
    return {
        getName: () => _name,
        getAge: () => _age,
        getJob: () => _job,
        setJob: newJob => _job = newJob,
    };
};

// Get a new Instance of Person
const me = Person({ name: 'John', age: 25, job: 'Developer' });
console.log(typeof me)
// Prints: object
const result = me.getJob()
console.log(typeof result)
// Prints: string
console.log(result);
// Prints: John

me.setJob('Business Analyst')
console.log(me.getJob())
// Prints: 'Business Analyst'


