// viết hàm lấy ra giá trị lớn nhất trong 3 số nhập vào
function findMax(a, b, c) {
    // viết code ở đây.
}

array = [[5, 2, -5], [21, 36, 4], [6, -12, 0]];

var min = array.map(function (x) {
    return Math.min.apply(null, x);
});

console.log(min);