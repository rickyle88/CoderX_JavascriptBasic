/**
 * Viết hàm countProperty để in ra độ dài của một đối tượng
 * @param {object}
 * @return {number}
 * 
 * Example: 
 * var student = {
 *      name: "Jerry", 
 *      age: 14,
 *      role: "student"
 *  }
 * lengthObj(student); // length: 3
}
*/

function countProperty(obj) {
    // viết code ở đây
    let count = 0;
    for(let i in obj){
        count++;
    }
    return count;

    // return Object.keys(obj).length;
}