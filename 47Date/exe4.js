/**
 * Tính số ms chênh lệch giữa date b và date a
 */

function diffMs(a, b) {
    // viết code ở đây 
    let a1 = new Date(a);
    let b1 = new Date(b);

    return Math.abs(a1.getTime() - b1.getTime());
}