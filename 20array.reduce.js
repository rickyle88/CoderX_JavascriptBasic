var numbers = [1, 2, 3, 4];
let sum = numbers.reduce(function (accumulator, item) {
    console.log(accumulator,item);
    return accumulator + item;
});

console.log(sum);

// cart
var orders = [
    {name: 'A', quantity: 2, unitPrice: 100},
    {name: 'B', quantity: 1, unitPrice: 400},
    {name: 'C', quantity: 5, unitPrice: 15}
]

// Method 1: map and reduce
let s = orders.map(function(obj){
    return obj.quantity * obj.unitPrice;
}).reduce(function(accumulator,item){
    return accumulator+item;
})

console.log('Total price: ' + s);

// Use reduce to calculate total price
let sumByUsingReduce = orders.reduce(function(accumulator, item){
    return accumulator + item.quantity * item.unitPrice;
},0);

console.log(sumByUsingReduce);
