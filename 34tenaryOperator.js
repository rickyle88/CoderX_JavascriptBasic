// condition ? experession when true : expression when false;

function tossCoin() {
    var value = Math.random();
    var result = (value < 0.5) ? 'Mat sap' : 'Mat ngua';
    return result;

    
}

tossCoin();

var age = 19;
var canDrive;

// Chuyển đổi đoạn code dưới đây dùng ternary operator mà không làm thay đổi logic
/**
 * if (age > 16) {
 *  canDrive = true;
 * } else {
 *  canDrive = false;
 * }
 * 
 * @param {number} age;
 * @return {boolean} canDrive;
 */

function checkCanDrive(age) { 
  // Viết lại ở đây
  canDrive = (age>16) ? true : false;
  return canDrive;
}


// Sử dụng ternary operator thay thế cho if else sao cho đoạn code sau không thay đổi logic
function doSomething(a) {
    var b;
    if (a > 0) {
      b = 1;
    } else if (a < 0) {
      b = 2;
    } else {
      b = 3;
    }
    return b;
  }
  
  function doSomethingTernary(a) {
      var b;
      b = (a>0) ? 1 : (a<0) ? 2 : 3;
      return b;
  }
  
