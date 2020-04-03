// viết hàm kiểm tra xem một chuỗi bắt đầu bằng "Java" hay không 
function startWith(str){
    // viết code ở đây.
    let strArr =  str.split(' ');
    // if(strArr[0].slice(0,4) === 'Java' ) return true
    // else return false;
    return strArr[0].slice(0,4) === 'Java' ? true : false;
  }

  console.log(startWith('Javascript'));