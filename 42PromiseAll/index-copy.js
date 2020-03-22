var fs = require('fs');

function readFilePromise(path){
    return new Promise(function(resolve,rejected){
        fs.readFile(path,{encoding:'UTF8'},function(err, data){
            if(err){
                rejected(err);
            }else{
                resolve(data);
            }
        })
    })
}

// readFilePromise('./song1.txt')
// .then(function(song1){
//     console.log(song1);
//     return readFilePromise('./song2.txt');
// })
// .then(function(song2){
//     console.log(song2);
//     return readFilePromise('./song3.txt');
// })
// .then(function(song3){
//     console.log(song3);

// })
// .catch(function(err){
//     console.log(err);
// });

Promise.all([
    readFilePromise('./song1.txt'),
    readFilePromise('./song.txt')
    .catch(function(err){
        console.log(typeof err);
        if(JSON.stringify(err).includes("ENOENT")){
            return;
        }
        throw err;
    })  
    ,
    readFilePromise('./song3.txt')
    .catch(function(err){
        console.log(typeof err);
        if(JSON.stringify(err).includes("ENOENT")){
            return;
        }
        throw err;
    })  
    // when all resolved
]).then(function(values){
    // return array
    console.log(values);
}).catch(function(err){
    console.log(err);
})