// Javascript Objects and their methods

/*
An object in Javascript has some data in the form of key and value pairs and they belongs to
the reference data types
Objects in Javascript are Passed by reference
*/

const user = {
  name: "John Doe",
  age: 30,
  job: "Software Developer",
  company: "Google",
  roll: "Full Stack Software Developer",
};

console.log(user);

// We can access the object values from their keys by two ways

const name = user.name;
const age = user.age;
const job = user.job;

console.log(name, age, job);

const company = user["company"];

const roll = user["roll"];

console.log(company, roll);

// also we can add new values to the object by using the dot notation and by placing the key inside the [];

user.character = 'very good';

console.log(user);

user['personality'] = 'Handsome';

console.log(user);

// We can get the length of the object by using:

const length = Object.keys(user).length;

console.log(length);

// also we can get the keys of the object by using:

const keys = Object.keys(user);

console.log(keys);

// we can also get the values from the object by using:

const values = Object.values(user);

console.log(values);

// console.log(Object.entries(user));

// We can get every key and value pair on seperate seperate arrays from the object

const entries = Object.entries(user);

console.log(entries);

// Most of the times we use const declarations when creating an object

// We can also nest objects inside an object

const company1 = {
    name: 'apple',
    workCulture: 'Good',
    salary: 'Too Good',
    amenities: function(str){
        return `very good`
    },
    workLife:(str)=>{
        return `Very Good Work Life Balance`
    },
    employee: {
        name: 'John Doe',
        age: 30,
        job: 'Software Developer',
        roll: 'Full Stack Developer',
        experience: 4
    }
}

/* So in this way we can write our functions of Normal and arrow functions
inside the object and also we can nest other objects inside this object
*/

console.log(company1);

console.log(company1.employee);

console.log(company1.amenities('Super'));

console.log(company1.workLife('Very Good'));

// ES6 introduced object destructuring by using this we can directly store our object values into the variables

const company2 = {
    companyName: 'Hutech Solutions',
    ceo: 'Pravat Ranjan',
    noOfEmployees: 100,
    totalBranches: 3,
    rating: 5,
    overall: 'good'
}

const {companyName, ceo, noOfEmployees, totalBranches, rating, overall} = company2;

console.log(companyName, ceo, noOfEmployees, totalBranches, rating, overall);

// Scope of this:

/*
actually when it comes to this keyword inside the object behaves differently according to the function
for normal function the scope of this object
and for arrow function the scope of this is window object / global object
*/
