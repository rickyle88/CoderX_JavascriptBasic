import { privateEncrypt } from "crypto";

var memberCard = {
    tier: 'silver'

};

function getTotal(price, card) {
    var discountRate;

    switch (card.tier) {
        case 'bronze':
            discountRate = 0.02;
            break;
        case 'silver':
            discountRate = 0.05;
            break;
        case 'gold':
            discountRate = 0.08;
            break;
        default:
            discountRate = 0.1;
            break;
    }
    return price * (1 - discountRate);
}

getTotal(500000, memberCard);


/////////////////////////////////////////////
// red, green, orange
var trafficLight = 'green';

function goOrNot(lightValue) {
    switch (lightValue) {
        case 'green':
        case 'orange':
            console.log('Go')
            break;
        default:
            console.log('stop')
            break;
    }
}

goOrNot(trafficLight);


//////////////////////////////
/**
 * Sử dụng switch case và map để chuyển đổi array các chữ thành các số tương ứng theo quy tắc:
 * 'A' hoặc 'a' -> 1
 * 'B' hoặc 'b' -> 2
 *  còn lại -> 0
 */

function transform(arr) {
    // your code here
    return arr.map(function (c) {
        switch (c) {
            case 'A':
            case 'a':
                return 1;
            case 'B':
            case 'b':
                return 2;
            default:
                return 0;
        }
    })
}

let a = transform(['*', 'b', 'a', '#', 'd']);


// [0, 2, 1, 0, 0]