// Date
// moment.js
// var now = new Date();

// // monthIndex : Jan - 0, Dec - 11
// var myBirthday =new Date(1990, 4, 17);
// // 05/17/1990

// // In every date object, has value : number of milliseconds from 1-1-1970
// console.log(now.getTime());

// console.log(myBirthday.getTime());

// moment.js
// npm init
// npm install moment --save

var moment = require('moment');

var now = moment();
console.log(now._d);
console.log(now.format());
console.log(now.format('YYYY-MM-DD'));

// Display how many hours/day before/after
// A common way of displaying time is handled by moment#fromNow. This is sometimes called timeago or relative time.
var n1 = moment('2020-03-22 10:00');
console.log(n1.fromNow());


