/** 
 * Viết function trả về n phần tử đầu tiên có trong mảng.
*/

function first(arr, n) {
    // your code here...
    if(arr === null){
        return void 0;
      }
      if(n === null){
        return arr[0];
      }
      if(n < 0 )
        return [];
      return arr.slice(0, n);
  }
  
  console.log(first([1, 2, 3], 2)); // expect [1, 2]