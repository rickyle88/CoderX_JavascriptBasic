var a = 10;

var x = --a + a++;
console.log(x);

// Nhấn Run để chạy code.
// Giải thích vì sao kết quả là 18.

// --10 + a++       10
// 9 + a++          9
// 9 + 9++          9
// 9 + 9            10
// 18

