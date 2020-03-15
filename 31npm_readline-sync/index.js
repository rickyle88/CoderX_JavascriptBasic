// npm - node package manager
// https://www.npmjs.com/

// https://www.npmjs.com/package/readline-sync

var readlineSync = require('readline-sync');

// Wait for user's response.
// Example
var languages = [];

var language = readlineSync.question('Which is your mother language? ');

languages.push(language);

console.log(languages);

// Example
var pet = {};
var name = readlineSync.question('Your pet name: ');
var gender = readlineSync.question('Pet gender (Male/Female): ');
var weight = readlineSync.question('Weight: ');

pet.name = name;
pet.gender = gender;
pet.weight = parseInt(weight);

console.log(pet);


