// Create new folder
// npm init
// npm install readline-sync --save

/**
 * Thử chạy code sau
 */
var secretPassword = 'coders.tokyo';
var readline = require('readline-sync');

do {
    var result = readline.question('Nhập vào mật khẩu');
    console.log(result);
} while (result !== secretPassword);


/**
 * Viết đoạn chương trình yêu cầu người dùng nhập vào mật khẩu (để login vô máy tính chẳng hạn), nếu người dùng nhập sai, hiển thị ra "Wrong password", nhập đúng thì hiển thị ra "Welcome!"
 */