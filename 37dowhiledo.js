// sum from 1 to 10
for(let i = 1; i <= 10; i++){
    console.log(i);
}

let i = 1;
while(i<=10){
    console.log(i);
    ++i;
}

do{
    console.log(i);
    ++i;
}while(i <= 10)


/**
 * Sử dụng vòng lặp while tính tổng các số lẻ nhỏ hơn x.
 */

function sum(x) {
    // viết code ở đây.
    let i = 1;
    let sum = 0;
    while(i<x){
        if(i%2!==0){
            sum += i;
        }
        i++;
    
        
    }
    return sum;
  } 
  

/**
 * Sử dụng vòng lặp while để tìm bội số chung lớn nhất của 3 và 5 trong khoảng từ 0 đến 1000
 */

var i =1000;
while(i>=0){
  if(i%3==0 && i%5 ==0){
    console.log(i);
    break;
  }
  i--;
}
