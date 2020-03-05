var a = 1; 
console.log(a++);       
// 1
// return value before increment

var b = 1;
console.log(++b);           
// 2
// return value after increment

var c = 5;
console.log(c--);
// 5
//  return value before decrement

var d = 5;
console.log(--d);
// 4;
// return value after decrement

var e = 5;
var t = e++ + ++e;
// 5 + ++e
// 5 + ++6
// 5 + 7
// 12


var g = 5;
var s2 = g++ + ++g - --g + g--;
// 5 + ++g - --g + g--;             6
// 5 + ++6 - --g + g--;             6
// 5 + 7 - --g + g--;               7
// 5 + 7 - --7 + g--;               7
// 5 + 7 - 6 + g--;                 6
// 5 + 7 - 6 + 6--;                 6
// 5 + 7 - 6 + 6;                   5
// 12


var x = 5;
var y = 10;
var s3 = x++ * y-- + --x * ++y;
// 5++ * 10-- + --x * ++y;          x=5, y=10
// 5 * 10 + --x * ++y;              x=6, y=9
// 5 * 10 + --6 * ++9               x=6, y=9
// 5 * 10 + 5 * 10                  x=5, y=9



