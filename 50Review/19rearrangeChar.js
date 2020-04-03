/*
Hãy viết một hàm để kiểm tra xem có thể sắp xếp các kí tự 
của 1 chuỗi String cho trước thành 1 chuỗi String cho trước khác không?

Input: 2 chuỗi String
Output: True hoặc False

ví dụ:

Input: abc cba
Output: True

Input: abx abb
Output: False
*/

function rearrangeChar(str1, str2) {
    // Viết code tại đây!
    let newArr1 = str1.split('');
    let newArr2 = str2.split('');
    return newArr1.sort().join('').toString() === newArr2.sort().join('').toString();

}

console.log(rearrangeChar('cba','bca'));
