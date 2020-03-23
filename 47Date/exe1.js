/**
 * Viết hàm isWeekend nhận vào 1 ngày dưới dạng string YYYY/MM/DD 
 * trả về true nếu ngày đó là 1 ngày cuối tuần (Thứ 7 hoặc Chủ Nhật), 
 * ngược lại trả về false
 */

//  Javascript date getDay() method returns the day of the week for the specified date according to local time. 
// The value returned by getDay() is an integer corresponding to the day of the week: 
// 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.

function isWeekend(dateString) {
    // Write code here...
    var d = new Date(dateString);
    if (d.getDay() === 0 || d.getDay() === 6) {
        return true;
    }
    return false;
}