var fs = require('fs');

// Sync
// var song1 = fs.readFileSync('./song1.txt',{encoding:'UTF8'});
// var song2 = fs.readFileSync('./song2.txt',{encoding:'UTF8'});
// var song3 = fs.readFileSync('./song3.txt',{encoding:'UTF8'});

// Async
fs.readFile('./song1.txt', {encoding:'UTF8'}, function(err1, song1){
    console.log(song1);
    // This function will run after song1 is read
    fs.readFile('./song2.txt', {encoding:'UTF8'}, function(err2, song2){
        console.log(song2);
        fs.readFile('./song3.txt', {encoding:'UTF8'}, function(err3, song3){
            console.log(song3);
        })
    })
});

// console.log(song1, song2, song3);