// Array and it's methods

// syntax for creating an array

const nums = [10, 20, 30, 40];

console.log(nums);

// accessing arrays elements by their indexes

const firstEle = nums[0];
const lastEle = nums[nums.length - 1];

console.log(firstEle,lastEle);

// changing/updating elements inside the array

nums[0] = 100;
nums[nums.length - 1];

console.log(nums);

// an array can be of any type like string,number,boolean,etc.

const names = ['apple','orange','mango'];

const check = [true,false];

console.log(names);

console.log(check);

// array methods

// for finding the length of an array

console.log(names.length);

console.log(nums.length);

// change array to a string

const str = names.toString();
console.log(str);

// array operations (push,pop)
names.push('banana');
names.push('grapes');

nums.pop();

console.log(names);

console.log(nums);

// we can remove the first element of an array
names.shift();
console.log(names);

// we can add the first element of an array

names.unshift('pine apple');
console.log(names);

// merge two arrays

const boys = ['ram','rahim','ravi'];

const girls = ['priya','preeti','pavani'];

const merge = boys.concat(girls);

console.log(merge);