var fs = require('fs');

function readFilePromise(path){
    return new Promise(function(resolve, rejected){
        fs.readFile(path, {encoding: 'UTF8'}, function(err, data){
            if(err){
                rejected(err);
            }else{
                resolve(data);
            }
        })
    })
}

// asyn await return a promise
async function run(){
    var song1 = await readFilePromise('./song1.txt');
    var song2 = await readFilePromise('./song2.txt');
    return [song1, song2];
}

run().then(function(values){
    for(let v of values){
        console.log(v);
    }
})