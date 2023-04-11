// variables

/*
var is a old way of declaring variables and it's scope is limited to functions
suppose if we declare a variables outside of the functions then it can be treated as global variables
*/

var name = 'Roshan';

var age = 24;

console.log(name,age);

/*
variables declared with let and const are having block scope
let and const are introduced in ES6 and almost all browsers support these declarations
const is used for denoting constants
*/

let job = 'Software developer';

console.log(job);

job = 'movie director';

console.log(job);

const money = 100;

console.log(money);

//if we change the money to some other value we'll end up in errors because it's a constant


//comments

// Single line comments

//comments are for better code readability and javascript interpreter simply ignores it while executing the code

// const person = 'John Doe';

// Multi line comments

/*
const user = 'peter';
const age = 30;
const age = 'Software developer';
*/