// JSON object
// 1. stringify - convert an object to a JSON string
// 2. parse - convert a JSON string to an object

var myDog = {name: 'Milu', age: 1, dead: false};
console.log('At first, we have ' + typeof myDog + myDog);
// object

// Convert object to JSON
var myDogString = JSON.stringify(myDog);
console.log('Use JSON.stringify we have JSON ' + typeof myDogString + myDogString);

// Convert JSON string to object
var myCatString = '{"name": "Tom", "age": 2, "dead": true}';
var myCat = JSON.parse(myCatString);
console.log('Use JSON.parse we have object ' + typeof myCat + myCat);
console.log(myCat.name);


