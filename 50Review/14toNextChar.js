/* Viết hàm toNextChar dùng để thay thế mọi ký tự trong một chuỗi 
thành ký tự theo sau nó trong bảng chữ cái. Ví dụ: "Hello" chuyển thành "Ifmmp"
// Tham số:
// - String: chuỗi nhập vào ban đầu.
*/
function toNextChar(str) {
    // viết code ở đây.	
    let result = '';
    for(let i = 0; i < str.length; i++){
        let tmp = str.charCodeAt(i)
        result+= String.fromCharCode(tmp+1);
    }
    return result;
}

console.log(toNextChar('Hello'));