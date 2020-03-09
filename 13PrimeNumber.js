function isPrimeNumber(x){
    if(x === 1) return false;
    if(x === 2) return true;
 
    for(let i = 2; i < x; i++){
        if(x % i === 0){
            return false;
        }
    }
   
    return true;
}

console.log(isPrimeNumber(5));

// Print prime numbers from 2 to n
function printAllPrimeNumbers(n){
    for(let i = 2; i <= n; i++){
        if(isPrimeNumber(i)){          
            console.log(i);
        }
    }
}

printAllPrimeNumbers(5);