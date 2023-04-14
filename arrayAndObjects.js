// array and objects

const names = ['John Doe', 'peter', 'steve jobs', 'Bill gates', 'johny depp'];

console.log(names);

const firstElement = names[0];

console.log(firstElement);

const lastElement = names[names.length - 1];

console.log(lastElement);

names[0] = 'Ratan Tata';

console.log(names);

const length = names.length;

console.log(length);

const str = names.toString();

console.log(str);

console.log(typeof str);

console.log(typeof names);

names.push('Angelina Jolie');

console.log(names);

names.pop();

console.log(names);

const arr = names.map(name=>name + "$");

console.log(arr);

const nums = [10, 20, 40, 1200, 50, 6, 200, 500];

const num = nums.find(ele=>ele === 6);

console.log(`Search value ${num}`);

const names1 = ['Microsoft', 'apple', 'Twitter', 'Meta', 'amazon', 'Netflix', 'Google', 'meesho'];

const filteredItems = names1.filter(company=>company[0] === 'M');

console.log(filteredItems);

const check = names1.some(company => company.length === 6);

console.log(check);
