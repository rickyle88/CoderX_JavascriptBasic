/**
 * Thiết kế database cho 1 hệ thống quản lý thư viện sách, cho biết thư viện này có hàng trăm giá sách khác nhau, sách được để ở bất kì giá nào không theo danh mục nào.
 * Mỗi cuốn sách có 1 mã khác nhau.
 * Hệ thống cho phép đăng ký người dùng mới, một người có thể mượn nhiều sách khác nhau trong một khoảng thời gian hữu hạn.
 * Hệ thống có thể lưu lịch sử ai đã mượn sách nào, bắt đầu mượn từ bao lâu, trả lúc nào.
 * Hệ thống có lưu lại số ngày quá hạn tổng cộng của 1 người dùng, ví dụ sách A quá 2 ngày, sách B quá 3 ngày -> tổng 5 ngày
 */

var giaSach = [
    { name: 'Giá 1', id: 1 },
    { name: 'Giá 2', id: 2 },
    { name: 'Giá 3', id: 3 },
    { name: 'Giá 4', id: 4 },
    { name: 'Giá 5', id: 5 }
];


var sach = [
    { name: 'Book 1', id: 1, giaSach: 1, ngayMuon: '2018/9/11', ngayTra: '2018/9/20' },
    { name: 'Book 2', id: 2, giaSach: 1, ngayMuon: '2018/9/11', ngayTra: '2018/9/20' },
    { name: 'Book 3', id: 3, giaSach: 2, ngayMuon: '2018/9/11', ngayTra: '2018/9/20' },
    { name: 'Book 4', id: 4, giaSach: 2, ngayMuon: '2018/9/11', ngayTra: '2018/9/20' },
    { name: 'Book 5', id: 5, giaSach: 2 },
    { name: 'Book 6', id: 6, giaSach: 3 },
    { name: 'Book 7', id: 7, giaSach: 3 },
    { name: 'Book 8', id: 8, giaSach: 3 }
]

var nguoiDung = [
    { id: 1, name: 'Hiếu', sach: [{ id: 1, quaHan: 2 }, { id: 2, quaHan: 3 }] },
    { id: 2, name: 'Hậu', sach: [{ id: 3, quaHan: 4 }, { id: 4, quaHan: 0 }] },
    { id: 3, name: 'Huy', sach: [{ id: 5, quaHan: 2 }, { id: 6, quaHan: 1 }, { id: 1, quaHan: 4 }] },
    { id: 4, name: 'Bình', sach: [{ id: 7, quaHan: 0 }, { id: 28, quaHan: 0 }] }
];

// How many users for book id
function getNumberOfUsersForBookId(bookName) {
    // Step 1: from bookName return bookId
    let bookObject = sach.find(function (sa) {
        return bookName === sa.name;
    });

    let count = 0;
    for (let i of nguoiDung) {
        count += i.sach.filter(function (fi) {
            return fi.id === bookObject.id;
        }
        ).length;

        // return newArr;
    }

    return count;
}

// Sum of past due day for specific user
function sumOfPastDueDay(userId){
    let sumPastDue = nguoiDung.find(function(n){
        return n.id = userId;
    }).sach.reduce(function(a,v){
        return a + v.quaHan;
    },0);

    return sumPastDue;
}

console.log(getNumberOfUsersForBookId('Book 1'));
console.log(sumOfPastDueDay(1));