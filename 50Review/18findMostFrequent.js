/* Hãy viết một hàm để tìm một số có số lần lặp lại nhiều nhất trong một dãy các số nguyên.

Input: dãy số
Output: 1 dãy số bao gồm các số có số lần lặp lại nhiều nhất

ví dụ:
Input: [1,2,3,4,1,2,2,1]
Output: [1,2]*/

function findMostFrequent(arr) {
    // Viết code tại đây!
    // Create new dictionary object
    let dictionaryObject = {};
    
    for(let i of arr){
        // if(typeof x[value] === 'undefined')
        if(!dictionaryObject[i]){
            dictionaryObject[i] = 1;
        }else{
            dictionaryObject[i] += 1;
        }
    }

    // Object {1: 3, 2: 3, 3: 1, 4: 1}

    // Find max occurency in object
    let max = 0;
    for(let index in dictionaryObject){
        if(max < dictionaryObject[index]){
            max = dictionaryObject[index];
        }
    }

    // Create new arry to hold result
    let result = [];
    for(let i in dictionaryObject){
        if(max === dictionaryObject[i]){
            result.push(parseInt(i));
        }
    }

    return result;
}

console.log(findMostFrequent([1,2,3,4,1,2,2,1]));

// Method 2: Use reduce
mocha.setup('bdd');
var expect = chai.expect

/* Hãy viết một hàm để tìm một số có số lần lặp lại nhiều nhất trong một dãy các số nguyên.

Input: dãy số
Output: 1 dãy số bao gồm các số có số lần lặp lại nhiều nhất

ví dụ:
Input: [1,2,3,4,1,2,2,1]
Output: [1,2]*/

function findMostFrequent(arr) {
// Viêt hàm tại đây!
var countedNames = arr.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
var arr =[];
var arr1 = [];
for(var d in countedNames){
		arr.push(countedNames[d]);
}
var max = Math.max.apply(null, arr);
for(let d in countedNames){
	if(max === countedNames[d]){
  arr1.push(Number(d));
  }
}
	return arr1;



}

describe('findMostFrequent', function() {
  it('The number which appears most', function() {
    expect(findMostFrequent([1,2,3,4,1,2,2])).to.eql([2]);
  });

  it('The number which appears most', function() {
    expect(findMostFrequent([1,1,2,2,1])).to.eql([1]);
  });

  it('The number which appears most', function() {
    expect(findMostFrequent([ 0, 16, 23, 10, 7, 32, 36, 5, 38, 7, 31, 13, 23, 16, 14, 26, 13, 37, 36, 26 ])).to.eql([ 7, 13, 16, 23, 26, 36 ]);
  });
  
  it('The number which appears most', function() {
    expect(findMostFrequent([ 11, 18, 28, 9, 25, 25, 33, 1, 0, 13, 10, 7, 39, 37, 31 ])).to.eql([ 25 ]);
  });
  
      
});

mocha.run();
