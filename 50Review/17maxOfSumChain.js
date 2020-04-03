/* Write a function return maximum possible sum of some of its k consecutive numbers 
(numbers that follow each other in order.) of a given array of positive integers
*/

// Sort in descending order
// Loop 
function maxOfSumChain(arr,k){
    arr.sort((a,b) => {return b-a;})
    let sum = 0;
    for(let i = 0; i < k; i++){
        sum+=arr[i];
    }
    return sum;
}

function maxOfSumChain2(arr,k){
    arr.sort((a,b) => {return a-b;})
    let sum = 0;
    let length = arr.length-1;
    for(let i = 0; i < k; i++){
        sum+=arr[length-i];
    }
    return sum;
}

console.log(maxOfSumChain([1,3,2,6,2],3));
console.log(maxOfSumChain2([1,3,2,6,2],3));