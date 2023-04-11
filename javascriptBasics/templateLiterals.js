// We can define Strings in 3 ways

const name = "Roshan";

const job = "Software developer";

const company = `Hutech Solutions`;

//Using template literals we can write multi line strings

const data = `hello from apple
welcome to the event
very glad to meet you all`;


console.log(name);

console.log(job);

console.log(company);

console.log(data);

//By using string interpolation we can place variables and some conditions inside a string

const username = 'John Doe';

const password = 1234;

console.log(`your Netflix credentials are ${username} and ${password}`);

const character = 'good';

console.log(`${name} is a ${character === 'good' ? 'very good' : 'bad'} boy`);
//String methods

console.log(username.toLowerCase());

console.log(username.toUpperCase());

console.log(username.length);

console.log(username.slice(0,4));

console.log(username.replace('Doe','peter'));

const data1 = `My name is John Doe and i'm a software engineer at google,
my hobbies are listening music and writing efficient code in google`;

console.log(data1.replaceAll('google','Microsoft'));

console.log(data1.split('and'));

const data2 = '    hello from apple    ';

console.log(data2.trim());

console.log(username.charAt(5));

console.log(username.charCodeAt(4));

console.log(username.concat(' is a nice person'));

console.log(username.endsWith('Doe'));

console.log(username.includes('Doe'));

console.log(data1.match('google'));

console.log(data1.lastIndexOf('google'));
