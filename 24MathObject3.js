/* 
  Viết hàm positiveNumber để chuyển các số âm trong một mảng thành các số dương.
  Yêu cầu sử dụng Math Object
*/

function positiveNumber(arr) {
    // your code here
    return arr.map(function(n){
        if(n<0){
            return Math.abs(n);
        }else return n;
    })
  }
  
//   positiveNumber([-4, 42, -31, -36, -41, -18, 21, -8, -22, -42, 34, -29, 28, -46, 23, -18, -30, -10, -3, -32, -8, -24, -28, -49, 34, 9, 40, -42, 12, -29, 2, 10, -36, -27, 24, -27, 5, 47, 15, -14, -45, -49, 7, -14, 8, 32, 18, -20, -28, 17])


// [ 4, 42, 31, 36, 41, 18, 21, 8, 22, 42, 34, 29, 28, 46, 23, 18, 30, 10, 3, 32, 8, 24, 28, 49, 34, 9, 40, 42, 12, 29, 2, 10, 36, 27, 24, 27, 5, 47, 15, 14, 45, 49, 7, 14, 8, 32, 18, 20, 28, 17 ]