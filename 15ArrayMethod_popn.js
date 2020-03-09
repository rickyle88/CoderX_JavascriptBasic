/*
	Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
*/
function removeEnd(arr, n) {
    // your code here!
    for(let i = 0; i<n; i++){
        arr.pop();
    }
  }

let arr1 = [2, 3, 1, 8, 9, 7];
removeEnd(arr1,3);
console.log(arr1);