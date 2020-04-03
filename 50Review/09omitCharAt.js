//Viết function omitCharAt  trả về chuỗi đã được loại bỏ ký tại vị trí n bất kỳ
//Lưu ý cho chuỗi 'abcd' :
// 		element    'a'|'b'|'c'|'d'
//		index 	    0	|	1	|	2	|	3
//  n = 1 ------------------- 'acd'
//  n = 2 ------------------- 'abd'

function omitCharAt(str, n) {
    // viết code ở đây.	
    let result = '';
    for(let i = 0; i < str.length; i++){
        
        if(i!==n){
            result +=str[i];
        }
    }
    return result;

}

// Method 2:
function omitCharAt2(str, n) {
	//Viết function omitCharAt  trả về chuỗi đã được loại bỏ ký tại vị trí n bất kỳ
  //Lưu ý cho chuối 'abcd' :
  // 		element    'a'|'b'|'c'|'d'
  //		index 	    0	|	1	|	2	|	3
  //  n = 4 thì chuỗi trả về là 'abc'
  //  n = 1 ------------------- 'acd'
  //  n = 2 ------------------- 'abd'
  var arr = str.split("");
  for(var i = 0; i < arr.length; i++){
  	if(i === n){
    	arr.splice(i, 1);
      console.log(arr);
    }
  }
  return arr.join("");
	
}

// Method 3
function omitCharAt3(str, n) {
    const arr = str.split("");
    return [...arr.slice(0, n), ...arr.slice(n + 1, arr.length)].join("");
  }

console.log(omitCharAt("Hello Quang Dat", 0));
console.log(omitCharAt("Hello Quang Dat", 8));
