/*
  - Viết hàm findMaxDiff nhận tham số là một mảng integer (mảng số nguyên)
  - Trả về sự khác biệt lớn nhất giữa hai phần tử liền kề của mảng đó.
  - Nếu mảng có 1 phần tử hoặc không có phần tử nào trả về 0
  Example: 
  [1, -10, 5, 18, -9, 5] => 27
*/

function findMaxDiff(arr){
    let max = 0;
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] - arr[j] > max){
                max = arr[i] - arr[j];
            }
        }
    }
    return max;
}
let arr = [1, -10, 5, 18, -9, 5];
console.log(findMaxDiff(arr)) ;