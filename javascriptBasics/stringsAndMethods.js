// Strings and their methods

// split the characters of a string

function str(name) {
  const letters = name.split("");
  return letters;
}

// we can define strings in three ways
const data1 = 'Hutech Solutions';
console.log(data1);

const data2 = "Microsoft";
console.log(data2);

const age = 24;
const user = 'Roshan';

const detail = `The user name is ${user} and his age is ${age}`;

console.log(detail);

const name = "Roshan Shaik";
console.log(str(name));

//convert the given string to a lowercase

const lowerCase = name.toLowerCase();
console.log(lowerCase);

//convert the given string to a uppercase

const upperCase = name.toUpperCase();
console.log(upperCase);

// To get the length of a string

const str1 = "apple, banana, kiwi";
console.log(str1.length);

// since strings are unmutable so we can't modify the strings

const str2 = 'Microsoft';
str2[1] = 'a';

console.log(str2); //Microsoft not Macrosoft

// we can access the string characters by their indexes

const pos = str2[1];
const lastPos = str2[str2.length - 1];

console.log(pos);
console.log(lastPos);

// we can also use other method to get the location / index of a character

const loc = str2.charAt(5);
console.log(loc);

// we can get the character code of a string by

const code = str2.charCodeAt(5);
console.log(code);

// we can get only some part of a string
const slice = str2.slice(5);
console.log(slice);

// we can also use substring method to get the part of a string

const sub = str2.substring(0,5);
console.log(sub);

// we ue substr to get the part of a string but the difference is that the parameter takes the length
const sub1 = str2.substr(0,6);
console.log(sub1);

// we can replace a specific part of a string by using a replace method

const names = 'Steve Jobs, bill gates, Ratan Tata, Jeff bezos, waren buffet';
const result = names.replace('Jeff bezos','prabhas');

console.log(result);

// we can replace all occurences of a string by using replaceAll method

const countries = 'India,Russia,Germany,Japan,Singapore,Australia,singapore';
const output = countries.replaceAll(/singapore/g,'paris');

console.log(output);

// we can combine two strings using concat method

const firstname = 'Roshan';
const lastname = 'Shaik';
const fullname = firstname.concat(lastname);
console.log(fullname);

// we can remove white spaces from both sides of a string 
const data = '              hello from apple                   ';
const result1 = data.trim();
console.log(result1);

// we can add characters to the string before
const text = '5';
const padStart = text.padStart(4,'x');
console.log(padStart);

// we can add characters at the end of the string
const text1 = '10';
const padEnd = text1.padEnd(4,'x');
console.log(padEnd);

// we can split one string to several strings from commas
const text3 = 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.';
const result2 = text3.split(',');
console.log(result2);

// we can find whether a specific character or a word is inside the string or not
const str6 = 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.';
const result6 = str6.includes('common');
console.log(result6);

