/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */
 
function multiply(arr) {
    // Write code here...
    let t = 1;
    for(let i of arr){
        t*=i;
    }
    return t;
  }

// multiply([2, 3, 4])
// 24