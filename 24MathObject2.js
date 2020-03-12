/** 
 * Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
 * Làm tròn điểm trung bình
 * Ví dụ: [8, 8, 6.75]  => 8
 * Gợi ý: Dùng Math.round 
*/

function average(arr) {
    // your code here!
    let sum = arr.reduce(function(a,v){
        return a+v;
    })
    return Math.round(sum / arr.length);
}

// average([6, 5.6, 7, 8, 8, 8, 6.75, 8.7, 9.5, 5.9, 9.9, 6, 8, 9.0, 7.3])


// 8