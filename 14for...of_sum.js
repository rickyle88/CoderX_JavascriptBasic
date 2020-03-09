/**
 * Giả thiết: numbers là một array các số nguyên
 * Yêu cầu: 
 * - trả về tổng các số, dùng vòng lặp for ... of
 * - nếu array trống trả về 0
 */

function sum(numbers) {
    // Write code here...
    if(numbers.length===0) return 0;
    let sum = 0;
    for (let i of numbers) {
        sum += i;
    }
    return sum;
}

let arr = [1, 2, 3];
console.log(sum(arr));