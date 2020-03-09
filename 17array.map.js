// callback
// push, pop, unshift, shift

// array.map => transform 

var numbers = [1,2,3,4];

var squareNumbers = numbers.map(function(x){
    return x*x;
})

console.log(squareNumbers);

var rectangles = [
    {width: 10, height: 5},
    {width: 10, height: 20},
    {width: 4, height: 16}
];

// Transform to new array that has 
var rectanglesArea = rectangles.map(function(obj){
    return obj.width * obj.height;
})

console.log(rectanglesArea);