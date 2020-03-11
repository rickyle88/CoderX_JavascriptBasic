// Example 1
var numbers = [1, 2, 3, 4];

var sum = numbers.reduce(function (accumulator, value) {
    console.log(accumulator, value);
    return accumulator + value;
})

// 1 2

// 3 3

// 6 4

// 10

console.log(sum);

// Example 2

var sum1 = numbers.reduce(function (accumulator, value) {
    console.log(accumulator, value);
    return accumulator + value;
}, 0);

// 0 1

// 1 2

// 3 3

// 6 4

// 10

console.log(sum1);

// Example 3
var products = [
    { name: 'A', quantity: 2, unitPrice: 10 },
    { name: 'B', quantity: 3, unitPrice: 20 },
    { name: 'C', quantity: 4, unitPrice: 30 },
]

// Calculate total price => number
var total = products.reduce(function (accumulator, value) {
    return accumulator + value.quantity * value.unitPrice;
}, 0);

// Loop 1: accumulator = 0, value = product[0]
// 0 + 2*10 = 20
// Loop 2: accumulator = 20, value = product[1]
// 20 + 3*20 = 80
// Loop 3: accumulator = 80, value = product[2]
// 80 + 4*30 = 200

console.log(total);

// Example 4:
var items = ['Tom', 'Bill', 'Kim'];
// 1.Use reduce to make this result
// '<Tom><Bil><Kim>'
var r1 = items.reduce(function (a, v) {
    return a + '<' + v + '>';
}, '');


// Loop 1: a = '', v = 'Tom'
// '' + '<' + 'Tom' + '>' => '<Tom>'
// Loop 2: a = '<Tom'> , v = 'Bill'


console.log(r1);

// 2. User map and join
var r2 = items.map(function(item){
    return '<' + item + '>';
}).reduce(function(a, v){
    return a + v;
});

console.log(r2);