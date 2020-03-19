/**
 * Sử dụng module `request` (https://www.npmjs.com/package/request) để tải dữ liệu từ đường link sau về và hiển thị ra màn hình:
 * https://randomuser.me/api/
 */
// npm init
// npm install request

let request = require('request');

console.time();

request('https://randomuser.me/api/', function(err, response, body){
    console.log('body: ', body);
})

console.timeEnd();

