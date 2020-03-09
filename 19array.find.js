var numbers = [1,2,3,4];


let firstEvenNumber = numbers.find(function(x){
    console.log(x);
    return x % 2 === 0;
})

function findFirstEvenNumber(array) {
    // your code here
    return array.find(function(x){
        return x % 2 === 0;
    })
  }

console.log(firstEvenNumber);
console.log(findFirstEvenNumber([]));

// 2