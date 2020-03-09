/**
 * Viết hàm calculate trả về tích các số từ start đến end, không tính end 
 * Ví dụ: calculate(2, 5) trả về kết quả 24 (vì 2 * 3 * 4 = 24)
 */
function calculate(start, end) {
    // viết code ở đây.
    let m = 1;
    for(let i = start; i < end; i++){
        m*=i;
    }
    return m;
  }
  