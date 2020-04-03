// Viết hàm để viết hoa chữ cái đầu của từng từ trong câu
// Example
// capitalize("abc") // "Abc"
function capitalize1(str) {
    // viết code ở đây
    // Step 1 : Convert string into array
    let arrStr = str.split(' ');

    for(let i = 0; i < arrStr.length; i++){
        arrStr[i] = arrStr[i].charAt(0).toUpperCase() + arrStr[i].slice(1);
    }

    return arrStr.join(' ');
}

function capitalize2(str) {
    var b = str.replace(/(^|\s)\S/g, l => l.toUpperCase())
    console.log(b);
}

function capitalize(str) {
	return str.split(" ").map(word=> word[0].toUpperCase() + word.slice(1)).join(" ");
}

console.log(capitalize('ab bc'));


