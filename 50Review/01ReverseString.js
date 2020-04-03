// https://dev.to/sarah_chima/reverse-a-string-four-javascript-solutions-2nbm
// What we will do here is to create an empty string that will hold the reversed string, loop through each character in the string and append it to the beginning of the new string.


// Viết hàm đảo ngược chuỗi
// Example
// reverse('abc') // 'cba'
function reverse(str) {
    // viết code ở đây.
    let reverseString = "";
    for (let c of str) {
        reverseString = c + reverseString;
    }
    return reverseString;
}

//   Solution 3 - Using the Array.reduce() method
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value. You can read about it if you are not familiar with it.

// To use the reduce method, we need to convert our string to an array. Next, we use the reduce method to convert it to a reversed string. The reducer, in this case, appends each character of the string to the beginning of the accumulator which, in the code below, is reversed.

function reverseString(string) {
    //convert the string to an array
    const array = string.split('');

    //use the reduce method to convert the array to a reversed string
    const reversedString = array.reduce((reversed, character) => {
        return character + reversed
    }, '');

    return reversedString;
}

// Solution 4 - Using recursion
// Are you a friend of recursion? If not, l
function reverse(string){
    //base case: if str is empty return str 
   if(string === ""){
        return string 
   } else{
        return reverse(string.substring(1)) + string[0];
   }
}