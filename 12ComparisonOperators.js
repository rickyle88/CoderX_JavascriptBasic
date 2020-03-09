// > >= < <= === !== (== !=)

console.log(5 > 5);         //false
console.log(5 >= 5);        //true
console.log(10 === 10);     //true
console.log(10 !== 100);    //true
var a = 10 != 100;          //true


var b = 'a' === 'a';        //true

var a = [1, 2];
var b = [1, 2];
console.log(a === b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 array có vẻ giống nhau. Viết câu trả lời ở dưới đây.
//To compare arrays, loop through them and compare every value:

var f = true;
for (let i = 0; i < a.length; i++) {

    if (a[i] !== b[i]) {
        f = false;
    }

}

console.log(f);

