//                            (      data types in Javascript      )

//                              { 1.Primitive data types }

// Number

const age = 24;

const mobileNumber = 833_307_346_7;

const pocketMoney = 100;

console.log(`My age is ${age} and my mobile number is ${mobileNumber}`);

console.log(`i've pocket money of ${pocketMoney}`);

//String

const name = "Roshan Shaik";

const job = "Software developer";

const company = "Hutech Solutions";

console.log(`My name is ${name} and i'm working as a ${job} in ${company}`);

//Boolean

const check = true;

const result = age > 20 ? check : false;

console.log(result);

//undefined

let person;

var character;

/* When we declare a variable and didn't initialise with any value to it 
then by default javascript assigns undefined to it.
*/

console.log(person);

console.log(character);

//null

/*
null is a primitive data type in javascript,we can assign any variable to
null.actually null means nothing.
*/

const play = null;

const food = null;

console.log(play);

console.log(food);

//                         { 2.Reference data Types }

// arrays

const names = ["Roshan", "Sourav", "vibin", "aditya", "kalyan", "rahul"];

/* array is a data structure using this we can store n-number of values of any type 
like (string,number,boolean,etc.)
*/

const nums = [10, 20, 30, 40];

console.log(names);

console.log(nums);

console.log(names[0]);

console.log(nums[nums.length - 1]);

names[2] = "yash";

console.log(names);

nums[nums.length - 1] = 100;

console.log(nums);

console.log(names.length);

console.log(nums.length);

// objects

/*
actually an object is a data structure using this we can store our data
as a key value pairs.
*/

const person1 = {
  name: "roshan",
  age: 24,
  job: "Software developer",
  company: "Hutech Solutions",
};

console.log(person1);

person1.name = "John Doe";
person1.character = "good";

console.log(person1);

/*
We can also use json objects to store our data
basically json objects are used to transform the req bodies
the key and value both should be in double quotes
*/

const user = {
  name: "Jack sparrow",
  age: 30,
  profession: "actor",
};

console.log(user);

user.age = 40;

user.personality = "handsome";

console.log(user);

console.log(JSON.stringify(person1));

console.log(JSON.stringify(user));
