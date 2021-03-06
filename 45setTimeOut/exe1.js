
/**
 * Tạo 1 hàm doAfter nhận vào 2 tham số:
 *  - Tham số thứ 1: 1 function
 *  - Tham số thứ 2: Thời gian x (ms)
 * Hàm này sẽ gọi function sau 1 khoảng thời gian x ms
 */

function doAfter(fn, x) {
    return new Promise(function (resolve, rejected) {
        setTimeout(function () {
            fn();
            resolve();
        }, x);
    })
}

function sayHello() {
    console.log('Hello');
}

function sayHello() {
    console.log('Hello');
}

function sayGoodbye() {
    console.log('Goodbye');
}

doAfter(sayHello, 1000).then(sayGoodbye);
  // Expect:
  // Đợi 1s
  // Hello
  // Goodbye

