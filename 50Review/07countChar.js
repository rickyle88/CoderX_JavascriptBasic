//Viết 1 function kiểm tra số lương kí tự 'p' và 't' của 1 chuỗi có bằng nhau hay không
//=============================
//input : string
//output : true or false
//=============================

// The g in the regular expression (short for global) says to search the whole string rather than just find the first occurrence. This matches is twice:
// var temp = "This is a string.";
// var count = (temp.match(/is/g) || []).length;
// console.log(count);
//  2

function equal_pt(str){ 
    // viết code ở đây.
    let count_p = (str.match(/p/g) || [] ).length;

    let count_t = (str.match(/t/g) || [] ).length;

    return count_p === count_t ? true : false; 
   }

   console.log(equal_pt('paatpss'));
   console.log(equal_pt('aass'));

// Method 2:
var theString = "This is a string.";
console.log(theString.split("is").length - 1);

// Method 3:
var temp = "This is a string.";

function countOcurrences(str, value) {
  var regExp = new RegExp(value, "gi");
  return (str.match(regExp) || []).length;
}

console.log(countOcurrences(temp, 'is'));