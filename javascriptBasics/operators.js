//operators in Javascript

const num1 = 10;

const num2 = 20;

const num3 = 35;

const sum = num1 + num2 + num3;

console.log(sum);

const subtract = num3 - num1;

console.log(subtract);

const division = num3 / num1;

console.log(division);

const multi = num1 * num2 * num3;

console.log(multi);

const floorDivision = Math.floor(num3 / num1);

console.log(floorDivision);

const remainder = num3 % num2;

console.log(remainder);

// increment

let x = 100;

// pre-increment
let y = x++;
console.log(`The value of x is ${x} and y is ${y}`);

// post increment
let p = 200;
let q = ++p;
console.log(`The value of p is ${p} and q is ${q}`);

// decrement

x = 500;
// pre-increment
y = x--;
console.log(`The value of x is ${x} and y is ${y}`);

// post increment
p = 1000;
q = p;
console.log(`The value of p is ${p} and q is ${q}`);

let value = 1000;

let number = 10;

number += value;

console.log(number);

number -= value;

console.log(number);

// assignment operator

const name = "John Doe";

// exponentiation

let val = 10;

console.log(val ** 2);

// comparison operators

let check = val > 10;

console.log(check);

check = val < 10;

console.log(check);

check = val !== 10;

console.log(check);

check = val == "10";

console.log(check);

check = val === "10";
console.log(check);

check = val !== 10;
console.log(check);

console.log("A" > "a");

console.log("20" > "30");

// string concatination

const firstName = "Roshan";
const lastName = " Shaik";

let middleName = "";
middleName += " babu";

console.log(firstName + middleName + lastName);

console.log(firstName + " " + lastName);

console.log("5" + 5);

console.log("S" + 5);

// Logical operators

const n1 = 10;
const n2 = 20;

let result = n1 && n2;

console.log(result);

result = n1 === 10 && n2 === 20;

console.log(result);

result = n1 === 10 || n2 === 200;

console.log(result);

result = !n1;

console.log(result);

console.log(typeof "roshan");
console.log(typeof result);
console.log(typeof n1);

const nums = [100, 200, 300, 400];

console.log(typeof nums);

console.log(Array.isArray(nums));

console.log(nums instanceof Array);
console.log(nums.toString());

// Bitwise operators

let a = 10;
let b = 20;

console.log(a & b);
console.log(a | b);
console.log(a >> b);
console.log(a << b);
console.log(~a);
console.log(a ^ b);

