// functions in Javascript

function sum(firstNumber, secondNumber) {
  const result = firstNumber + secondNumber;
  return result;
}

const firstNumber = 10;
const secondNumber = 20;

console.log(sum(firstNumber, secondNumber));

function user(username, password) {
  return `The username is ${username} and his password is ${password}`;
}

const username = "roshan";
const password = 1234;

console.log(user(username, password));

// anonymous functions

(() => {
  console.log("hello from apple :)");
})();

const foo = function (arr) {
  const result = arr.map((ele) => ele * 2);
  return result;
};

const arr = [10, 20, 30, 40];
console.log(foo(arr));
