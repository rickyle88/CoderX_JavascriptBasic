function tossCoin() {
    var value = Math.random();
    if (value < 0.5) {
        console.log('Mat sap');
    } else {
        console.log('Mat ngua');
    }
}

tossCoin();

function shouldIDateHer() {
    var value = Math.random();
    if (value < 0.5) {
        console.log('Yes, of course');
    } else {
        console.log('No, she has a boy friend');
    }
}


function countBills(bills) {
    var total = 0;

    for (let bill of bills) {
        if (!bill.fake) {
            total += bill.value;
        } else {
            console.log('fake bill ', bill);
            // exit for loop
            break;
        }

    }
    return total;
}

var bills = [
    { value: 10000 },
    { value: 20000 },
    { value: 20000, fake: true },
    { value: 500000 },
];

var total = countBills(bills);
console.log(total);

/**
 * Chỉ sử dụng vòng lặp for và if else để hoàn thiện hàm tìm số lớn nhất trong 1 array
 */

function max(arr) {
    // your code here
    let max = arr[0];
    for (let num of arr) {
        if (max < num) {
            max = num;
        }
    }
    return max;
}


/**
 * Viết hàm xếp hạng điểm số theo công thức sau:
 * [0-5): C
 * [5-7): B
 * [7-10]: A
 */
function grade(score) {
    // your code here!
    if (score >= 0 && score < 5) {
        return 'C';
    } else if (score >= 5 && score < 7) {
        return 'B';
    } else if (score >= 7 && score <= 10) {
        return 'A';
    }
}

/**
 * Viết hàm isTruthy nhận vào 1 giá trị, trả về true nếu giá trị đó là 1 giá trị truthy, còn không thì trả về false
 * Gợi ý: Nếu không hiểu truthy là gì hãy google với từ khoá `truthy falsy`
 */

function isTruthy(x) {
    if (x) { return true }
    else { return false };
}

console.log(isTruthy(true));
console.log(isTruthy('0'));
console.log(isTruthy([]));
console.log(isTruthy(1));
console.log(isTruthy(0));
console.log(isTruthy(NaN));
console.log(isTruthy(false));
console.log(isTruthy(undefined));
console.log(isTruthy(''));
console.log(isTruthy(null));


/**
* Viết hàm isTruthy nhận vào 1 giá trị, trả về true nếu giá trị đó là 1 giá trị truthy, còn không thì trả về false
* Gợi ý: Nếu không hiểu truthy là gì hãy google với từ khoá `truthy falsy`
*/

function isTruthy(x) {
    if (x) { return true }
    else { return false };
}

console.log(isTruthy(true));
console.log(isTruthy('0'));
console.log(isTruthy([]));
console.log(isTruthy(1));
console.log(isTruthy(0));
console.log(isTruthy(NaN));
console.log(isTruthy(false));
console.log(isTruthy(undefined));
console.log(isTruthy(''));
console.log(isTruthy(null));

// true
// true
// true
// true
// false
// false
// false
// false
// false
// false
