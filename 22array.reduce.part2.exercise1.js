// Given an array of arrays, flatten them into a single array

/**
 * Example: 
 * var arrays = [
 *    ["1", "2", "3"],
 *    [true],
 *    [4, 5, 6]
 *  ];
 * 
 * flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];
 */

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

function flatten1(arr) {
    // viết code ở đây.
    return arr.reduce(function (a, v) {
        for (let i of v) {
            a.push(i);
        }
        return a;
    }, [])
}

function flatten2(arr) {
    return arr.reduce((x1,x2)=>{
      return x1.concat(x2);
    });
}

console.log(flatten(arrays));

