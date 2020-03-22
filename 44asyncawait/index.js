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

