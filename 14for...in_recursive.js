/**
 * Sử dụng vòng lặp for...in để in ra tất cả các key trong object sau, in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */

var apartment = {
    bedroom: {
        area: 20,
        bed: {
            type: 'twin-bed',
            price: 100
        }
    }
};

/**
 * Kết quả mong muốn:
 * bedroom
 * area
 * bed
 * type
 * price
 * Chú ý: không cần hiển thị ra đúng thứ tự như trên
 */

function getObjectKey(obj, keys=[]) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object') {
                keys.push(key);
                getObjectKey(obj[key],keys);
            } else {
                keys.push(key);
            }
        }
    }
    return keys;
}

let result = getObjectKey(apartment);
console.log(result);

// [ 'bedroom', 'area', 'bed', 'type', 'price' ]
