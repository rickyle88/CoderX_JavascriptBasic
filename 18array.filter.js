
// function in filter must return true/false
var numbers = [1, 2, 3, 4];
var evenNumbers = numbers.filter(function(x){
    return x % 2 === 0;
})

function evenOnly(arr){
    return arr.filter(function(x){
        return x % 2 === 0;
    })
}

console.log(evenNumbers);
console.log(evenOnly(numbers));