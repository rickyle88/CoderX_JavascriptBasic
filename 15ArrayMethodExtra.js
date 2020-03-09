var arrTest = ['a','b','c','d'];

// Length lấy độ dài số phần tử trong mảng
console.log(arrTest.length); // 4

// Foreach vòng lặp nhận 3 tham số item: nội dung (a,b,c,d), index: số thứ tự vòng item, array: mảng gốc.
arrTest.forEach(function(item,index,array){
  console.log(item,index,array);
 });

//Push đặt vào cuối mảng 1 phần tử
var newArr = arrTest.push('e'); //trả về length mảng mới
console.log(arrTest); // [ 'a', 'b', 'c', 'd', 'e' ]

// Pop đẩy ra phần tử cuối cùng của một mảng  
var newArr1 = arrTest.pop(); // trả về phần tử bị đẩy ra
console.log(arrTest); // [ 'a', 'b', 'c', 'd' ]

// Shift đẩy ra một phần tử đầu tiên của mảng 
var newArr1 = arrTest.shift(); // trả về phần tử bị đẩy ra
console.log(arrTest); //[ 'b', 'c', 'd' ]

// Unshift đặt vào đầu mảng 1 phần tử
var newArr2 = arrTest.unshift('a'); //trả về length mảng mới
console.log(arrTest); // [ 'a', 'b', 'c', 'd' ]

// indexOf tìm kiếm 1 phần tử trong mảng
var testIndexOf = arrTest.indexOf('a'); // trả về số thứ tự của phần tử trong mảng
console.log(arrTest[testIndexOf]);

// Splice lấy ra phần tử của mảng gồm 2 tham số: số thứ tự bắt đầu của phần tử muốn lấy ra, và số lượng phần tử muốn lấy ra
var testSplice = arrTest.splice(0, 2); // [ 'a', 'b' ]
console.log(arrTest); // [ 'c', 'd' ]

// Slice sao chép ra một mảng mới từ mảng củ
var newArr3 = arrTest.slice();
console.log(newArr3); // [ 'c', 'd' ]

// ///////
// Tạo 1 mảng:
var arr = ['Táo', 'Chuối', 'Dưa hấu', 'Sầu riêng'];

//Tìm ra index của một phần tử trong mảng:
var indexOfA = arr.indexOf('Ổi');
console.log('index of A ' + indexOfA);
console.log("********************************** \n");
 
// let arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

// Thay thế phần tử bắt đầu tại vị trí  index thứ 3 bằng giá trị 'M': 
var removeItemFrom = arr.splice(3,1,'M');
console.log(arr);
console.log("********************************** \n");

// Xóa  phần tử bắt đầu tại vị trí thứ 3: 
var removeItemFrom = arr.splice(3,1);
console.log(arr);
console.log("********************************** \n");

// Thêm 2  phần tử bắt đầu tại vị trí thứ 3: 
var removeItemFrom = arr.splice(0,1,"Dưa chuột","Dưa gang");
console.log(arr);
console.log("********************************** \n");

 // Coppy array: trả về bản sao của một phần mảng thành đối tượng mảng mới được chọn từ điểm bắt đầu tới điểm kết thúc. Tuy nhiên không bao gồm kết thúc:
 //Mảng gốc không bị sửa đổi;
 var CoppyA = arr.slice(1,2);
 console.log(CoppyA);
