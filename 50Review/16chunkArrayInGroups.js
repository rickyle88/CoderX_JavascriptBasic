/* Write a function that splits an array (first argument) into groups 
the length of size(second argument) and returns them as a two-dimensional array.
Example
 chunkArrayInGroups(["a", "b", "c", "d", "e"], 2) // [["a", "b"], ["c", "d"], ["e"]]
*/
function chunkArrayInGroups(arr, size) {
    // write code here.

    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));

    }
    return result;
}

function chunkArrayInGroups2(arr, size){
    let newArr = [];
    let q = arr.length  / size;
     
    for(let i = 0; i < q; i++){
          newArr = [...newArr, arr.slice(0 + i * size, (i + 1) * size)];
    } 
    return newArr;
  }

console.log(chunkArrayInGroups(["a", "b", "c", "d", "e"], 2));

let arrStr = ["a", "b", "c", "d", "e"];
console.log(arrStr.slice(0,3));