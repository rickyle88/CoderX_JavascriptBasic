/**
 * Count the occurrences of each element inside an array using reduce
 * @params {array}
 * @return {object}
 * Example: 
 * countOccurrences(['a', 'b', 'c', 'b', 'a']) // { a: 2, b: 2, c: 1 };
}
*/

let array = ['a', 'b', 'c', 'b', 'a'];
function countOccurrences1(arr) {
    // viết code ở đây.
    return arr.reduce(function (a, v, i) {
        if(a[v] == null){
            a[v] = 1;
        }else{
            a[v] += 1;
        }
        return a;
    }, {});
}

function countOccurrences2(arr) {
    // viết code ở đây.
    return arr.reduce(function (a, v) {
        if(v in a){
            a[v] += 1;
        }else{
            a[v] = 1;
        }
        return a;
    }, {});
}

function countOccurrences3(arr) {
    var arrSort = arr.sort();
    var result = arrSort.reduce(function(obj, num){
      // console.log(obj);
      obj[num] = (++obj[num] || 1);
      return obj;
    },{});
    return result;
  }

console.log(countOccurrences2(array));

