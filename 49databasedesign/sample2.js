/**
 * Thiết kế database cho 1 hệ thống quản lý thư viện sách, cho biết thư viện này có hàng trăm giá sách khác nhau, sách được để ở bất kì giá nào không theo danh mục nào.
 * Mỗi cuốn sách có 1 mã khác nhau.
 * Hệ thống cho phép đăng ký người dùng mới, một người có thể mượn nhiều sách khác nhau trong một khoảng thời gian hữu hạn.
 * Hệ thống có thể lưu lịch sử ai đã mượn sách nào, bắt đầu mượn từ bao lâu, trả lúc nào.
 * Hệ thống có lưu lại số ngày quá hạn tổng cộng của 1 người dùng, ví dụ sách A quá 2 ngày, sách B quá 3 ngày -> tổng 5 ngày
 */
var books = [
    { id: 0, name: 'LTHDT', timeBorrow: 3 },
    { id: 1, name: 'HDH', timeBorrow: 4 },
    { id: 2, name: 'CTDL&GT', timeBorrow: 5 },
    { id: 3, name: 'CSDL', timeBorrow: 6 },
    { id: 4, name: 'NMLT', timeBorrow: 7 },
    { id: 5, name: 'KTLT', timeBorrow: 8 },
    { id: 6, name: 'HTQLTT', timeBorrow: 9 }
];
var users = [
    { id: 0, name: 'user0', age: 20 },
    { id: 1, name: 'user1', age: 21 },
    { id: 2, name: 'user2', age: 22 },
    { id: 3, name: 'user3', age: 23 },
    { id: 4, name: 'user4', age: 24 },
];

function registerNewUser(name, age) {
    var newUser = { id: users.length, name: name, age: age };
    users.push(newUser);
};

var history = [];
function saveBorrowHistory(idUser, idBook, borrowDate) {
    var borrowObject = { idUser: idUser, idBook: idBook, borrowDate: borrowDate };
    history.push(borrowObject);
};

function saveReturnHistory(idUser, idBook, returnDate) {
    return history.map(function (item) {
        if (item.idBook === idBook) {
            item['returnDate'] = returnDate;
        }
        return item;
    });
};

function diff(end, start) {

    return Math.floor((new Date(end) - new Date(start)) / (84600 * 1000));
}


function getOutofDate(idUser) {
    var filterUser = history.filter(function (item) {
        return item.idUser === idUser;
    });
    console.log(filterUser);

    var sum = filterUser.reduce(function (sumDay, item) {
        var idBook = books.find(function (x) {
            return x.id === item.idBook
        });
        if (diff(item.returnDate, item.borrowDate) - idBook.timeBorrow > 0) {
            sumDay += diff(item.returnDate, item.borrowDate) - idBook.timeBorrow;
        }

        return sumDay
    }, 0);
    return sum

};
saveBorrowHistory(0, 0, '2018/09/08');
saveReturnHistory(0, 0, '2018/09/12');
saveBorrowHistory(0, 1, '2018/09/06');
saveReturnHistory(0, 1, '2018/09/18');
saveBorrowHistory(1, 2, '2018/09/08');
saveReturnHistory(1, 2, '2018/09/18');

console.log(history);
console.log(history.length);
getOutofDate(0);

