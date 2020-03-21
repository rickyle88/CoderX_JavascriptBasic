// Promise
// https://www.npmjs.com/package/promise-fs
// npm init
// npm install promise-fs

// var fs = require('promise-fs');

// function onDone(song) {
//     console.log(song);
// }

// function onError(err) {
//     console.log(err);
// }

// Method 1
// fs.readFile('./song1.txt',{encoding:'UTF8'})
//     .then(function(song1){
//         console.log(song1);
//     })
//     .catch(function(err){
//         console.log(err);
//     });

// Method 2
// fs.readFile('./song1.txt', { encoding: 'UTF8' })
//     .then(onDone)
//     .catch(onError);

// Method 3
// function readFile(path){
//     return fs.readFile(path, {encoding:'UTF8'});
// }

// readFile('./song1.txt')
//     .then(onDone)
//     .then(function(){
//         return readFile('./song2.txt');
//     })
//     .then(onDone)
//     .then(function(){
//         console.log('All done');
//     })
//     .catch(onError);


var fs = require('fs');

function readFilePromise(path) {
    return new Promise(function (resolve, rejected) {
        fs.readFile(path, { encoding: 'UTF8' }, function (err, data) {
            if (err) {
                rejected(err);
            } else {
                resolve(data);
            }
        })
    })

}

readFilePromise('./song1.txt')
    .then(function (song1) {
        console.log(song1);
    })
    .catch(function (err) {
        console.log(song1);
    });

readFilePromise('./song.txt')
    .then(function (song1) {
        console.log(song1);
    })
    .catch(function (err) {
        console.log("Error is: " + err);
    });