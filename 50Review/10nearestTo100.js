// Viết hàm nhận vào 2 số a, b
// Trả về số gần 100 nhất
// nearestTo100(89, 180) // 89
function nearestTo100(a, b) {
    // viết code ở đây.
    let aTo100 = Math.abs(100 - a);
    let bTo100 = Math.abs(100 - b);
    return (aTo100<bTo100) ? a : b;
}

console.log(nearestTo100(10, 130));
console.log(nearestTo100(89, 189));