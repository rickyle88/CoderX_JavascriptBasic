// viết hàm tạo mới một 1 string từ n ký tự từ vị trí đầu và cuối của chuỗi cũ
// newString("1wyg5yhd45", 2) // "1w45"
function newString(str, n) {
    // viết code ở đây.
    return str.slice(0,n) + str.slice(-n);
}

// Method 2
function newString2(str, n){
    const arr = str.split("");  
    return [...arr.slice(0, n), ...arr.slice(-n)].join("");
  }

console.log(newString('1wyg5yhd45',2));