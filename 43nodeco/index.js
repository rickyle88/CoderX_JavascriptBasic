var fs = require('fs');

// Install node co module
// npm install co --save
var co = require('co');

function readFilePromise(path){
    return new Promise(function(resolve, rejected){
        fs.readFile(path, {encoding:'UTF8'}, function(err, data){
            if(err){
                rejected(err);
            }else{
                resolve(data);
            }
        })
    })
}

// Generator function
// https://javascript.info/generators-iterators

co(function* (){
    // Use promise with yield keyword, yield return resolve
    // var song1 = yield readFilePromise('./song1.txt');
    // var song2 = yield readFilePromise('./song2.txt');
    // var song3 = yield readFilePromise('./song3.txt');
    // return [song1, song2, song3];

    var values = yield[
        readFilePromise('./song1.txt'),
        readFilePromise('./song2.txt'),
        readFilePromise('./song3.txt'),
    ]
    return values;
    
}).then(function(values){
    console.log(values);
}).catch(function(err){
    console.log(err);
})


// co.wrap return function => promise
// files: array
var readFiles = co.wrap(function* (files){
    // We need to convert array of String -> array of Promise
    var values = yield files.map(function(file){
        return readFilePromise(file);
    })
    return values;
})

readFiles(['./song1.txt', './song2.txt', './song3.txt'])
    .then(function(values){
        console.log(values);
    })


