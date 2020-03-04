var dog1 = {
    type: 'vn'
};

var dog2 = {
    type: 'sausage'
};

var dog3 = {
    name: 'Dan',
    type: 'husky'
};

var bunchOfDogs = [dog1, dog2, dog3];

console.log(bunchOfDogs);

// Print out husky
console.log(bunchOfDogs[2]);
console.log(bunchOfDogs[2].name);
console.log(bunchOfDogs[2]['name']);

// Remove 1 dog
// Add new dog
var dog4 = {
    type: 'shiba'
};

// Replace dog 4 with dog 1
bunchOfDogs[0] = dog4;

console.log(bunchOfDogs);

// Array of object
var contacts = [
    {name: 'A', phone: '7144321232'},
    {name: 'B', phone: '7144321232'}
]