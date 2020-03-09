// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
    // your code here
    return arr.filter(function (x) {
        return x >= 5;
    })
}

let arr = [3,4,5,6,7];
console.log(fiveAndGreaterOnly(arr));

// [5, 6, 7]